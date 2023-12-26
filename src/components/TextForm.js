import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        console.log("Onclick function invoked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowerClick = ()=>{
        console.log("Onclick function invoked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleOnChange = (event)=>{
        console.log("Onchanges occured")
        setText(event.target.value)
    }
    const reverseText = (event)=>{
    }
    const handleClearClick = (event)=>{
        setText("")
    }


    const [text,setText]=useState("Enter your text here")

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'gray':'white'}} id="myBox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={reverseText}>Reverse Text</button>

        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length}characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
