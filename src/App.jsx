import { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';
import Honeycomb from './components/Honeycomb';

const App = () => {
  const [data, setData] = useState({});

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

  return (
    <>
      <Header editor={data.editor} />
      <section className="container">
        <div className="inputs">
          <div className="center">
            <Honeycomb centerLetter={data.centerLetter} outerLetters={data.outerLetters} validLetters={data.validLetters} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
