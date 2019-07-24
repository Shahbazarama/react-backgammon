import React from 'react'

export default function Dice({ diceValues, rollDice, whosTurn }) {
  let diceArray = []
  for (let value in diceValues) {
    for (let i = 0; i < diceValues[value]; i++) {
      diceArray.push(value)
    }
  }
  return (
    <div>
      <div>
        {diceArray.map(roll => {
          return (
            <h1>{roll}</h1>
          )
        })}
        <h1>{diceArray.length === 0 ? "Next Turn" : ""}</h1>
      </div>
      <button className="btn btn-lg btn-info" onClick={() => rollDice()}>
        Roll the Dice!
      </button>

      <h2>{whosTurn === 1 ? "Blue's Turn" : "Red's Turn"}</h2>
    </div>
  )


}
