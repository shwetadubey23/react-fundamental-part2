import React, { useState } from 'react'

export default function SubmitForm() {
    const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const fullName = firstName + " " + lastName
// const handelFirstName = (e) => {

// }
  return (
    <form>
<h1>Form</h1>
<div>
    <lable htmlFor='firstName'>First Name</lable>
    <input type='text' id='firstName' name='first' placeholder='First Name' value= {firstName}
    onChange={(e) => setFirstName(e.target.value) }
    />
</div>

<div>
    <lable htmlFor='lastName'>Last Name</lable>
    <input type='text' id='lastName' name='last' placeholder='Last Name' value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    />

</div>
<br/>

<p>
    First Name: {firstName}
</p>
<p>
    Last Name: {lastName}
</p>
<p>
    Full Name: {fullName}
</p>
    </form>
    
  )
}
