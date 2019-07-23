import React from "react";
import Gameboard from "./Gameboard";
import Dice from "./Dice";
import Jail from "./Jail";

class Backgammon extends React.Component {
  state = {
    gameState: [],
    diceValues: [],
    whosTurn: 1,
    currentMove: 0
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

  makeMove = spaceID => {
    console.log(spaceID);
    this.setState({
      currentMove: spaceID
    });
  };

  confirmMove = spaceID => {
    let attemptedSpace = this.state.gameState.filter(
      space => space.id === spaceID
    )[0];

    if (
      (attemptedSpace.color == this.state.whosTurn ||
        attemptedSpace.color == 0) &&
      this.state.currentMove !== 0
    ) {
      this.setState(prevState => ({
        gameState: prevState.gameState.map(space => {
          if (space.id == this.state.currentMove) {
            return {
              ...space,
              count: space.count - 1
            };
          } else if (space.id == attemptedSpace.id) {
            return {
              ...space,
              count: space.count + 1,
              color: this.state.whosTurn
            };
          } else {
            return {
              ...space
            };
          }
        }),

        currentMove: 0
      }));
    } else {
      // do this
      console.log("else");
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
            <Jail />
          </div>
        </div>
      </div>
    );
  }
}

export default Backgammon;
