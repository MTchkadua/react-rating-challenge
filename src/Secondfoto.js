import React from 'react'
import foto from "./images/second.png"

export default function Secondfoto() {
  return (
    <div style={style}>
      <img src={foto} alt="" />
    </div>
  )
}

const style = {
    width: "162px",
    height: "108px",
    marginTop: "45px",
    marginLeft: "121px"
}