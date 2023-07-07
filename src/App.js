
import './App.css';
import Alert from './components/Alert';
// import Form from './components/Form';
// import Darkmode from './components/Darkmode';
import Myfile from './components/Myfile';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
// import { Route,Routes } from 'react-router-dom';
function App() {
  const[mode,setmode]=useState("light")  //whether dark mode is enable or not
  const [alert,setAlert]=useState(null)

  function color1(){
    let btn=document.getElementsByClassName("btn");
    let textarea=document.getElementById("mybox");
    btn[0].style.background="purple"
    btn[1].style.background="purple"
    btn[2].style.background="purple"
    btn[3].style.background="purple"
    btn[4].style.background="purple"
    btn[5].style.background="purple"
    // btn[6].style.background="purple"
    textarea.style.boxShadow="2px 2px 10px purple"
  }
  function color2(){
    let btn=document.getElementsByClassName("btn");
    let textarea=document.getElementById("mybox");
    btn[0].style.background="blue"
    btn[1].style.background="blue"
    btn[2].style.background="blue"
    btn[3].style.background="blue"
    btn[4].style.background="blue"
    btn[5].style.background="blue"
    textarea.style.boxShadow="2px 2px 10px blue"
  }
  function color3(){
    let btn=document.getElementsByClassName("btn");
    let textarea=document.getElementById("mybox");
    btn[0].style.background=" rgb(255, 0, 238)"
    btn[1].style.background=" rgb(255, 0, 238)"
    btn[2].style.background=" rgb(255, 0, 238)"
    btn[3].style.background=" rgb(255, 0, 238)"
    btn[4].style.background=" rgb(255, 0, 238)"
    btn[5].style.background=" rgb(255, 0, 238)"
    textarea.style.boxShadow="2px 2px 10px  rgb(255, 0, 238)"
  }
  function color4(){
    let btn=document.getElementsByClassName("btn");
    let textarea=document.getElementById("mybox");
    btn[0].style.background="rgb(0, 252, 17)"
    btn[1].style.background="rgb(0, 252, 17)"
    btn[2].style.background="rgb(0, 252, 17)"
    btn[3].style.background="rgb(0, 252, 17)"
    btn[4].style.background="rgb(0, 252, 17)"
    btn[5].style.background="rgb(0, 252, 17)"
    textarea.style.boxShadow="2px 2px 10px rgb(0, 252, 17)"
  }

 
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")

      document.body.style.background="#06031c"
      document.body.style.color="white"
      showAlert("Hello night mode is on","danger")
      document.title="now night mode"
    }
    else{
      setmode("light")
      document.body.style.background="white"
      document.body.style.color="black"
      showAlert("Hello day mode is on","primary")
      document.title="now day mode"
    }
  }

  return (
    <>
    
      <Navbar title="TextUtil" mode={mode} togglemode={togglemode} color1={color1} color2={color2} color3={color3} color4={color4} />
      <Alert alert={alert}/>
      <Myfile showAlert={showAlert}/>
      {/* <Form/> */}
    {/* <Routes>
      <Route path='/' element={ <Myfile showAlert={showAlert}/>}/>

      <Route path='/about' element={<Form/>} />
    </Routes> */}
    {/* <Navbar  home="home" about="About us"/> */}
   
    </>
  );
}

export default App;
