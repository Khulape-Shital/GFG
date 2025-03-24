import React, { useState } from "react";
import axios from "axios";
import './GeminiChat.css';

const GeminiChat = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle question input change
  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  // Function to fetch the answer from the Gemini API
  const fetchAnswer = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setError(""); // Reset any previous errors

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyA0PqvEqujK9KK1EJ4WsyQaMeTeuu9TQfA`, // Replace with your Gemini API key
        {
          contents: [
            {
              parts: [
                {
                  text: question,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Debugging the full API response
      console.log("Full API Response:", response);

      // Check if the response contains 'candidates'
      if (response.status === 200 && response.data) {
        console.log("Candidates in Response: ", response.data.candidates);
        
        if (response.data.candidates && response.data.candidates[0] && response.data.candidates[0].content && response.data.candidates[0].content.parts) {
          // Update the answer state with the response from the content.parts array
          setAnswer(response.data.candidates[0].content.parts[0].text);
        } else {
          setAnswer("No answer found.");
        }
      } else {
        setError(`Unexpected status code: ${response.status}`);
      }
    } catch (err) {
      // Improved error handling with more checks
      if (err.response) {
        console.error("API Response Error: ", err.response);
        setError(`API Error: ${err.response.data?.error?.message || "An error occurred."}`);
      } else if (err.request) {
        console.error("API Request Error: ", err.request);
        setError("Request Error: Failed to connect to the server.");
      } else if (err.message) {
        console.error("Unknown Error: ", err.message);
        setError(`Error: ${err.message}`);
      } else {
        console.error("Unexpected Error: ", err);
        setError("An unknown error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  return (
    <div className="gemini-chat">
      <h2>Chat with Gemini</h2>
      <input
        type="text"
        value={question}
        onChange={handleInputChange}
        placeholder="Ask a question..."
        className="question-input"
      />
      <button onClick={fetchAnswer} className="ask-button" disabled={loading}>
        {loading ? "Loading..." : "Ask"}
      </button>

      {/* Displaying the answer or error */}
      {answer && <div className="answer">{answer}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default GeminiChat;
