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
        roles: [] 
    })
    const [error, setError] = useState('') 
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('') 
        
        if (formData.roles.length === 0) {
            setError('Please select at least one role')
            return
        }
        
        
        const phoneNumberDouble = parseFloat(formData.phone)
        if (isNaN(phoneNumberDouble)) {
            setError('Please enter a valid phone number')
            return
        }
        
      
        let formrole = {
            userName: formData.username,
            password: formData.password,
            name: formData.name,
            email: formData.email,
            phoneNumber: phoneNumberDouble,
            department: formData.department,
            role: formData.roles[0],         
            roles: formData.roles,            
            id: null
        }
        
        try {
            console.log('Sending registration data:', formrole)
            
            const response = await axios.post(
                "http://localhost:8080/users/add",
                formrole,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            
            console.log('Registration successful:', response.data)
            navigate('/')
        }
        catch (err) {
            console.log("Error details:", {
                message: err.message,
                response: err.response?.data,
                status: err.response?.status
            })
            setError(err.response?.data?.message || 'Registration failed. Please try again.')
        }
    }

    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            const role = e.target.value
            setFormData(prev => ({
                ...prev,
                roles: e.target.checked 
                    ? [...prev.roles, role]
                    : prev.roles.filter(r => r !== role)
            }))
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    }

    return (
        <div className="register-container">
            <h2>Sign Up</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                </select>

                <div className="roles-container">
                    <label>Select Roles:</label>
                    <div className="role-options">
                        <label>
                            <input
                                type="checkbox"
                                value="ADMIN"
                                checked={formData.roles.includes('ADMIN')}
                                onChange={handleChange}
                            />
                            Admin
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="USER"
                                checked={formData.roles.includes('USER')}
                                onChange={handleChange}
                            />
                            User
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="VIEWER"
                                checked={formData.roles.includes('VIEWER')}
                                onChange={handleChange}
                            />
                            Viewer
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="TESTER"
                                checked={formData.roles.includes('TESTER')}
                                onChange={handleChange}
                            />
                            Tester
                        </label>
                    </div>
                </div>

                <button type="submit">Sign Up</button>
            </form>
            <div className="login-link">
                <p>Already have an account?</p>
                <button onClick={() => navigate('/')}>Login</button>
            </div>
        </div>
    )
}

export default Register
