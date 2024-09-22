import { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';
import Honeycomb from './components/Honeycomb';
import Guess from './components/Guess';
import { CorrectGuess } from './components/CorrectGuess';
import { Score } from './components/Score';
// import CORRECT_GUESSES from './Constants/App';

const CORRECT_GUESSES = 'correctGuesses';

const App = () => {
  const [data, setData] = useState({});
  const [guess, setGuess] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState([]);

  useEffect(() => {
    const correctGuesses = localStorage.getItem(CORRECT_GUESSES);
    if(correctGuesses) {
      setCorrectGuesses(JSON.parse(correctGuesses));
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('/api/data.json', {
        headers: { 'content-type': 'application/json' },
      });
      const json = await result.json();
      setData(json.data.today);
      console.log('data', data);
    }
    fetchData();

    //   fetch('/api/data.json', { headers: { 'content-type': 'application/json' } })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
  }, []);

  const isDataEmpty = Object.getOwnPropertyNames(data).length === 0 && data.constructor === Object;
  if (isDataEmpty) {
    return <p>...Loading </p>;
  }

  const handleLetterClick = (letter) => {
    console.log('letter', letter);
    setGuess(guess + letter);
  };

  const handleDeleteClick = () => {
    setGuess(guess.slice(0, -1));
  };

  const handleEnterClick = () => {
    if(guess.length < 4) {
      console.log('guess must be 4 letters');
      return;
    }

    if(correctGuesses.includes(guess)) {
      console.log('already guessed', guess);
      setGuess('');
      return;
    }

    if(data.answers.includes(guess)) {
      setCorrectGuesses((prevGuess)=> {
        const guesses = [...prevGuess, guess];
        localStorage.setItem(CORRECT_GUESSES, JSON.stringify(guesses));

        return guesses;
      })

      // setCorrectGuesses([...correctGuesses, guess]);
      // localStorage.setItem(CORRECT_GUESSES, JSON.stringify([...correctGuesses, guess]));

      console.log('correct guess', guess);
    } else {
      console.log('incorrect guess');
    }
    setGuess('');
  };

  return (
    <>
      <Header editor={data.editor} />
      <Score correctGuesses={correctGuesses} validLetters={data.validLetters} />
      <CorrectGuess correctGuesses={correctGuesses} />
      <section className="container">
        <div className="inputs">
          <div className="center">
            <Guess guess={guess} centerLetter={data.centerLetter} />
            <Honeycomb centerLetter={data.centerLetter} outerLetters={data.outerLetters} validLetters={data.validLetters} onAdd={handleLetterClick} onDelete={handleDeleteClick} onEnter={handleEnterClick} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
