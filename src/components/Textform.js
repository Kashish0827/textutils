import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("uppercase button clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase","success");
    }
    const handleLowClick = ()=>{
        console.log("lowercase button clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase","success");
    }
    const handleclearClick = ()=>{
        
        let newtext=('');
        setText(newtext);
        props.showAlert("Text cleared","success");
    }
    const handleRepeat = ()=>{
        
        let newtext=(text+text);
        setText(newtext);
        props.showAlert("Text repeated","success");
    }
    
    const handleonChange = (event)=>{
        console.log("on changed");
        setText(event.target.value);
        
    }
    const [text, setText] = useState('');
   //text = "new text" this is the wrong way 
   //setText("new text"); correct way
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'pink':'#042743'}}>
            <h1>{props.heading }</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleRepeat}>repeat text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"enter something above to preview" }</p>
        
        </div>
        </>
    )
}
