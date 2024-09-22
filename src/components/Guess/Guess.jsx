import './Guess.css'

const Guess = ({guess, centerLetter}) => {

    const formattedGuess = guess.split('').map((letter, index) => {
        const cls = letter === centerLetter ? 'guess-center' : 'guess-outer';
        return <span key={index} className={cls}>{letter}</span>;
    });

    return (
        <section className="guess">
            <p className="guess-letters">{formattedGuess}</p>
        </section>
    );
}

export default Guess;
