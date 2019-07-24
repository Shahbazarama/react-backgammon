import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'



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
            <>
              {roll == 1 ? <FontAwesomeIcon icon={faDiceOne} size="4x" /> : <></>}
              {roll == 2 ? <FontAwesomeIcon icon={faDiceTwo} size="4x" /> : <></>}
              {roll == 3 ? <FontAwesomeIcon icon={faDiceThree} size="4x" /> : <></>}
              {roll == 4 ? <FontAwesomeIcon icon={faDiceFour} size="4x" /> : <></>}
              {roll == 5 ? <FontAwesomeIcon icon={faDiceFive} size="4x" /> : <></>}
              {roll == 6 ? <FontAwesomeIcon icon={faDiceSix} size="4x" /> : <></>}
            </>
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
