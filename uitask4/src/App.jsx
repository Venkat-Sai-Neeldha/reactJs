import React from 'react'
import './App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addYears } from 'date-fns';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    date: ""
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }


    if (!selectedDate) {
      alert("Please select a date");
      return;
    }
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      date: date ? date.toLocaleDateString("en-GB") : ''
    });
  };

  const today = new Date();
  const oneYearFromNow = addYears(today, 1);

  if (isSubmitted) {
    return (
      <div className="container">
        <div className="submitted-data">
        <h2>Submitted Data:</h2>
        <p><b>Username:</b> {formData.username}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Mobile:</b> {formData.mobile}</p>
        <p><b>Date:</b> {formData.date}</p>
        <button  className="btn btn-primary mt-3 w-100" onClick={() => {setIsSubmitted(false)
          formData.username = "";
          formData.email = "";
          formData.mobile = "";
          formData.date = "";
          formData.password = "";
          formData.confirmPassword = "";
          setSelectedDate(null);
        }}>Back to Form</button>
      </div>
      <div className="text">
        <i>Quest K2 Technologies</i>
        <h4><i>Innovate. Build. Transform</i></h4>
      </div>
      </div>
      
    );
  }

  return (
    <div className='container'>
      <div className="form">
      <h3><i style={{color:"white"}}>Register with us </i></h3>
      <br />
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="username" label="Username">
            <Form.Control 
              type="text" 
              placeholder="Username"  
              name="username"
              required
              onChange={handleChange}
              value={formData.username}
            />
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="email" label="Email address" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="" 
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </FloatingLabel>

          <FloatingLabel controlId="password" label="Password">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password"
              required
              onChange={handleChange}
              value={formData.password}
            />
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="confirmPassword" label="Confirm Password">
            <Form.Control 
              type="password" 
              placeholder="Confirm Password" 
              name="confirmPassword"
              required
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="mobile" label="Mobile Number">
            <Form.Control 
              type="tel" 
              placeholder="Mobile Number" 
              name="mobile"
              required
              onChange={handleChange}
              value={formData.mobile}
            />
          </FloatingLabel>
          <br />

          <FloatingLabel controlId="date" label="">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={today}
              maxDate={oneYearFromNow}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select a date"
              className="form-control"
            />
          </FloatingLabel>

          <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
        </Form>
      </div>
      <div className="text">
        <i>Quest K2 Technologies</i>
        <h4><i>Innovate. Build. Transform</i></h4>
      </div>
    </div>
  );
}

export default App

