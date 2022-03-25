import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length>0)
      props.showAlert("Converted to Uppercase","success");
    else
      props.showAlert("Text not Found!","warning");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text.length>0)
      props.showAlert("Converted to Lowercase","success");
    else
      props.showAlert("Text not Found!","warning");
  };

  const handleCapitalizeClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    if (text.length>0)
      props.showAlert("converted to the capitalize text","success");
    else
      props.showAlert("Text not Found!","warning");
  };

  const handleTitleClick = () => {
    let newText = text.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    setText(newText);
    if (text.length>0)
      props.showAlert("converted to the titled text","success");
    else
      props.showAlert("Text not Found!","warning");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    if (text.length>0)
      props.showAlert("Text Cleared!","success");
    else
      props.showAlert("Text not Found!","warning");
    
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='light'?'white':'#0b0a0a', color: props.mode==='dark'?'white':'black'}}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          />
        </div>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} mx-1`} onClick={handleCapitalizeClick}>
          Convert to Capitalize
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} mx-1`} onClick={handleTitleClick}>
        Convert to Titlecase
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} mx-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} mx-1`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} mx-1`} onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(x => x).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(x => x).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
