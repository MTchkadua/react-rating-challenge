import FirstPage from './FirstPage';
import './App.css';
import SecondPage from './SecondPage';
import { useState } from 'react';

function App() {
  const [submitClick, setSubmitClick]= useState(false)
  const [selectNumber, setSelectNumber] = useState(null)
  const [butCLick, setButClick] = useState(false)

  function submClick (){
    if (butCLick){
      setSubmitClick(true)
    } else (alert("please submit your rate")) 
  }
  
  function click(num){
    setSelectNumber(num)
    setButClick(true)
  }



  

  return (
    <div style={style}>

      {submitClick ?  <SecondPage selectedNumber = {selectNumber}/> : <FirstPage id ={selectNumber} click = {click} submit = {submClick}/>}
     
    </div>
  );
}

export default App;
const style = {
  width: "100vw",
  height: "100vh",
  backgroundColor:"black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
