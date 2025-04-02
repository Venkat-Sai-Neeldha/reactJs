import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
    const [loginform, setLoginform] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handlesubmit = async(e) => {
        e.preventDefault()
        setError('')
        
        const logindata = {
            email: loginform.email,
            password: loginform.password
        }

        try {
            const response = await axios.post("http://localhost:8080/users/login", logindata)
            const { userType, userId } = response.data
            
            if (userType?.toLowerCase() === 'admin') {
                navigate('/ticketdashboard')
            } else {
                navigate(`/userdashboard/${userId}`)
            }
        } catch(err) {
            console.log("error in sending data", err)
            setError('Invalid email or password')
        }
    }

    const handleChange = (e) => {
        setLoginform({
            ...loginform,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="login-container">
            <h2>Welcome to Support Ticket Management System</h2>
            <h3>Please login to continue</h3>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter your email" 
                        value={loginform.email} 
                        required 
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        value={loginform.password} 
                        required 
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="signup-link">
                <p>Don't have an account? <button onClick={() => navigate('/register')}>Sign Up</button></p>
            </div>
        </div>
    )
}

export default Login
