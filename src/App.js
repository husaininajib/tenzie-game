import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { nanoid } from 'nanoid'
import './App.css';


function App() {
  const [numbers, setNumbers] = useState(generateNumbers())

  function generateNumbers() {
    const numbersArr = []
    for (let i = 0; i < 10; i++) {
      numbersArr.push({
        id: nanoid(),
        randomValue: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return numbersArr
  }  

  const allNumbers = numbers.map(number => {
    return (
      <Main
        key={number.id}
        id={number.id}
        value={number.randomValue}
        toggle={handleClick}
        isHeld={number.isHeld}
        holdDice={holdDice}
      />
    )
  })

  function rollDice() {
    setNumbers(generateNumbers())
  }

  function holdDice(id) {
    setNumbers(prevNumbers => {
      const newNumbers = []
      prevNumbers.forEach(object => {
        if (object.id === id) {
          const copiedNumbers = {...object, isHeld: ! object.isHeld}
          newNumbers.push(copiedNumbers) 
        } else {
          newNumbers.push({...object})
        } 
      }) 
      return newNumbers
    })
  }

  function handleClick(id) {
      console.log("clicked")
  }
  return (
    <div className="container border-8 border-black p-8 m-4 grid place-items-center">
      <Header />
      <div className="card-container mt-8 grid grid-cols-5 gap-4">
        {allNumbers}
      </div>
      <button 
        className="mt-12 text-white bg-blue-600 te font-semibold py-1 px-4 rounded-md"
        onClick={rollDice}
      >
        Roll
      </button>
    </div>
  )
}

export default App
