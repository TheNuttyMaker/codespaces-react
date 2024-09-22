import { isPangram } from "../../Utils/utils";
import GUESS_PANGRAM_EXTRA_POINTS from "../../Constants/App";

export const Score = ({correctGuesses, validLetters}) => {
    let score = 0;

    correctGuesses.map((guess) => {
        if(guess.length === 3) {
            score = score++;
        } else if(isPangram(guess, validLetters)) {
            score = score + guess.length + GUESS_PANGRAM_EXTRA_POINTS;
        } else {
            score = score + guess.length;
        }
    });

    return (
        <section className="display-flex">
            <h2>Score: {score} </h2>
        </section>
    );
}