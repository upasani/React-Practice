import { useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(10);
    const handleProgressChange = (val) => {
        setProgress((prev) => {
            let value = prev + val;
            if (value < 0 || value > 100)
                return prev;
            return value;
        })
    }
    const getColor = () => {
        if (progress < 40)
            return 'red';
        if (progress >= 40 && progress < 80)
            return 'orange'
        return 'green'
    }
    return (
        <>
            <h1>Progrss Bar</h1>
            <div style={{ width: "300px", border: "1px solid black", borderRadius: "10px", marginTop: "10px", textAlign: "center" }}>
                {progress}%
                <div style={{ width: `${progress}%`, backgroundColor: getColor(), height: '15px', textAlign: "center" }}></div>
            </div>
            <button onClick={() => handleProgressChange(-10)}>-10%</button>
            <button onClick={() => handleProgressChange(+10)}>+10</button>
        </>
    )
}

export default ProgressBar;