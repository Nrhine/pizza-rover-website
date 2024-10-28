import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <h1>The Pizza Rover</h1>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
