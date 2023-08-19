
import React, { useEffect, useState } from 'react';
import './WordCard.css'; // Import the CSS file for styling


const MemoryGame = (props) => {
    const { words } = props;
    const [gameWords, setGameWords] = useState([]);
    const [chosenWords, setChosenWords] = useState({ hebrew: '', english: '' });

    useEffect(() => {
        if (words && words.length > 0) {
            const numberOfWordsToPick = 5;
            const randomIndexes = [];

            while (randomIndexes.length < numberOfWordsToPick) {
                const randomIndex = Math.floor(Math.random() * words.length);
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                }
            }

            const randomWords = randomIndexes.map(index => words[index]);
            setGameWords(randomWords);
        }
    }, [words]);

    useEffect(() => {
        if (chosenWords.english !== '' && chosenWords.hebrew !== '') {
            const newList = gameWords.filter((word) => word.hebrew !== chosenWords.hebrew || word.english !== chosenWords.english)
            if (newList.length < chosenWords.length) {
                alert('Good Job');
            }
            setGameWords(newList)
        }
    }, [chosenWords]);

    const updateEnglishWord = (word) => {
        setChosenWords((prevState) => {
            const newChosenState = { hebrew: prevState.hebrew, english: word }
            return newChosenState
        })
    }

    const updateHebrewWord = (word) => {
        setChosenWords((prevState) => {
            const newChosenState = { hebrew: word, english: prevState.english }
            return newChosenState
        })
    }


    return (
        <div className="word-card-container">
            {gameWords.map((word, index) => (
                <div key={index} className={`word-card-center ${chosenWords.english === word.english && 'chosen'}`} onClick={() => { updateEnglishWord(word.english) }}>
                    <div className="english-word">{word.english}</div>
                </div>
            ))}
            {gameWords.map((word, index) => (
                <div key={index} className={`word-card-center ${chosenWords.hebrew === word.hebrew && 'chosen'}`} onClick={() => { updateHebrewWord(word.hebrew) }}>
                    <div className="hebrew-word">{word.hebrew}</div>
                </div>
            ))}
        </div>
    );
};

export default MemoryGame;
