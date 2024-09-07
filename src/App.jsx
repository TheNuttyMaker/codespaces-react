import { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
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


  const HeadersDataComponent = () => {
    if (!data) {
      return <p>...Loading </p>;
    }
    return <Header date={data.displayDate} editor={data.editor} />;
  };

  return (
    <>
      <HeadersDataComponent />
    </>
  );
}

export default App;
