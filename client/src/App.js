import React, {useState, useEffect} from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  const [apiResponse, setApiResponse] = useState();
  const [dbResponse, setDbResponse] = useState();

  useEffect( () => {

    axios.get("http://localhost:9000/testAPI")
      .then( (response) => setApiResponse(response.data))
      .catch( (err) => err);
    axios.get("http://localhost:9000/testDB")
      .then( (response) => setDbResponse(response.data))
      .catch( (err) => err);

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiResponse}
        </p>
        <p>
          {dbResponse}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
