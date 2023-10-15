import React, { useState } from "react";

export default function Form(props) {
    
    
  const [text, setText] = useState("");
  const [storedText, setStoredText] = useState('');
  const handleUpClick = () => {
    // console.log("upClicked Clicked" + text);
    //setText("You changed/Click the entered text");

    setStoredText(text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success"); 

  };


  const handleLowClick = () => {
    
    let newText=text.toLowerCase();
    setText(newText);
    setStoredText(text);
    props.showAlert("Converted to lowerCase","success"); 
};
  const handleOrgClick = () => {
    
    
    setText(storedText);
  };
  const handleCopy = () => {
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
    
  };

  const handleOnChange = (event) => {
    //console.log("onChanged Clicked");
    setText(event.target.value);
    
  };
  const handleExtraSpaces = () => {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
 
 

 
  //test = "new text"; //wronge
  //setText("new text"); //right

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'
        }}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2 " onClick={handleLowClick}>
          Convert to LowerCase
        </button>


<button className="btn btn-primary mx-2 " onClick={handleOrgClick}>
          Previous LetterCase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>
        Remove Extra Spaces
        </button>
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.008*text.split(" ").length } minutes reads</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Entre something in the TextBox Aboves to preview it here"}</p>
    </div>
    </>
  );
}
