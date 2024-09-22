import './Honeycomb.css';

import { useState } from 'react';

import Letter from "../Letter";

const OuterLetters = ({ outerLetters, onAdd: handleLetterClick }) => {
    if (outerLetters?.length === 0) {
        return 'Outer Letters of Hexagon aren not available';
    }

    return (
        outerLetters.map((letter, i) => <Letter key={i} letter={letter} isCenter={false} onAdd={handleLetterClick} />)
    )
}
const Honeycomb = ({ centerLetter, outerLetters, validLetters, onAdd: handleLetterClick, onDelete: handleDeleteClick, onEnter: handleEnterClick }) => {
    const [shuffledOuterLetters, setShuffledOuterLetters] = useState([...outerLetters || []]);

    const handleShuffleClick = () => {
        setShuffledOuterLetters([...shuffledOuterLetters].sort(() => Math.random() - 0.5));
    }

    return (
        <>
            <article className="honeycomb">
                <Letter letter={centerLetter} isCenter={true} onAdd={handleLetterClick} />
                <OuterLetters outerLetters={shuffledOuterLetters} onAdd={handleLetterClick} />
            </article>
            <section className='buttons'>
                <button className='button' onClick={handleDeleteClick}>Delete</button>
                <button className='button' onClick={handleShuffleClick}>Shuffle</button>
                <button className='button' onClick={handleEnterClick}>Enter</button>
            </section>
        </>
    );
}

export default Honeycomb;