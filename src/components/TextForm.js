import React,{useState } from 'react'

export default function TextForm(props) {
  const handleup = ()=>{
    // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChnage = (event) =>{
    console.log("on change");
    setText(event.target.value);
    // console.log(text);
  }

  const [text,setText]  = useState("This is the text");
  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleup} >Covert to Uppercase</button>
    </div>
  )
}
 