import './App.css';
import axios from 'axios';
import Greeting from './components/Greeting';
import { useEffect, useState } from 'react';

const API_URL="http://localhost:3000/api/v1/greetings";

function getAPIUrl() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAPIUrl().then((items) => {
      console.log(items);
      if (isMounted) {
        setGreetings(items);
      }
  });
  return () => (isMounted = false);
}, []);

  return (
    <div className="App">
      <h1>Rails Greeting App!</h1>
      <Greeting greetings={greetings} />
    </div>
  );
}

export default App;
