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

    const handelSubmit = (e) => {
        e.preventDefalut()
        setFormData('')
    }

    const handelFormData = (e) => {
        setFormData(prevState => {
            return { ...prevState, [e.target.id]: e.target.value }
        })
    }
    return (
        <div>
            <form className='form' onSubmit={handelSubmit}>
                <label>Name:</label>
                <input type='text' id='name' placeholder='Name' value={formData.name} onChange={handelFormData} /> <br />
                <label>Email:</label>
                <input type='email' id='email' placeholder='Email' value={formData.email} onChange={handelFormData} /> <br />
                <label>Phone:</label>
                <input type='text' id='phone' placeholder='Phone' value={formData.phone} onChange={handelFormData} /> <br />
                <label>Password:</label>
                <input type='passwrd' id='password' placeholder='Password' value={formData.password} onChange={handelFormData} /> <br />
                <label>Mail</label>
                <input type='radio' name='gender' id='mail' 
                value={formData.gender} 
                checked={formData.gender === 'mail'}
                onChange={handelFormData}
                 />
                <label>Femail</label>
                <input type='radio' name='gender' id='femail'
                 value={formData.gender} 
                 checked = {formData.gender === 'femail'}
                onChange={handelFormData} />
            </form>
            <button>Submit</button>
        </div>
    )
}
