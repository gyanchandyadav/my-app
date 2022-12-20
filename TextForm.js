import React, {useState} from 'react'

export default function TextForm(props) 
{
    const handleUpClick = ()=>
    {
       // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const ClearTextClick = ()=>
    {
       // console.log("Uppercase was clicked"+ text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success")

    }
    const handleExtraSpaces = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")

    }
    const CopyToClipboard = ()=>
    {
       // console.log("Uppercase was clicked"+ text);
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied","success")

        
    }
    const handleLoClick = ()=>
    {
       // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")

    }
    const handleOnChange = (event)=>
    {
        //console.log("on change");
        setText(event.target.value);
       
    }
    const[text,setText] = useState('');
    
     return (
        <>
        <div className="container" style= {{color: props.mode=== 'dark'?'white':'#042743' }}>
         <h1 className='mb-4'>{props.heading}  </h1> 
         <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style= {{ backgroundColor: props.mode=== 'dark'?'#13466e':'white',color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upporcase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={ClearTextClick}>Clear Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={CopyToClipboard}>Copy To Clipboard</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container"style= {{color: props.mode=== 'dark'?'white':'#042743' }}>
            <h2> your text summery</h2>
            <p>{text.split (/\s+/).filter((element)=>{return element.length!==0}).length } wordr and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>previev</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>

        </div> 
        </>

    )
 }