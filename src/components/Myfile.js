import React,{useState} from 'react'

export default function Myfile(props) {
              const [text,newtext]=useState("");
              const [color1,color2]=useState({
                color:"#272727",
                backgroundColor:"white"
              });

              let uppercase=()=>{
                            let changetext=text.toUpperCase();
                            newtext(changetext);
                            props.showAlert("change to upper case","success")
              }
              let lowercase=()=>{
                            let changetext=text.toLowerCase();
                            newtext(changetext);
                            props.showAlert("change to lower case","success")
              }
              let removeCase=()=>{
                            newtext("");
                            props.showAlert("Remove text","success")
              }
  
              let changecolor=()=>{
                document.getElementById("changeColor");
                props.showAlert("color of textarera are have changed","success")
                if(color1.color==="#272727"){
                  color2({
                    color:"white",background:"#272727"
                  })
                }
                else{
                  color2({
                    color:"#272727",background:""
                  })
                }
               }

              let copytext=()=>{
                props.showAlert("text are copied in the clipboard","success")
                var text=document.getElementById("mybox")
                text.select();
                navigator.clipboard.writeText(text.value);
              }
              let removeExtraSpace=()=>{
                props.showAlert("Remove extra spaces","success")
                let newSpace = text.split(/[ ]+/);
                newtext(newSpace.join(' '));
              }

              let change=(event)=>{
                newtext(event.target.value);
              }
             
  return (
    <>
    <div className="form-floating container my-5">
        <textarea onChange={change}  style={color1} className="form-control" value={text} id="mybox" rows="8" autoFocus></textarea>
        <button id="btn1" onClick={uppercase} className="btn btn-primary m-3">Change Uppercase</button>
        <button onClick={lowercase} className="btn btn-primary m-3">Change Lowercase</button>
        <button onClick={changecolor} className="btn btn-primary m-3">changeColor</button>
        <button onClick={copytext} className="btn btn-primary m-3">Copy</button>
        <button onClick={removeExtraSpace} className="btn btn-primary m-3">Remove Extra Space</button>
        <button onClick={removeCase} className="btn btn-primary m-3">Remove Letter</button>
        </div>
        <div className="container">
        <h2>Refrence</h2>
        <p>word is {text.split(" ").length-1} and charactor is {text.length}</p>
        <p>{text}</p>
        </div>
    </>
  )
}

Myfile.defaultProps={
              btn1:"UpperCase",
              btn2:"Lowercase"
}

// style={{backgroundColor:color1.color==='272727'?'white':'#0d6efd'}}