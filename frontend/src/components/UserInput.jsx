import React from 'react';
import Button from './Button'; // Import your reusable button
import './UserInput.css';

function UserInput({ userInput, setUserInput, handleSubmit }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask C.R.A.I.G. a question..."
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default UserInput;
