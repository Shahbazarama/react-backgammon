import React from "react";
import Gameboard from "./Gameboard";
import Dice from "./Dice";
import Jail from "./Jail";

class Backgammon extends React.Component {
  state = {
    gameState: [],
    diceValues: [],
    whosTurn: 1,
    currentMove: 0,
    blueJail: 0,
    redJail: 0,
    blueBase: 0,
    redBase: 0,
    dice: {}
  };

  componentDidMount = async () => {
    this.setState({
      gameState: [
        {
          id: 1,
          count: 2,
          color: 1
        },
        {
          id: 2,
          count: 0,
          color: 0
        },
        {
          id: 3,
          count: 0,
          color: 0
        },
        {
          id: 4,
          count: 0,
          color: 0
        },
        {
          id: 5,
          count: 0,
          color: 0
        },
        {
          id: 6,
          count: 5,
          color: 2
        },
        {
          id: 7,
          count: 0,
          color: 0
        },
        {
          id: 8,
          count: 3,
          color: 2
        },
        {
          id: 9,
          count: 0,
          color: 0
        },
        {
          id: 10,
          count: 0,
          color: 0
        },
        {
          id: 11,
          count: 0,
          color: 0
        },
        {
          id: 12,
          count: 5,
          color: 1
        },
        {
          id: 13,
          count: 5,
          color: 2
        },
        {
          id: 14,
          count: 0,
          color: 0
        },
        {
          id: 15,
          count: 0,
          color: 0
        },
        {
          id: 16,
          count: 0,
          color: 0
        },
        {
          id: 17,
          count: 3,
          color: 1
        },
        {
          id: 18,
          count: 0,
          color: 0
        },
        {
          id: 19,
          count: 5,
          color: 1
        },
        {
          id: 20,
          count: 0,
          color: 0
        },
        {
          id: 21,
          count: 0,
          color: 0
        },
        {
          id: 22,
          count: 0,
          color: 0
        },
        {
          id: 23,
          count: 0,
          color: 0
        },
        {
          id: 24,
          count: 2,
          color: 2
        }
      ],
      diceValues: [1, 1]
    });
    this.rollDice();
    this.startOfGame();
  };

  rollDice = () => {
    let rollValue1 = Math.floor(Math.random() * 6) + 1;
    let rollValue2 = Math.floor(Math.random() * 6) + 1;
    this.setState(prevState => ({
      diceValues: [rollValue1, rollValue2],
      whosTurn: prevState.whosTurn === 1 ? 2 : 1,
      currentMove: 0,
    }));
    if (rollValue1 === rollValue2) {
      this.setState({
        dice: {
          [rollValue1]: 4
        }
      })
    } else {
      this.setState({
        dice: {
          [rollValue1]: 1,
          [rollValue2]: 1
        }
      })
    }
  };

  startOfGame = () => {
    if (Math.floor(Math.random() * 2) + 1 === 1) {
      this.setState({
        whosTurn: 1
      });
    } else {
      this.setState({
        whosTurn: 2
      });
    }
  };

  makeMove = (event, spaceID) => {
    event.stopPropagation()
    if (this.state.whosTurn === 1) {
      if (this.state.blueJail > 0) {
        this.setState({
          currentMove: 0
        })
      } else {
        this.setState({
          currentMove: spaceID
        })
      }
    } else if (this.state.whosTurn === 2) {
      if (this.state.redJail > 0) {
        this.setState({
          currentMove: 0
        })
      } else {
        this.setState({
          currentMove: spaceID
        })
      }
    }

  }

