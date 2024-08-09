import React,{useState} from 'react'

export default function Textformat(props) {
    const handleUpclick=()=>{
      let newtext =text.toUpperCase();
      setText(newtext);
      props.showalert('Text Turn TO UpperCase');
    }
    const handleLoclick=()=>{
        let lowtext =text.toLowerCase();
        setText(lowtext);
        props.showalert('Text Turn TO LowerCase');
      }
      const handleClearclick=()=>{
        let Cleartext ="";
        setText(Cleartext);
        props.showalert('Text Cleared');
      }
    const handleCpclick=()=>{
        let copytext=text;
        navigator.clipboard.writeText(text);
    setText(copytext);
    props.showalert('Text Copied!');
    }
    const handleExclick =()=>{
        let extext = text.split(/[ ]+/);
        setText(extext.join(" "));
        props.showalert("Extra Space Removed","success");
       }


    const handelonchange =(event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState("");  
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
    <div className="loader"></div>
    <h1>Write Something Here</h1>
    <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? '#BACDB0':'white',color: props.mode === 'dark'? '#151415':'black'} } placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={handelonchange} rows="8"></textarea>
</div>
<div className="btn">
<button type="button" onClick={handleUpclick} className="btn btn-primary mx-1">Upper case</button>
<button type="button" onClick={handleLoclick}className="btn btn-secondary mx-1">Lower case</button>
<button type="button" onClick={handleClearclick} className="btn btn-success mx-1">Clear Text</button>
<button type="button"onClick={handleCpclick} className="btn btn-danger mx-1">Copy Text</button>
<button type="button" onClick={handleExclick} className="btn btn-warning mx-1">Remove Extra space</button>
</div>
</div>
<div className="container" style={{color: props.mode === 'dark'? 'white':'black'} }>
        <h1>Your Text Summary</h1>
        <p>{text===""? 0 : text.split(" ").length-1} words and {text.length} Charachters</p>
        {/* <p>{text.split(" ").length} Words and {text.length} Charachters</p> */}
        <h4> {0.008 * text.split(" ").length } Minutes Required for Reading</h4>
        <h5>Preview</h5>
    <p>{text.length>0 ?text : 'Write Something in Box to Preview'}</p>
    </div>

    </>
  )
}
