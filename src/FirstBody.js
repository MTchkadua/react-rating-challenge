import React from 'react'
import star from "./images/Star.png"

export default function FirstBody() {
  return (
    <div>
        <div style={divstyle}>
            <img src={star} alt="" />
        </div>
      
        <h1 style={hstyle}>How did we do?</h1>
        <p style={pstyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus tempora porro placeat nisi magnam molestias.</p>

    </div>
  )
}

const divstyle = {
    width: "48px",
    height: "48px",
    marginTop: "32px",
    marginLeft: "32px",
    borderRadius: "50%",
    backgroundColor: "#262E38",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const hstyle = {
    color: "white",
    fontSize: "28px",
    fontWeight: "700",
    marginLeft: "28px"
}

const pstyle = {
    marginLeft: "32px",
    marginRight: "40px",
    fontSize: "15px",
    fontWeight: "400",
    color: "#969FAD"
}