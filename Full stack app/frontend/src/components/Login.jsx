import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
    const [loginform, setLoginform] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const handlesubmit = async(e) => {
        e.preventDefault()
        let logindata={
            email:loginform.email,
            password:loginform.password
        }
        try{
            let response= await axios.post("http://localhost:8080/users/login",logindata)
            console.log(response)
            navigate('/ticketdashboard')
        }
        catch(err){
            console.log("error in sending data",err)
        }
    }
    const handleChange = (e) => {
        setLoginform({
            ...loginform,
            [e.target.name]: e.target.value
        })
    }
  return (
    <>
    <h2>Login page</h2>
    <form onSubmit={handlesubmit}>
     <div><input type="email" name="email" placeholder="enter your email" value={loginform.email} required onChange={handleChange}/></div>
     <div><input type="password" name="password" placeholder="enter your password" value={loginform.password} required onChange={handleChange}/></div>
     <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login