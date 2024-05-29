export default function Todo({ title, id, isCompleted, toggleCheckbox }) {
    return (
        <div style={{
            backgroundColor: 'rgb(160, 150, 132)',
            border: 'solid',
            margin: '1rem',
            width: '20rem',
            alignItems: 'center',
        }}>

            <p>Title: {title}</p>
            <input type="checkbox"
                checked={isCompleted} onChange={() => { toggleCheckbox(id) }}
            />
            {/* <p>Status: {isCompleted ? 'completed' : 'not completed'}</p> */}

        </div>
    )
}
