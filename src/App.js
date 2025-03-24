// // // import React from "react";
// // // import CodeEditor from "./CodeEditor"; // Make sure this file path is correct

// // // function App() {
// // //   return (
// // //     <div>
// // //       <h2>Online Code Editor</h2>
// // //       <CodeEditor />
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // import React from "react";
// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
 
// // // import Home from "./Component/Home";  

// // // function App() {
// // //   return (
// // //     <BrowserRouter>
       
// // //       <Routes>
// // //         {/* <Route path="/" element={<Home />} /> */}
// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Nav from "./Component/Nav";
// // import Home from "./Pages/Home";
// // import Python from "./Pages/Python";
// // import Java from "./Pages/Java";
// // import Cpp from "./Pages/Cpp";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Nav />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/python" element={<Python />} />
// //         <Route path="/java" element={<Java />} />
// //         <Route path="/c" element={<Cpp />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import JavaTopics from "./Components/JavaTopics"; // Import JavaTopics
// import Home from "./Components/Home"; // Import Home

// export default function App() {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/JavaTopics" element={<JavaTopics />} /> {/* Add JavaTopics route */}
//       </Routes>
//     </Router>
//   );
// }
