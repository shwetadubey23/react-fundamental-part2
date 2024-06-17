import React from 'react'

export default function User({ id, name, username, email, phone, address }) {
    return (
        <div style={{ 'margin': '1rem', backgroundColor: 'blueviolet' }}>
            <p>Number: {id}</p>
            <p>Name: {name}</p>
            <p>UserName: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address.city}</p>

        </div>
    )
}
