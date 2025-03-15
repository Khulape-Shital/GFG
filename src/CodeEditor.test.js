// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import CodeEditor from "./CodeEditor";

// // Mocking fetch API
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ output: "Hello, World!" }),
//   })
// );

// test("renders code editor and button", () => {
//   render(<CodeEditor />);
  
//   // Check if the editor is rendered
//   expect(screen.getByText(/Online Code Editor/i)).toBeInTheDocument();
  
//   // Check if the button is rendered
//   expect(screen.getByText(/Run Code/i)).toBeInTheDocument();
// });

// test("updates code when typed", () => {
//   render(<CodeEditor />);
  
//   // Get the editor textarea
//   const editor = screen.getByRole("textbox");
//   fireEvent.change(editor, { target: { value: "console.log('Hello!');" } });

//   // Check if the value is updated
//   expect(editor.value).toBe("console.log('Hello!');");
// });

// test("executes code and displays output", async () => {
//   render(<CodeEditor />);

//   const runButton = screen.getByText(/Run Code/i);
//   fireEvent.click(runButton);

//   // Wait for output to appear
//   await waitFor(() => expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument());
// });
