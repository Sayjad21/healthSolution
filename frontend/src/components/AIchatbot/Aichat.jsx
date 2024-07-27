import React, { useState, useEffect } from 'react';
import '../../cssFiles/aichat.css';
import Navbar from '../utils/Navbar';

const apikey = process.env.REACT_APP_API_KEY;

export default function Aichat() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async () => {
    if (query !== '') {
      setQuestion(query);
      setResponse('Loading...');
  
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apikey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: query
                  }
                ]
              }
            ]
          })
        });
  
        if (response.status === 200) {
          const responseData = await response.json();
  
          // Check if the response data has the expected structure
          if (responseData.candidates && responseData.candidates.length > 0) {
            const candidate = responseData.candidates[0];
            if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
              setQuery('');
              setResponse(candidate.content.parts[0].text);
            } else {
              console.error('Unexpected response format: No parts found');
              setResponse('Error: No content parts found');
            }
          } else {
            console.error('Unexpected response format: No candidates found');
            setResponse('Error: No candidates found');
          }
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
          setResponse('Error: Failed to fetch data');
        }
      } catch (error) {
        console.error('Request failed:', error);
        setResponse('Error: Request failed');
      }
    }
  };
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
    <Navbar />
    <div className='container my-3'>
      <div className="container mb-3" style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "white", padding: "10px" }}>
        <label htmlFor="formGroupExampleInput" className="form-label">Your Query</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Type your question here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
          <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <label htmlFor="queryTextarea" className="form-label">Query</label>
            <textarea
              id="queryTextarea"
              className="form-control"
              rows="10"
              value={question}
              readOnly
            ></textarea>
          </div>
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <label htmlFor="responseTextarea" className="form-label">Response</label>
            <textarea
              id="responseTextarea"
              className="form-control"
              rows="10"
              value={response}
              readOnly
            ></textarea>
          </div>
        </div>
    </div>
    </>
  );
}
