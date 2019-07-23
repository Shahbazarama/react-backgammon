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
    redJail: 0
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
      currentMove: 0
    }));
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

    this.setState({
      currentMove: spaceID
    })
  }

  confirmMove = (event, spaceID) => {
    event.stopPropagation()

    if (this.state.currentMove !== 0) {
      // has clicked a tile first

      // gather new space data
      let attemptedSpace = this.state.gameState.filter(space => space.id === spaceID)[0]
      if ((attemptedSpace.color === this.state.whosTurn || attemptedSpace.color == 0) && !(this.state.currentMove === attemptedSpace.id)) {
        // has selected a space with same color or empty, and it is not the same space as the original tile
        this.setState(prevState => ({
          gameState: prevState.gameState.map(space => {
            if (space.id == this.state.currentMove) {
              // remove tile from current location
              return {
                ...space,
                count: space.count - 1,
                color: (space.count == 1 ? 0 : space.color)
              };
            } else if (space.id == attemptedSpace.id) {
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
      } else if (attemptedSpace.color !== this.state.whosTurn) {
        if (attemptedSpace.count === 1) {
          // send enemy to jail
          this.setState(prevState => ({
            gameState: prevState.gameState.map(space => {
              if (space.id == this.state.currentMove) {
                // remove tile from current location
                return {
                  ...space,
                  count: space.count - 1,
                  color: (space.count == 1 ? 0 : space.color)
                };
              } else if (space.id == attemptedSpace.id) {
                // add one tile to new location
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
            blueJail: (attemptedSpace.color == 1 ? prevState.blueJail + 1 : prevState.blueJail),
            redJail: (attemptedSpace.color == 2 ? prevState.redJail + 1 : prevState.redJail)
          }));
        }

        console.log("else");
      }
    } else {//tile is in jail
      let attemptedSpace = this.state.gameState.filter(space => space.id === spaceID)[0]
      if ((attemptedSpace.color === this.state.whosTurn || attemptedSpace.color == 0)) {
        // has selected a space with same color or empty, and it is not the same space as the original tile
        this.setState(prevState => ({
          redJail: prevState.whosTurn === 1 ? prevState.redJail : prevState.redJail - 1,
          blueJail: prevState.whosTurn === 2 ? prevState.blueJail : prevState.blueJail - 1,
          gameState: prevState.gameState.map(space => {
            if (space.id == attemptedSpace.id) {
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
    }

  };

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
          </div>
        </div>
      </div>
    );
  }
}

export default Backgammon;
