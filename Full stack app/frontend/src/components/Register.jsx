import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        department: '',
        role: ''
    })
   const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formrole = {
            name: formData.name,
            password: formData.password,
            userName: formData.username,
            email: formData.email,
            phoneNumber: formData.phone,
            department: formData.department,
            role: formData.role
        }
        console.log(formrole)
        try {
            const response = await axios.post("http://localhost:8080/users/add", formrole)
            navigate('/login')
            
        }
        catch (err) {
            console.log("error in sending data", err)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div >
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input  type="email"  name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
                    />
                </div>

                <div>
                    <input type="tel" name="phone" placeholder="Phone"value={formData.phone} onChange={handleChange}  required/>
                </div>

                <div >
                    <select
                        name="department"
                        value={formData.department} onChange={handleChange} >
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>

                <div >
                    <select
                        name="role"
                        value={formData.role} onChange={handleChange}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>

                <button type='submit'>
                    Sign Up
                </button>
            </form>
            <p>Already have an account?Login below</p>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Register