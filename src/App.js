import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Dice from "./components/Dice";
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = useState(generateDiceNumber())
  const [isWin, setIsWin] = useState(false)
  const [count, setCount] = useState(0) 

  function generateDiceNumber() {
    const newDice = []
    for (let i=0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return newDice
  }

  function holdDice(id) {
    setDice(prevDice => //if put curly bracket after this, it will turn into error
      prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} :
        die
      })
    )
  }

  function rollDice() {
    setDice(prevDice => 
      prevDice.map(die => {
        return die.isHeld ? {...die} : {...die, value: Math.ceil(Math.random() * 6)} 
      })
    )
    setCount(prevCount => {
      return prevCount = prevCount + 1
    })
  }

  function resetGame() {
    setIsWin(false)
    setCount(0)
    setDice(generateDiceNumber())
  }

  useEffect(() => {
    const allSameValue = dice.every(die => die.value === dice[0].value)
    const allHeld = dice.every(die => die.isHeld === dice[0].isHeld)

    setIsWin(allSameValue && allHeld ? true : false)

  }, [dice])

  const diceElements = dice.map(die => {
    return (
      <Dice 
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        change={() => holdDice(die.id)}
        roll={rollDice}
      />
    )
  })
  // *********** APP COMPONENT ***************
  return (
    <div>
      <Navbar
        count={count}
      />
      <main className="grid place-items-center ">
        <Title />
        <section 
          className="dice-container mt-14 grid grid-cols-5 place-items-center gap-4">
          {diceElements}
        </section>
        <button 
          className="bg-violet-500 text-white px-6 py-2 mt-12"
          onClick={isWin ? resetGame : rollDice}
          >
          {isWin ? "Play Again" : "Roll"}
        </button>
      </main>
    </div>
  )
}