import React, { useEffect, useState } from 'react'

export default function ExampleUseEffect () {
    console.log('Component Render');
    useEffect(() => {
        console.log('side Effect');
    }, []) // when we pass [] empty array (called dependency array) useEffect call only once on component render 
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