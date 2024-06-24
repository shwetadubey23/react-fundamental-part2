import React from 'react'

export default function Todo({id, title, completed, dispatch}) {
  const handleDelete = () => {
    dispatch({
      type: 'DELETE', payload: {id:id}
    })
    // console.log(id);
    }

    const handleComleted = () => {
      dispatch({
        type: 'TOGGEL_COMPLETED', payload: {id: id}
      })
      // console.log('Completed');
    }

  return (
    <div style={{ margin: '1rem', fontFamily: 'sans-serif', backgroundColor: 'GrayText', borderRadius: '1rem' }}>
      <p>id: {id}</p>
      <p style={{textDecoration: completed? 'line-through': 'solid'}}>Title: {title}</p>
      <p>Completed: {completed ? "true" : "false"}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleComleted}>Togal Completed</button>
    </div>
  )
}
