import React from "react";
let topOfGameboardCSS = {
  border: "thick solid #0000FF",
  borderRadius: "0 0 20px 20px",
  height: "50vh"
};

let bottomOfGameboardCSS = {
  border: "thick solid #00ffff",
  borderWidth: "0 38.5px 300px 38.5px",
  height: "50vh"
};

export default function Gameboard({ gameState }) {
  return (
    <>
      {gameState.map(space => {
        if (space.id > 12) {
          return (
            <div className="row">
              return (
              <div className="col-1" style={topOfGameboardCSS}>
                {[...Array(space.count)].map(x => {
                  return "hi";
                })}
              </div>
              );
            </div>
          );
        } else {
          return (
            <div className="row">
              <div
                className="col-1 d-flex align-items-end"
                style={bottomOfGameboardCSS}
              >
                {[...Array(space.count)].map(x => {
                  return "hi";
                })}
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