  confirmMove = (event, spaceID) => {
    event.stopPropagation()

    if (this.state.currentMove !== 0) {
      // has clicked a tile first

      // gather new space data
      let attemptedSpace = this.state.gameState.filter(space => space.id === spaceID)[0]

      if ((attemptedSpace.color === this.state.whosTurn || attemptedSpace.color === 0) && !(this.state.currentMove === attemptedSpace.id)) {
        // has selected a space with same color or empty, and it is not the same space as the original tile
        if (this.attemptDiceMove(attemptedSpace.id, this.state.currentMove)) {
          // check if the move lines up with the dice roll
          this.setState(prevState => ({
            gameState: prevState.gameState.map(space => {
              if (space.id === this.state.currentMove) {
                // remove tile from current location
                return {
                  ...space,
                  count: space.count - 1,
                  color: (space.count === 1 ? 0 : space.color)
                };
              } else if (space.id === attemptedSpace.id) {
                // add one tile to new location
                return {
                  ...space,
                  count: space.count + 1,
                  color: this.state.whosTurn
                };
              } else {
                // return all other tiles not affected
                return {
                  ...space
                };
              }
            }),
            currentMove: 0
          }));
        }
      } else if (attemptedSpace.color !== this.state.whosTurn) {
        if (attemptedSpace.count === 1 && this.attemptDiceMove(attemptedSpace.id, this.state.currentMove)) {

          // send enemy to jail
          this.setState(prevState => ({
            gameState: prevState.gameState.map(space => {
              if (space.id === this.state.currentMove) {
                // remove tile from current location
                return {
                  ...space,
                  count: space.count - 1,
                  color: (space.count === 1 ? 0 : space.color)
                };
              } else if (space.id === attemptedSpace.id) {
                // other piece is sent to jail, just replace single tile color
                return {
                  ...space,
                  color: this.state.whosTurn
                };
              } else {
                // return all other tiles not affected
                return {
                  ...space
                };
              }
            }),
            currentMove: 0,
            blueJail: (attemptedSpace.color === 1 ? prevState.blueJail + 1 : prevState.blueJail),
            redJail: (attemptedSpace.color === 2 ? prevState.redJail + 1 : prevState.redJail)
          }));
        }
      } else {
        console.log("else")
      }
    } else {
      //tile is in jail
      let flag = false
      if (this.state.whosTurn === 1) {
        if (this.state.blueJail > 0) {
          flag = true
        }
      } else if (this.state.whosTurn === 2) {
        if (this.state.redJail > 0) {
          flag = true
        }
      }

      let attemptedSpace = this.state.gameState.filter(space => space.id === spaceID)[0]
      if ((attemptedSpace.color === this.state.whosTurn || attemptedSpace.color === 0) && flag) {
        // tile is attempting to leave jail because jail flag is true
        if (this.attemptDiceMove(attemptedSpace.id, (this.state.whosTurn === 1 ? 0 : 25))) {

          this.setState(prevState => ({
            redJail: prevState.whosTurn === 1 ? prevState.redJail : prevState.redJail - 1,
            blueJail: prevState.whosTurn === 2 ? prevState.blueJail : prevState.blueJail - 1,
            gameState: prevState.gameState.map(space => {
              if (space.id === attemptedSpace.id) {
                // add one tile to new location
                return {
                  ...space,
                  count: space.count + 1,
                  color: this.state.whosTurn
                };
              } else {
                // return all other tiles not affected
                return {
                  ...space
                };
              }
            }),
            currentMove: 0
          }));
        }
      } else if (attemptedSpace.color !== this.state.whosTurn) {
        if (attemptedSpace.count === 1 && this.attemptDiceMove(attemptedSpace.id, (this.state.whosTurn === 1 ? 0 : 25))) {

          // send enemy to jail while leaving jail
          this.setState(prevState => ({
            gameState: prevState.gameState.map(space => {
              if (space.id === this.state.currentMove) {
                // remove tile from current location
                return {
                  ...space,
                  count: space.count - 1,
                  color: (space.count === 1 ? 0 : space.color)
                };
              } else if (space.id === attemptedSpace.id) {
                // other piece is sent to jail, just replace single tile color
                return {
                  ...space,
                  color: this.state.whosTurn
                };
              } else {
                // return all other tiles not affected
                return {
                  ...space
                };
              }
            }),
            currentMove: 0,
            blueJail: (attemptedSpace.color === 1 ? prevState.blueJail + 1 : prevState.blueJail - 1),
            redJail: (attemptedSpace.color === 2 ? prevState.redJail + 1 : prevState.redJail - 1)
          }));
        }
      }
    }
  }; //confirm move

  attemptDiceMove = (attemptedSpaceID, currentSpaceID) => {
    console.log('attemptDiceMove')
    if (this.state.whosTurn === 1) {
      //blue, moves with increasing space
      let distance = attemptedSpaceID - currentSpaceID;
      console.log(distance)
      if (this.state.dice[distance] > 0) {
        //checks if the distance between spaces is in the dice values we have in state
        this.setState(prevState => ({
          dice: {
            ...prevState.dice,
            [distance]: prevState.dice[distance] - 1
          }
        }))
        return true
      }
      else {
        return false
      }
    } else if (this.state.whosTurn === 2) {
      ///red, moves with decreasing space
      let distance = currentSpaceID - attemptedSpaceID;
      if (this.state.dice[distance] > 0) {
        //checks if the distance between spaces is in the dice values we have in state
        this.setState(prevState => ({
          dice: {
            ...prevState.dice,
            [distance]: prevState.dice[distance] - 1
          }
        }))
        return true
      }
      else {
        return false
      }
    }
  }

