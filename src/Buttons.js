import React from 'react'
import Button from './Button'


export default function Buttons(props) {
    let array = [1, 2, 3, 4, 5]


  return (
    array.map(num=>{
        return <Button id={props.id === num ? "backColor" : ""} numb = {num} click = {()=> props.click(num)}/>
    })
  )
}

