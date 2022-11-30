import React from 'react'

export default function SecondTxt() {
  return (
    <>
        <h1 style={hstyle}>Thank you!</h1>
        <p style={pstyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, asperiores. Neque fugit asperiores ipsum illo. </p>
    </>
    
  )
}

const hstyle = {
    color: "white",
    fontSize: "28px",
    fontWeight: "700",
    marginLeft: "135px"
}
const pstyle = {
    marginLeft: "32px",
    marginRight: "40px",
    fontSize: "15px",
    fontWeight: "400",
    color: "#969FAD",
    textAlign : "center"
}