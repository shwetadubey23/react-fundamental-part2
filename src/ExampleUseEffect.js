import React, { useEffect, useState } from 'react'

export default function ExampleUseEffect () {
    useEffect(() => {
        console.log('side Effect');
    }, [])
const [num, setNum] = useState(0)
const increasValue = () => {
    setNum(num + 1)
}
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increasValue}> increas</button>
        </div>
    )
}