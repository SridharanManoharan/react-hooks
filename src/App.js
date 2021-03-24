import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>React Hooks Demo</p>
      </header>
      <main className='App-main'>
        <p>Current count is {count}</p>
        <Button variant='primary' onClick={() => setCount(count + 1)}>
          Increase count
        </Button>
        <Button variant='primary' onClick={() => setCount(count - 1)}>
          Decrease count
        </Button>
      </main>
    </div>
  );
}

export default App;
