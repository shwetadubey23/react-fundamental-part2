import Todo from "./Todo"

export default function Todos({ todoState, dispatch }) {

    return (
        <div >
            {todoState.map((todo) => {
                return <Todo {...todo} dispatch={dispatch} key={todo.id} />
            }
            )}
        </div>
    )
}
