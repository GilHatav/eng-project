import React, { useEffect, useState } from 'react';
import './WordCard.css'; // Import the CSS file for styling


const WordCard = (props) => {
  const { words } = props;
  

  return (
    <div className="word-card-container">
      {words.map((word, index) => (
        <div key={index} className="word-card">
          <div className="english-word">{word.english}</div>
          <div className="hebrew-word">{word.hebrew}</div>
          <div className="sentence">{word.sentence}</div>
        </div>
      ))}
    </div>
  );
};

export default WordCard;
