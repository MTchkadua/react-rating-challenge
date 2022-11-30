import React from 'react'
import FirstBody from './FirstBody'
import Buttons from './Buttons'
import Submit from './Submit'

export default function FirstPage(props) {
  return (
    <div style={style}>
      <FirstBody />
      <div className='butdiv'> <Buttons click = {props.click} id = {props.id}/> </div>
      <Submit submit={props.submit}/>
    </div>
  )
}

const style = {
    width: "412px",
    height: "416px",
    borderRadius: "30px",
    background: "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
}

