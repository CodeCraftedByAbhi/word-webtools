import React,{useState} from "react";

export default function Body(props) {
 
  const handleClear = () => {
    setText('')
  }

  const handleUpClick= () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick= () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleAltercase = () => {

    let newText = text.toLowerCase().split("")
    for (let index = 0; index < newText.length; index+= 2) {
        newText[index] = newText[index].toUpperCase()
      }
      setText(newText.join(" "))
  }

  const handleSpace = () => {
    let newText = '';
    let space = false;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if( char === ' '){
        if(!space){
          newText +=char;
          space =true;
        }
      }
      else{
        newText += char;
        space = false;
      }
      
    }
    setText(newText)
  }

  const texttoHTML = () => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
  };

  const newText = text.replace(/[&<>"']/g, (match) => entities[match]);

  setText(`<p>${newText}</p>`)

  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const copyText = () => {
    const newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    document.execCommand('copy');
  }

  const [text, setText] = useState('');
  
  return (
<>
  <h2>Enter Your Text To Analyze</h2>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange} placeholder="Enter your text"></textarea>
  <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear All</button>
  <button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy</button>
  <h2>Funtionality</h2>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleAltercase}>Convert to Alternatecase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleSpace}>Remove Extra Spaces</button>
  <button className="btn btn-primary my-3 mx-2" onClick={texttoHTML}>Convert to HTML</button>
  <h2>Information :</h2>
  <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length} Word Count</p>
  <p>{text.length} Character Count</p>
  <h2>Preview :</h2>
  {text}
</>
  );
}
