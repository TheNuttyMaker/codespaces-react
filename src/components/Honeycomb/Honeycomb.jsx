import './Honeycomb.css';
import Letter from "../Letter";

const OuterLetters = ({outerLetters}) => {
    if(!outerLetters || outerLetters.length === 0) {
        return 'Outer Letters of Hexagon aren not available';
    }
    return (
        outerLetters.map((letter, i) => <Letter key={i} letter={letter} isCenter={false} />)
    )
}
const Honeycomb = ({ centerLetter, outerLetters, validLetters }) => {
    console.log('outerLetters main', outerLetters);


    return (
        <div className="honeycomb">
            <Letter letter={centerLetter} isCenter={true} />
            <OuterLetters outerLetters={outerLetters} />
        </div>
    );
}

export default Honeycomb;