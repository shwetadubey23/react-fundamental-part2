import React, { useEffect, useState } from 'react'
import User from './User'
const URL = 'https://jsonplaceholder.typicode.com/users';

export default function ExampleWithFetch() {
    const [users, setUsers] = useState([])
    const [isloding, setIsLoding] = useState(true)
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')



    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(URL)
            // console.log(response);
            if (!(response.status >= 200 && response.status <= 299)) {
                setIsError(true)
                setErrorMsg(`${response.status}`)
                setIsLoding(false)
                return
            }
            const data = await response.json()
            console.log(data);
            setUsers(data)
            setIsLoding(false)
        }

        fetchData()

        
    }, [])

    if (isloding) {
        return <h1>Loding.......</h1>
    }

    if (isError) {
        return <h1> {errorMsg} Geting Error</h1>
    }

    return (
        <div style={{ 'margin': '1rem' }}>
            {users.map((user) => (<User key= {user.id} {...user} />))}

        </div>
    )
}