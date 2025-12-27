import { useRef, useState } from "react";
import { items } from "../../../../mockData";
import './acordian.css';

function Acordian() {
    const data = items;
    const sectionRef = useRef(null);
    const [indexvalue, setIndexValue] = useState(null);
    const handleAcordian = (index) => {
        setIndexValue((prev) => prev === index ? null : index)
    }

    return (
        <>
            <h1>Acordian</h1>
            <div style={{ width: "50%" }} ref={sectionRef}>
                {
                    data && data.map((e, index) => (
                        <>

                            <div className="acordian-parent">
                                <div className="flex acordian-container">
                                    <h4>{e.title}</h4>
                                    <p style={{ cursor: "pointer" }} onClick={(e) => {
                                        handleAcordian(index);
                                    }}> {index === indexvalue ? '▲' : '▼'} </p>
                                </div>
                                {
                                    indexvalue === index &&
                                    <div style={{ padding: '14px' }}>{e.content}</div>

                                }

                            </div>

                        </>
                    ))
                }

            </div>
            {/* ▼ ▲  */}
        </>
    )
}

export default Acordian;