import React, { useState } from "react";
import shital from "../Images/shital.png";
import { Link } from "react-router-dom"; 
import "./Nav.css";

export default function Nav() {
  const [dropdown, setDropdown] = useState(null);

  return (
    <nav>
      <div className="Navebar">
        <div className="logo">
          <img src={shital} alt="Logo" height={200} width={200} />
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="Topics">
          <div
            className="Tutorial"
            onMouseEnter={() => setDropdown("Tutorial")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button>Tutorial</button>
            {dropdown === "Tutorial" && (
              <div className="languages">
                <ul>
                  <li>
                    <Link to="/PythonTopics">Python</Link>
                  </li>
                  <li>
                    <Link to="/JavaTopics">Java</Link>
                  </li>
                  <li>
                    <Link to="/CppTopics">C++</Link>
                  </li>
                  <li>
                    <Link to="/DartTopics">Dart</Link>
                  </li>
                  <li>
                    <Link to="/JavaScriptTopics">JavaScript</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="Courses"
            onMouseEnter={() => setDropdown("Courses")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button>Courses</button>
            {dropdown === "Courses" && <div className="languages"></div>}
          </div>

          <div
            className="Articles"
            onMouseEnter={() => setDropdown("Articles")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button>Articles</button>
            {dropdown === "Articles" && <div className="article-menu"></div>}
          </div>
        </div>

        <div className="extras">
          <Link to="/chat" className="hover:underline">
            Chat with Gemini
          </Link>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
