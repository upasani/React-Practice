import { useState } from "react";
import './todo.css';

function Todo() {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) {
            alert("text can't be empty")
        }
        setTodo((prev) => [...prev, text])
        setText('')
    }


    return (
        <>
            <h1>To do list</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="add a item.."
                />
                <button type="submit">Add</button>
            </form>
            {
                todo.length > 0 && (
                    <div>
                        {todo.map((e,index) => (
                            <div className="container">
                                <div>{e}</div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        ))}
                    </div>
                )
            }


        </>
    )

}

export default Todo;