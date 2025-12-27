import { useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(10);
    console.log(progress)
    const handleProgressChange = (opr) => {
        setProgress((prev) => {
            if (opr === 'sub' && prev === 10)
                return 10;
            else if (opr === 'add' && prev === 100) {
                return 100;
            }
            else if (opr === 'add') {
                return prev + 10;
            } else if (opr === 'sub') {
                return prev - 10;
            }

        })
    }
    return (
        <>
            <h1>Progrss Bar</h1>
            <div style={{ width: "300px", border: "1px solid black", borderRadius: "10px", marginTop: "10px", textAlign: "center" }}>
                {progress}%
                <div style={{ width: `${progress}%`, backgroundColor: `${progress < 40 ? 'red' : progress >= 40 && progress < 80 ? 'orange' : 'green'}`, height: '15px', textAlign: "center" }}></div>
            </div>
            <button onClick={() => handleProgressChange('sub')}>-10%</button>
            <button onClick={() => handleProgressChange('add')}>+10</button>
        </>
    )
}

export default ProgressBar;