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
                    <Link to="/Python">Python</Link>
                  </li>
                  <li>
                    <Link to="/JavaTopics">Java</Link>
                  </li>
                  <li>
                    <Link to="/C++">C++</Link>
                  </li>
                  <li>
                    <Link to="/Dart">Dart</Link>
                  </li>
                  <li>
                    <Link to="/JavaScript">JavaScript</Link>
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
            {dropdown === "Courses" && (
              <div className="languages">
                <ul>
                  <li>
                    <Link to="/DSA">DSA</Link>
                  </li>
                  <li>
                    <Link to="/WEB_DEV">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/ML">Machine Learning</Link>
                  </li>
                  <li>
                    <Link to="/Flutter">Flutter</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="Articles"
            onMouseEnter={() => setDropdown("Articles")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button>Articles</button>
            {dropdown === "Articles" && (
              <div className="article-menu">
                <ul>
                  <li>
                    <Link to="/CodingArticles">Coding Articles</Link>
                  </li>
                  <li>
                    <Link to="/InterviewTips">Interview Tips</Link>
                  </li>
                  <li>
                    <Link to="/ProjectIdeas">Project Ideas</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <button>Login</button>
      </div>
    </nav>
  );
}
