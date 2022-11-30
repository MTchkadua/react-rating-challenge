import React from 'react'
import SecondBody from './SecondBody'
import Secondfoto from './Secondfoto'
import SecondTxt from './SecondTxt'
export default function SecondPage(props) {
  return (
    <div style={style}>
      <Secondfoto />
      <SecondBody selectedNumber = {props.selectedNumber}/>
      <SecondTxt />
    </div>
  )
}
const style = {
    width: "412px",
    height: "416px",
    borderRadius: "30px",
    background: "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
}