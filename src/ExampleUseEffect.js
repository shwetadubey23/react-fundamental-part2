import React, { useEffect, useState } from 'react'

export default function ExampleUseEffect () {
    const [num, setNum] = useState(0)
    const increasValue = () => {
        setNum(num + 1)
    }
    const [num2, setNum2] = useState(0)
    const increasValueForNum2 = () => {
        setNum2(num2 + 1)
    }
    const dicreasValue = () => {
        setNum(num - 1)
    }

    console.log('Component Render');
    useEffect(() => {
        console.log('side Effect');
    }, [num2]) // when we pass [] empty array (called dependency array) useEffect call only once on component render , 
               // when we pass any value as second input for useEffect then useEffect call every time when those component will rerender

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increasValue}> increas</button> 
            <button onClick={dicreasValue}> dicreasValue</button> <br/>
            <h1>Second Value</h1>
            <h1>{num2}</h1> 
            <button onClick={increasValueForNum2}>increas Second Value</button>
        </div>
    )
}