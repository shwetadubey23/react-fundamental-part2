import React, { useEffect, useState } from 'react'

export default function ExampleWithFetch() {
    const [users, setUsers] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data);
        setUsers(data)
    }

    useEffect(() => {
        fetchData()

        // fetch(URL)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     })
    }, [])
    return (
        <div style={{'margin':'1rem'}}>
            <ol>
                {users.map((user) => {
                    //  return   <li >{user}</li>
                    return <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>UserName: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Address: {user.address.city}</p>

                    </li>
                    // return <li>{user.name}</li>
                })}
            </ol>
        </div>
    )
}