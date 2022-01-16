import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Confetti from './components/Confetti';
// import Confetti from "react-confetti"
import { nanoid } from 'nanoid'
import './App.css';


function App() {
  const [dice, setDice] = useState(generateRandomDice())
  const [tenzies, setTenzies] = useState(false)

  // FUNCTION FOR COMPONENTS
  
  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }

  function generateRandomDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }  

  function rollDice() {
    setDice(prev => {
      const newDice = []
      prev.forEach(item => {
        item.isHeld? newDice.push(item) : newDice.push(generateNewDie())
      })
      return newDice
    })
    //  setDice(item => item.map(die => {
    //         return die.isHeld ? 
    //             die :
    //             generateNewDie()
    //     })) // other method
  }

  function reset() {
    setDice(generateRandomDice())
    setTenzies(false)
  }

  function holdDice(id) {
    setDice(prevNumbers => {
      const newDice = []
      prevNumbers.forEach(object => {
        if (object.id === id) {
          const copiedNumbers = {...object, isHeld: ! object.isHeld}
          newDice.push(copiedNumbers) 
        } else {
          newDice.push({...object})
        } 
      }) 
      return newDice
    })
  }

  useEffect(() => {
      const allHeld = dice.every(item => item.isHeld === dice[0].isHeld)
      const allSameValue = dice.every(item => item.value === dice[0].value)

      if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("you won")
      }
  }, [dice])
  
  const diceElements = dice.map(die => {
  return (
    <Main
      key={die.id}
      id={die.id}
      dieValue={die.value}
      isHeld={die.isHeld}
      holdDice={holdDice}
    />
    )
  })
  

  //COMPONENTS

  return (
    <div className="container border-8 border-black p-8 m-4 grid place-items-center">
      {/* {tenzies && <Confetti />} */}
      <Header />
      <div className="card-container mt-8 grid grid-cols-5 gap-4">
        {diceElements}
      </div>
      <button 
        className="mt-12 text-white bg-blue-600 te font-semibold py-1 px-4 rounded-md"
        onClick= {tenzies? reset : rollDice} 
      >
        {tenzies? "New Game" : "Roll"}  
      </button>
    </div>
  )
}

export default App
