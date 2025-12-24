import { useEffect, useState } from "react";
const AutoSave = () => {

    const [text, setText] = useState(localStorage.getItem('key'));

    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setText(e.target.value);
                    localStorage.setItem('key', e.target.value)
                }}
                value={text}
            />
            <button onClick={() => {
                localStorage.clear();
                setText('')
            }}>Reset</button>
        </>
    )

}

export default AutoSave;