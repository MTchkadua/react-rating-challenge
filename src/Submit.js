import React from 'react'

export default function Submit(props) {
  return (
    <button style={style} onClick={props.submit}>Submit</button>
  )
}

const style = {
    width: "341px",
    height: "45px",
    marginLeft: "32px",
    borderRadius: "15px",
    backgroundColor: "white",
    marginTop: "30px"
}