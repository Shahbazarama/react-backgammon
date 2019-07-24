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
      {diceArray.map(roll => {
        return (
          <div style={{display: 'inline'}}>
            {roll == 1 ? <FontAwesomeIcon icon={faDiceOne} size="5x" /> : null}
            {roll == 2 ? <FontAwesomeIcon icon={faDiceTwo} size="5x" /> : null}
            {roll == 3 ? <FontAwesomeIcon icon={faDiceThree} size="5x" /> : null}
            {roll == 4 ? <FontAwesomeIcon icon={faDiceFour} size="5x" /> : null}
            {roll == 5 ? <FontAwesomeIcon icon={faDiceFive} size="5x" /> : null}
            {roll == 6 ? <FontAwesomeIcon icon={faDiceSix} size="5x" /> : null}
          </div>
        )
      })}
      <br />
      <br />
      <hr />
      <h1>{diceArray.length === 0 ? "Next Turn" : ""}</h1>
      <button className="align-self-end btn btn-lg btn-info btn-block" onClick={() => rollDice()}>
        Roll the Dice!
      </button>
      <h2 style={whosTurn === 1 ? {color: 'blue', paddingTop: '25px'} : {color: 'red', paddingTop: '25px'}}>{whosTurn === 1 ? "Blue's Turn" : "Red's Turn"}</h2>
    </div>
  )


}
