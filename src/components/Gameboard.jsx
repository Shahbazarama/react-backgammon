import React from "react";
import './Gameboard.css'

let topOfGameboardCSS = {
  padding: '5px',
  border: "solid 3px #212529",
  borderRadius: "0 0 50px 50px",
  height: "45vh"
};
let topOfGameboardCSSAlt = {
  padding: '5px',
  border: "solid 3px #007bff",
  borderRadius: "0 0 50px 50px",
  height: "45vh"
};

let bottomOfGameboardCSS = {
  padding: '5px',
  border: "solid 3px #212529",
  borderRadius: "50px 50px 0 0",
  height: "45vh"
};

let bottomOfGameboardCSSAlt = {
  padding: '5px',
  border: "solid 3px #dc3545",
  borderRadius: "50px 50px 0 0",
  height: "45vh"
};

let buttonStyle = {
  borderRadius: '15px',
  border: "solid 3px #000000"
}


export default function Gameboard({ gameState, makeMove, confirmMove, whosTurn}) {
  return (
    <>
      <div className="row">
        {gameState.map(space => {
          if (space.id > 12) {
            return (
              <div
                className="col-1 d-flex flex-column"
                style={space.id < 19 ? topOfGameboardCSS : topOfGameboardCSSAlt}
                onClick={(e) => confirmMove(e, space.id)}
              >
                {[...Array(space.count)].map((x, index) => {
                  return (
                    <button style={ buttonStyle } disabled={whosTurn === space.color ? false : true} onClick={(e) => makeMove(e, space.id)} className={space.color === 1 ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"}>
                      <br />
                    </button>
                  )
                })}
              </div>
            );
          }
          return;
        })}
      </div>
      <hr />
      <div className="row">
        {gameState.slice(0).reverse().map(space => {
          if (space.id < 13) {
            return (
              <div
                className="col-1 d-flex flex-column-reverse"
                style={space.id > 6 ? bottomOfGameboardCSS : bottomOfGameboardCSSAlt}
                onClick={(e) => confirmMove(e, space.id)}
              >
                {[...Array(space.count)].map((x, index) => {
                  return (
                    <button style={ buttonStyle } disabled={whosTurn === space.color ? false : true} onClick={(e) => makeMove(e, space.id)} className={space.color === 1 ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"}>
                      <br />
                    </button>
                  )
                })}
              </div>
            )
          }
        })}
      </div>
    </>
  );
}
