import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("java"); // Default to JavaScript
  const [isEditing, setIsEditing] = useState(false); // Track if the editor is in edit mode

  // Load the saved code from localStorage if available
  useEffect(() => {
    const savedCode = localStorage.getItem("code");
    if (savedCode) {
      setCode(savedCode); // Load the code from localStorage
    }
  }, []);

  const handleCodeChange = (value) => {
    setCode(value);
    localStorage.setItem("code", value); // Save code to localStorage
    setOutput(""); // Clear output when code changes
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const executeCode = async () => {
    if (!code.trim()) {
      setOutput("Code is empty. Please write some code.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setOutput(result.output || result.error);
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput(`Error: ${error.message}`);
    }
  };

  // Delete Code (Clear the editor and localStorage)
  const deleteCode = () => {
    setCode("");
    setOutput("");
    localStorage.removeItem("code"); // Remove code from localStorage
  };

  // Toggle Edit/Read-only Mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h2>Online Code Editor</h2>

      {/* Language Selector */}
      <label>Select Language:</label>
      <select value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="dart">Dart</option>
        <option value="java">Java</option>
      </select>

      {/* Button Section */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button onClick={toggleEditMode}>
          {isEditing ? "View Code" : "Edit Code"}
        </button>
        <button onClick={deleteCode} style={{ marginLeft: "10px" }}>
          Delete Code
        </button>
        <button onClick={executeCode} style={{ marginLeft: "10px" }}>
          Run Code
        </button>
      </div>

      {/* Monaco Editor */}
      <Editor
        height="400px"
        theme="vs-dark"
        language={language} // Dynamically change editor syntax highlighting
        value={code}
        onChange={handleCodeChange}
        options={{
          readOnly: !isEditing, // Disable editing when in "view" mode
        }}
      />

      {/* Output Section */}
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
