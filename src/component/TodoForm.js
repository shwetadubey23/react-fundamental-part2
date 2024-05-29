import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('')

    function handelSubmit(e) {
        e.preventDefault()
        const newTodo = {
            title: title,
            isCompleted: false,
            id: uuid()
        }
        
        if(title.trim().length === 0) {
           return  alert("Can not be save empty data")
        }
        addTodo(newTodo)
        setTitle('')
        console.log('title', title);
    }


    function handelTodo(e) {
        setTitle(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label>Tasks:</label>
                <input type='text' placeholder="add todo" value={title} onChange={handelTodo} />
                <button type='submit' style={{margin: '10px'}}>Add</button>
            </form>
        </div>
    )
}
