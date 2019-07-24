import React from 'react'

export default function Jail({ blueJail, redJail, whosTurn, makeMove }) {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4 style={{color: 'blue'}}><u>Blue Jail</u></h4>
            {[...Array(blueJail)].map(() => {
              return (
                <button style={{borderRadius: '15px'}} className="btn btn-lg btn-primary btn-block" disabled={whosTurn === 2 ? true : false} onClick={(e) => makeMove(e, 0)}>
                  Ω
                </button>
              )
            })}

          </div>
          <div className="col-6">
            <h4 style={{color: 'red'}}><u>Red Jail</u></h4>
            {[...Array(redJail)].map(() => {
              return (
                <button style={{borderRadius: '15px'}} className="btn btn-lg btn-danger btn-block" disabled={whosTurn === 1 ? true : false} onClick={(e) => makeMove(e, 0)}>
                  Ω
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )

}
