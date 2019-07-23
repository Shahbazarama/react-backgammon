import React from 'react'

export default function Dice({ diceValues, rollDice }) {
  console.log(diceValues)
  return (
    <div>
      <div>
        {diceValues.map(roll => {
          return (
            <h1>{roll}</h1>
          )
        })}
      </div>
      <button onClick={() => rollDice()}>
        roll!
      </button>
    </div>
  )


}
