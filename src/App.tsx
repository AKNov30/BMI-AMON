import Bmi from './pages/BMI'
import { useState } from 'react'
import './App.css'

function App() {
  const [Mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!Mode);

    if (Mode) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <>
      <Bmi></Bmi>
      <button onClick={changeMode}>{Mode ? 'Dark Mode' : 'Light Mode'}</button>
    </>
  )
}

export default App
