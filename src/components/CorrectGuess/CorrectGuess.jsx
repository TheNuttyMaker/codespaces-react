import './CorrectGuess.css';
import { useState } from "react";

const GuessList = ({correctGuesses, isOpen }) => {
    if(!isOpen) {
        return <p>{ correctGuesses.length } words found.</p>;
    }

    return (
        <ul className="correct-guess-list">
            {correctGuesses?.map((guess, index) => <li key={index}>{guess}</li>)}
        </ul>
    );
}

export const CorrectGuess = ({correctGuesses}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = (e) => {
        setIsOpen(!isOpen);
    }

    if(correctGuesses.length === 0) {
        return null;
    }


    return (
        <section className="correct-guesses">
            <GuessList correctGuesses={correctGuesses} isOpen={isOpen} />
            <button className="openclose" onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
        </section>
    );
}