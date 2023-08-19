import React, { useState, useEffect } from 'react';
import './App.css';
import WordCard from './WordCard';
import MemoryGame from './MemoryGame';

function App() {

  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchJsonData() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/words.json`);
        const data = await response.json();
        setWords(data.words);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    }

    fetchJsonData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Cards</h1>
      </header>
      <main>
        {/* <WordCard words={words}/> */}
        <MemoryGame words={words} />
      </main>
    </div>
  );
}

export default App;
