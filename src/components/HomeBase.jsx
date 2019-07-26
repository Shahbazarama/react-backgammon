import React from 'react'

let buttonStyle = {
  borderRadius: '15px',
  border: "solid 3px #000000"
}

export default function HomeBase({ blueBase, redBase }) {
  return (
    <>
    {[...Array(blueBase)].map(() => {
      return (
        <button style={ buttonStyle } className="btn btn-sm btn-primary" disabled>
          <br />
        </button>
      )
    })}
    <br />
    {[...Array(redBase)].map(() => {
      return (
        <button style={ buttonStyle } className="btn btn-sm btn-danger" disabled>
          <br />
        </button>
      )
    })}
  </>
  )
}
