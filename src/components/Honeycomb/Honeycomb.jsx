import './Honeycomb.css';

import { useState } from 'react';

import Letter from "../Letter";

const OuterLetters = ({ outerLetters }) => {
    if (!outerLetters || outerLetters.length === 0) {
        return 'Outer Letters of Hexagon aren not available';
    }
    return (
        outerLetters.map((letter, i) => <Letter key={i} letter={letter} isCenter={false} />)
    )
}
const Honeycomb = ({ centerLetter, outerLetters, validLetters }) => {
    const [shuffledOuterLetters, setShuffledOuterLetters] = useState([...outerLetters]);

    const handleShuffleClick = () => {
        setShuffledOuterLetters([...shuffledOuterLetters].sort(() => Math.random() - 0.5));
    }


    return (
        <>
            <article className="honeycomb">
                <Letter letter={centerLetter} isCenter={true} />
                <OuterLetters outerLetters={shuffledOuterLetters} />
            </article>
            <section className='buttons'>
                <button className='button' onClick={handleShuffleClick}>Shuffle</button>
            </section>
        </>
    );
}

export default Honeycomb;