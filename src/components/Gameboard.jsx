import React from 'react'

let topOfGameboardCSS = {
  border: 'thick solid #0000FF',
  borderRadius: '0 0 20px 20px',
  height: '50vh'
}

let bottomOfGameboardCSS = {
  border: 'thick solid #00ffff',
  borderRadius: '20px 20px 0 0',
  height: '50vh'

}


export default function Gameboard() {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
            <div className="col-1" style={topOfGameboardCSS}>
              hi
            </div>
          </div>
          <div className="row">
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
            <div className="col-1 d-flex align-items-end" style={bottomOfGameboardCSS}>
              hi
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="container float-right">
            <div>
              dice one
            </div>
            <div>
              dice two
            </div>
            <button>
              roll!
            </button>
            <div>
              jail cell
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  )
}
