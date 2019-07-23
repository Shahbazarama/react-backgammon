import React from 'react'
import Gameboard from './Gameboard'
import Dice from './Dice'
import Jail from './Jail'




class Backgammon extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <Gameboard />
          </div>
          <div className="col-3">
            <Dice />
            <Jail />
          </div>
        </div>
      </div>
    )
  }
}

export default Backgammon;
