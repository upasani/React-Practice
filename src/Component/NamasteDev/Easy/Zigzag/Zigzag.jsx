import { useState } from "react";
import './zigZag.css';

function Zigzag() {
    const [text, setText] = useState('');
    const [output, setOutput] = useState('')
    // console.log("the text is", output);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newValue = text.split(',').map((e, index) => {
            if (index % 2 !== 0) {
                return e.split("").reverse().join("")
            } else {
                return e;
            }
        }).join("")
        setOutput(newValue);
        // setText('')


        // console.log(newMap, "newMap")
    }
    return (
        <>
            <h1>Zigzag</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    style={{ padding: '4px' }}
                    type="text" onChange={(e) => setText(e.target.value)} 
                    value={text}/> <br />
                <button type="submit" className="btn">Submit</button>
                <h4>Output:{output}</h4>
            </form>
        </>
    )
}

export default Zigzag;