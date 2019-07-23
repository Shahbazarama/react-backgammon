import React from 'react'

export default function Jail({ blueJail, redJail, whosTurn, makeMove }) {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            blueJail
            {[...Array(blueJail)].map(() => {
              return (
                <button disabled={whosTurn === 2 ? true : false} onClick={(e) => makeMove(e, 0)} className="btn btn-sm btn-primary">
                  Ω<br />
                </button>
              )
            })}

          </div>
          <div className="col-6">
            redJail
            {[...Array(redJail)].map(() => {
              return (
                <button disabled={whosTurn === 1 ? true : false} onClick={(e) => makeMove(e, 0)} className="btn btn-sm btn-danger">
                  Ω<br />
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )

}
