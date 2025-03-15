import React from "react";
import "./JavaTopics.css";
import CodeEditor from "../CodeEditor";

const javaTopics = {
  "Core Java": [
    "Introduction to Java",
    "Data Types & Variables",
    "Operators",
    "Control Statements",
    "Arrays",
    "Strings",
    "Methods",
  ],
  "Object-Oriented Programming (OOP)": [
    "Classes & Objects",
    "Constructors",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Abstraction",
    "Interfaces",
  ],
  "Exception Handling": [
    "try-catch",
    "finally block",
    "throw, throws",
    "Custom Exceptions",
  ],
  "Collections Framework": [
    "ArrayList",
    "LinkedList",
    "HashSet & TreeSet",
    "HashMap & TreeMap",
    "Queue & PriorityQueue",
  ],
  Multithreading: [
    "Thread Class & Runnable",
    "Thread Life Cycle",
    "Synchronization",
    "Inter-thread Communication",
  ],
  "Java I/O": [
    "File Handling",
    "BufferedReader & Writer",
    "Serialization & Deserialization",
  ],
  "Advanced Java": [
    "JDBC (Java Database Connectivity)",
    "Servlets & JSP",
    "Spring Framework",
    "Hibernate",
  ],
};

export default function JavaTopics() {
  return (
    <div className="Parent">
      <div className="child1" style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Topics Java Contain</h2>
        {Object.entries(javaTopics).map(([category, topics]) => (
          <div key={category} style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#007bff" }}>{category}</h3>
            <ul>
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="child2">
        <p>
          Java is one of the most popular and widely used programming languages.
        </p>
        <ul className="java info">
          <li>
            Used to develop mobile apps, desktop apps, web apps, web servers,
            games, and enterprise-level systems.
          </li>
          <li>
            Java was invented by James Gosling and Oracle currently owns it. JDK
            23 is the latest version of Java.
          </li>
          <li>Java's syntax is similar to C/C++.</li>
          <li>
            Popular platforms like LinkedIn, Amazon, and Netflix rely on Java
            for their back-end architecture,showcasing its stability and
            scalability across different environments.
          </li>
          <li>
            Popularity is so high that 3 Billion+ devices use Java across the
            world.
          </li>
        </ul>
        <div className="question">
          <h2>FAQs - Learn Java Programming</h2>
          <h3>What is Java?</h3>
          <p>
            Developed by Sun Microsystems in 1995, Java is a highly popular,
            object-oriented programming language. This platform independent
            programming language is utilized for Android development, web
            development, artificial intelligence, cloud applications, and much
            more.{" "}
          </p>
          <h3>Why use Java ?</h3>
          <p>
            Java is simple to understand programming language because doesn’t
            contain concepts like : Pointers and operator overloading and it is
            secure and portable.
          </p>
          <h3>What are the major concepts in Java?</h3>
          <p>
            There are 4 major concept in Java that is abstraction,
            encapsulation, polymorphism, and inheritance. Along with this Java
            also works with three OOPs concept
          </p>
          <h3>Why Java is so popular programming language?</h3>
          <p>
            Java is based on object model hence it is one the popular
            programming language.
          </p>
        </div>
        <div>
    <CodeEditor />
    </div>
      </div>
    </div>
  );
}
