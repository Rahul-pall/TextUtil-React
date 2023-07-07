import React,{useState} from "react";
import PropTypes from 'prop-types'

//usestate

export default function Textfile(props) {
              const handleUppercase=()=>{
              // console.log("Change charactor into Uppercase"+text)
                            let newtext=text.toUpperCase();
                            settext(newtext);
              }
              const lowerCase=()=>{
              // console.log("Change charactor into Uppercase"+text)
                            let newtext=text.toLowerCase();
                            settext(newtext);
              }
              const handleOnChange=(event)=>{
                            // console.log("On Change");
                            settext(event.target.value);
              }
   const [text,settext] = useState("EnterValue");
//    text="new text";  //Wrong way to change the state
 //  settext("new text here"); //Correct way to change the state
  return (
      <div className="form-floating container my-5">
      <h1>{props.heading}</h1>
         {/* <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleOnChange}></textarea> */}
         <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleOnChange} placeholder="Enter your data"></textarea>
        <button className="btn btn-primary m-3" onClick={handleUppercase}>{props.button}</button>
        <button className="btn btn-primary m-3" onClick={lowerCase}>{props.button1}</button>
      </div>
  );
}
Textfile.propTypes={
              button:PropTypes.string
}
Textfile.defaultProps={
              button:"Submit"
}

