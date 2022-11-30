import React from 'react'

export default function SecondBody(props ) {
  return (
    <div style={style}>
      <p> You selected {props.selectedNumber} out of 5 </p>
    </div>
  )
}
const style = {
  width: "193px",
  height: "32px",
  borderRadius: "22px",
  backgroundColor: "#262E38",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#FC7614",
  fontWeight: "400",
  fontSize: "15px",
  marginLeft: "110px",
  marginTop: "32px"
}