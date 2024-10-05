import React, { useState } from 'react';
import Banner from '../components/Banner';
import ConversationDisplay from '../components/ConversationDisplay';

function Home() {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = () => {
    if (userInput.trim() !== '') {
      // Add the user's input to the conversation
      setConversation([...conversation, { user: 'User', message: userInput }]);
      
      // Simulate a response from the LLM
      const aiResponse = `C.R.A.I.G. says: This is a response to "${userInput}"`;
      setConversation(prev => [...prev, { user: 'C.R.A.I.G.', message: aiResponse }]);
      
      // Clear the input field
      setUserInput('');
    }
  };

  return (
    <div className="home-container">
      <Banner title="Welcome to C.R.A.I.G. - Contextual Retrieval and Artificial Intelligence Generation" />
      
      <div className="content-wrapper">
        <div className="conversation-container">
          <ConversationDisplay conversation={conversation} />
        </div>

        <div className="input-container">
          <input 
            type="text" 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
            placeholder="Ask C.R.A.I.G. a question..." 
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
