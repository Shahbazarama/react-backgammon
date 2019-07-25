import React from 'react'

export default function Jail({ blueJail, redJail, whosTurn, makeMove }) {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ border: "solid 3px #212529", textAlign: "center" }}>
            <h4 style={{ color: '#212529' }}><u>Jail</u></h4>
            {[...Array(blueJail)].map(() => {
              return (
                <button style={{ borderRadius: '15px' }} className="btn btn-lg btn-primary btn-block" disabled={whosTurn === 2 ? true : false} onClick={(e) => makeMove(e, 0)}>
                  Ω
                </button>
              )
            })}

            {[...Array(redJail)].map(() => {
              return (
                <button style={{ borderRadius: '15px' }} className="btn btn-lg btn-danger btn-block" disabled={whosTurn === 1 ? true : false} onClick={(e) => makeMove(e, 0)}>
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
