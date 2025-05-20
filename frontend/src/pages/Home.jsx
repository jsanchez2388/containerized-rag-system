import React, { useState } from 'react';
import Banner from '../components/Banner';
import ConversationDisplay from '../components/ConversationDisplay';
import UserInput from '../components/UserInput';
import './Home.css';

function Home() {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = () => {
    if (userInput.trim() !== '') {
      setConversation([...conversation, { user: 'User', message: userInput }]);

      const aiResponse = `C.R.A.I.G. says: This is a response to "${userInput}"`;
      setConversation((prev) => [...prev, { user: 'C.R.A.I.G.', message: aiResponse }]);

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
        <UserInput
          userInput={userInput}
          setUserInput={setUserInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Home;
