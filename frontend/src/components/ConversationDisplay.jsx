import React from 'react';

function ConversationDisplay({ conversation }) {
  return (
    <div className="conversation-display">
      {conversation.map((msg, index) => (
        <div key={index} className={`message ${msg.user}`}>
          <strong>{msg.user}:</strong> {msg.message}
        </div>
      ))}
    </div>
  );
}

export default ConversationDisplay;
