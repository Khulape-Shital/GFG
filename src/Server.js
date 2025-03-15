const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");
const { NodeVM } = require("vm2");
const fs = require("fs");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/execute", (req, res) => {
  const { code, language } = req.body;

  if (language === "javascript") {
    try {
      let output = [];
      const vm = new NodeVM({
        timeout: 2000,
        sandbox: {
          console: { log: (...args) => output.push(args.join(" ")) },
        },
      });

      let result = vm.run(code);
      if (typeof result === "object") {
        result = JSON.stringify(result, null, 2);
      }

      res.json({ output: output.length > 0 ? output.join("\n") : result || "No output" });
    } catch (error) {
      res.json({ error: `Error: ${error.message}` });
    }
  } 
  else if (language === "python") {
    exec(`python -c "${code.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
      if (error) {
        return res.json({ error: stderr || error.message });
      }
      res.json({ output: stdout });
    });
  } 
  else if (language === "cpp") {
    const filename = "temp.cpp";
    fs.writeFileSync(filename, code);

    exec(`g++ ${filename} -o temp && ./temp`, (error, stdout, stderr) => {
      if (error) {
        return res.json({ error: stderr || error.message });
      }
      res.json({ output: stdout });
    });
  } 
  else if (language === "dart") {
    fs.writeFileSync("temp.dart", code);
    exec(`dart temp.dart`, (error, stdout, stderr) => {
      if (error) {
        return res.json({ error: stderr || error.message });
      }
      res.json({ output: stdout });
    });
  } 
  else if (language === "java") {
    fs.writeFileSync("Main.java", code);  // Set file name to Main.java

    exec(`javac Main.java`, (error, stdout, stderr) => {
      if (error) {
        return res.json({ error: stderr || error.message });
      }

      exec(`java Main`, (error, stdout, stderr) => {
        if (error) {
          return res.json({ error: stderr || error.message });
        }
        res.json({ output: stdout });
      });
    });
  } 
  else {
    res.json({ error: "Unsupported language" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
