import React from "react";
let topOfGameboardCSS = {
  padding: '5px',
  border: "thick ridge #795548",
  borderRadius: "0 0 50px 50px",
  height: "45vh"
};

let bottomOfGameboardCSS = {
  padding: '5px',
  border: "thick ridge #795548",
  borderRadius: "50px 50px 0 0",
  height: "45vh"
};

export default function Gameboard({ gameState }) {
  return (
    <>
    <div className="row">
      {gameState.map(space => {
        if (space.id > 12) {
          return (

            <div className="col-1 d-flex flex-column" style={topOfGameboardCSS}>
              {[...Array(space.count)].map(x => {
                return(
                  <button className={space.color === 1 ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"}>
                    Ω<br />
                  </button>
                )
              })}
            </div>
          );
        }
      })}
    </div>
    <hr />
    <div className="row">
      {gameState.slice(0).reverse().map(space => {
        if (space.id < 13){
          return (
            <div
              className="col-1 d-flex flex-column-reverse" style={bottomOfGameboardCSS}>
              {[...Array(space.count)].map(x => {
                return(
                  <button className={space.color === 1 ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger"}>
                    Ω<br />
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
