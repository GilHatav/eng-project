import React from 'react';
import './App.css';
import WordCard from './WordCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Cards</h1>
      </header>
      <main>
        <WordCard />
      </main>
    </div>
  );
}

export default App;
