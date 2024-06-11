import React, { useState } from 'react'
import '../App.css'
export default function SubmitForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // setFormData({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     password: '',
        //     gender: ''
        // })
        console.log('formData', formData);
    }

    const handleFormData = (e) => {
        setFormData(prevState => {
            return { ...prevState, [e.target.id]: e.target.value }
        })
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' id='name' placeholder='Name' value={formData.name} onChange={handleFormData} /> <br />
                <label>Email:</label>
                <input type='email' id='email' placeholder='Email' value={formData.email} onChange={handleFormData} /> <br />
                <label>Phone:</label>
                <input type='text' id='phone' placeholder='Phone' value={formData.phone} onChange={handleFormData} /> <br />
                <label>Password:</label>
                <input type='password' id='password' placeholder='Password' value={formData.password} onChange={handleFormData} /> <br />
                <label htmlFor='male'>Male</label>
                <input type='radio' name='gender' id='male'
                    value={formData.gender}
                    checked={formData.gender === 'male'}
                    onChange={handleFormData}
                />
                <label htmlFor='female'>Female</label>
                <input type='radio' name='gender' id='female'
                    value={formData.gender}
                    checked={formData.gender === 'female'}
                    onChange={handleFormData} />
            </form>
            <button>Submit</button>
        </div>
    )
}
