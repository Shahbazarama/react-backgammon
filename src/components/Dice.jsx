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
    <div style={{ height: "50vh" }}>
      <h2 style={whosTurn === 1 ? { color: '#007bff', paddingTop: '25px' } : { color: '#dc3545', paddingTop: '25px' }}>{whosTurn === 1 ? "Blue's Turn" : "Red's Turn"}</h2>

      <button className={whosTurn === 1 ? "align-self-end btn btn-lg btn-danger btn-block" : "align-self-end btn btn-lg btn-primary btn-block"} onClick={() => rollDice()}>
        Roll the Dice!
      </button>
      {diceArray.map(roll => {
        return (
          <div style={{ display: 'block', margin: "5px" }}>
            {roll == 1 ? <FontAwesomeIcon icon={faDiceOne} size="4x" /> : null}
            {roll == 2 ? <FontAwesomeIcon icon={faDiceTwo} size="4x" /> : null}
            {roll == 3 ? <FontAwesomeIcon icon={faDiceThree} size="4x" /> : null}
            {roll == 4 ? <FontAwesomeIcon icon={faDiceFour} size="4x" /> : null}
            {roll == 5 ? <FontAwesomeIcon icon={faDiceFive} size="4x" /> : null}
            {roll == 6 ? <FontAwesomeIcon icon={faDiceSix} size="4x" /> : null}
          </div>
        )
      })}
      <h1>{diceArray.length === 0 ? "Next Turn" : ""}</h1>
      <hr className={{}} />

    </div>
  )


}