  attemptDiceMoveToBase = () => {
    let currentSpaceID = this.state.currentMove;
    if (this.state.whosTurn === 1) {
      let piecesBehindCurrentSpace = false
      this.state.gameState.some(space => {
        if (space.id > 18 && space.id < currentSpaceID) {
          if(space.color === 1){
            return piecesBehindCurrentSpace = true
          }
        }
      })
      let distance = 25 - currentSpaceID;

      if (this.state.dice[distance] > 0) {
        // do we have that dice value available
        this.setState(prevState => ({
          dice: {
            ...prevState.dice,
            [distance]: prevState.dice[distance] - 1
          }
        }))
        return true

      } else if (!piecesBehindCurrentSpace) {
        console.log(distance)
        for (var i = distance; i <= 6; i++) {
          if(this.state.dice[i]){
            this.setState(prevState => ({
              dice: {
                ...prevState.dice,
                [i]: prevState.dice[i] - 1
              }
            }))
            return true
          }
        }
        return false
      }


    } else if (this.state.whosTurn === 2) {
      ///red, moves with decreasing space
      let piecesBehindCurrentSpace = false
      this.state.gameState.some(space => {
        if (space.id > currentSpaceID && space.id < 7) {
          if(space.color === 2){
            return piecesBehindCurrentSpace = true
          }
        }
      })
      let distance = currentSpaceID;

      if (this.state.dice[distance] > 0) {
        // do we have that dice value available
        this.setState(prevState => ({
          dice: {
            ...prevState.dice,
            [distance]: prevState.dice[distance] - 1
          }
        }))
        return true

      } else if (!piecesBehindCurrentSpace) {
        console.log(distance)
        for (var i = distance; i <= 6; i++) {
          if(this.state.dice[i]){
            this.setState(prevState => ({
              dice: {
                ...prevState.dice,
                [i]: prevState.dice[i] - 1
              }
            }))
            return true
          }
        }
        return false
      }
    }
  }


  handleBase = (spaceID) => {
    console.log('handleBase')
    if (this.state.currentMove !== 0) {
      // has clicked a tile first
      if (this.state.whosTurn === 1) {
        // blue's turn
        let totalBlueCount = this.state.blueBase
        this.state.gameState.map(space => {
          if (space.id > 18 && space.color === 1) {
            totalBlueCount += space.count
          } else {
            totalBlueCount = totalBlueCount
          }
        })

        if (totalBlueCount === 15) {
          // if all pieces are in homebase, allow a piece to be pulled
          // do a dice check for blue
          if (this.attemptDiceMoveToBase()) {
            this.setState(prevState => ({
              gameState: prevState.gameState.map(space => {
                if (space.id === this.state.currentMove) {
                  // remove tile from current location
                  return {
                    ...space,
                    count: space.count - 1,
                    color: (space.count === 1 ? 0 : space.color)
                  }
                } else {
                  // return all other tiles not affected
                  return {
                    ...space
                  }
                }
              }),
              currentMove: 0,
              blueBase: prevState.blueBase + 1
            }), () => {
              this.checkVictory()
            });
          }
        }
      } else if (this.state.whosTurn === 2) {
        // red's turn
        let totalRedCount = this.state.redBase
        this.state.gameState.map(space => {
          if (space.id < 7 && space.color === 2) {
            totalRedCount += space.count
          } else {
            totalRedCount = totalRedCount
          }
        })
        if (totalRedCount === 15) {
          // if all pieces are in homebase, allow a piece to be pulled
          // do a dice check
          if (this.attemptDiceMoveToBase()) {
            this.setState(prevState => ({
              gameState: prevState.gameState.map(space => {
                if (space.id === this.state.currentMove) {
                  // remove tile from current location
                  return {
                    ...space,
                    count: space.count - 1,
                    color: (space.count === 1 ? 0 : space.color)
                  }
                } else {
                  // return all other tiles not affected
                  return {
                    ...space
                  }
                }
              }),
              currentMove: 0,
              redBase: prevState.redBase + 1
            }), () => {
              this.checkVictory()
            });
          }
        }
      }
    }
  }

  checkVictory = () => {
    if (this.state.blueBase === 15) {
      alert("Blue wins!")
      // blue(1) wins
    } else if (this.state.redBase === 15) {
      alert("Red wins!")
      // red(2) wins
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <Gameboard
              gameState={this.state.gameState}
              makeMove={this.makeMove}
              confirmMove={this.confirmMove}
              whosTurn={this.state.whosTurn}
            />
          </div>
          <div className="col-2">
            <Dice
              diceValues={this.state.diceValues}
              rollDice={this.rollDice}
              whosTurn={this.state.whosTurn}
            />
            <Jail
              blueJail={this.state.blueJail}
              redJail={this.state.redJail}
              whosTurn={this.state.whosTurn}
              makeMove={this.makeMove}
            />
            <div>
              <button disabled={this.state.whosTurn === 2 ? true : false} onClick={() => this.handleBase()} className="btn btn-lg btn-primary">Blue Base</button>
            </div>

            <div>
              <button disabled={this.state.whosTurn === 1 ? true : false} onClick={() => this.handleBase()} className="btn btn-lg btn-danger">Red Base</button>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Backgammon;
