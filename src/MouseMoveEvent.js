import React, { useEffect, useState } from 'react'

export default function MouseMoveEvent() {
    const [mousePosition, setMousePosition] = useState({
        x: 0, y: 0
    });

useEffect(() => {
const handleMouseMove = (e) => {
    console.log({x: e.clientX, y: e.clientY});
    setMousePosition({x: e.clientX, y: e.clientY})
}
document.addEventListener("mousemove", handleMouseMove)

return () => {
    console.log('Cleanup Function');
    document.removeEventListener('mousemove', handleMouseMove)
}

}, [])

  return (
    <div>
<p>Position X: {mousePosition.x}</p>
<p>Position Y: {mousePosition.y}</p>
    </div>
  )
}
