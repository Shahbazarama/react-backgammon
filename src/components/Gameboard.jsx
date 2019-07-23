import React from "react";
let topOfGameboardCSS = {
  border: "thick solid #0000FF",
  borderRadius: "0 0 20px 20px",
  height: "50vh"
};

let bottomOfGameboardCSS = {
  border: "thick solid #00ffff",
  borderRadius: "20px 20px 0 0",
  height: "50vh"
};

export default function Gameboard({ gameState }) {
  return (
    <>
    <div className="row">
      {gameState.map(space => {
        if (space.id > 12) {
          return (
            <div className="col-1" style={topOfGameboardCSS}>
              {[...Array(space.count)].map(x => {
                return(
                  <button className={space.color == 1 ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"}>
                    piece
                  </button>
                )
              })}
            </div>
          );
        }
      })}
    </div>
    <div className="row">
      {gameState.slice(0).reverse().map(space => {
        if (space.id < 13){
          return (
            <div
              className="col-1 d-flex flex-column-reverse align-items-end" style={bottomOfGameboardCSS}>
              {[...Array(space.count)].map(x => {
                return(
                  <button className={space.color == 1 ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"}>
                    piece
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
