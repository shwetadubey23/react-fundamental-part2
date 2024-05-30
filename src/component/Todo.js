import React from "react"
import { ImCross} from 'react-icons/im'
export default function Todo({ title, id, isCompleted, toggleCheckbox, removeTodo }) {
    return (
        <div style={{
            backgroundColor: 'rgb(160, 150, 132)',
            border: 'solid',
            margin: '1rem',
            maxWidth: '900px',
            width: '95%',
            alignItems: 'center',
        }}>

            <p>Title: {title}</p>
            <input type="checkbox"
                checked={isCompleted} onChange={() => { toggleCheckbox(id) }}
            />
            <div onClick= {() => {removeTodo(id)}} > 
            <ImCross/>
            </div>
            {/* <p>Status: {isCompleted ? 'completed' : 'not completed'}</p> */}

        </div>
    )
}
