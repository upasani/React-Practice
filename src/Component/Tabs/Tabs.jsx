import { useState } from "react";
import './tabs.css';

export default function Tabs({ tabs }) {
    // console.log("the tabs is", tabs)
    const [content, setContent] = useState(1);
    return (
        <>
            {
                tabs.map((item, index) => (
                    <>
                        <div className="title">
                            <div>{item.title}</div>
                        </div>

                        {/* <div>{item.content}</div> */}
                        {
                            index + 1 === content && (
                                <div>
                                    {item.content}
                                </div>

                            )
                        }

                    </>
                ))
            }
        </>
    )
}