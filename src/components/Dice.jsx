import React from 'react'

export default function Dice({ diceValues, rollDice, whosTurn }) {
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

      <h2>{whosTurn === 1 ? "Blue's Turn" : "Red's Turn"}</h2>
    </div>
  )


}
