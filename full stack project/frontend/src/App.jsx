import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import UserDashboard from './components/UserDashboard'
import TicketDashboard from './components/TicketDashboard'
import TicketForm from './components/TicketForm'
import AddTicket from './components/AddTicket'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/userdashboard/:id" element={<UserDashboard />} />
        <Route path="/ticketdashboard" element={<TicketDashboard />}/>
        <Route path="/TicketForm/:id" element={<TicketForm />} />
        <Route path="/addTicket/:source/:userId?" element={<AddTicket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App





