import { useState } from "react"

function ChipsInput() {
    const [text, setText] = useState('');
    const [chips, setChips] = useState([]);
    console.log("the chips is", chips);

    const handleSubmit = (e) => {
        console.log("the text is", text);
        e.preventDefault();
        setChips((prev) => {
            if (!text.trim()) {
                alert("empty text are not allowed")
                return [...prev]
            }
            if (prev.includes(text)) {
                alert("This chips already exist");
                return [...prev]
            }
            return [...prev, text]
        }
        )
        setText('')
    }
    const handleDiscard = (index) => {
        console.log("the index is", index);
        let filterData = chips.filter((val, i) => i !== index);
        setChips(filterData);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{ margin: "auto" }}>

                    <h1>Chips Input</h1>
                    <input
                        value={text}
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
                        {
                            chips && chips.length > 0 && (
                                chips.map((ch, index) => {
                                    return (
                                        <>
                                            <div style={{ display: "flex", backgroundColor: "grey", gap: "10px", padding: "10px", borderRadius: "21px" }}>
                                                <div style={{}}>{ch}</div>
                                                <button type="button"
                                                    style={{ color: "red", cursor: "pointer" }}
                                                    onClick={() => handleDiscard(index)}>X</button>
                                            </div>
                                        </>

                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </form>
        </>
    )
}

export default ChipsInput;