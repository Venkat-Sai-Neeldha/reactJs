import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function TicketDashboard() {
  const [tickets, setTickets] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get("http://localhost:8080/tickets/getAllTickets")
      .then((response) => {
        console.log(response.data)
        setTickets(response.data)
      })
      .catch((err) => {
        console.log("error in fetching data", err)
      })
  }, [])

  function handledelete(id) {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      axios.delete(`http://localhost:8080/tickets/delete/${id}`)
        .then((response) => {
          console.log(response.data)
          setTickets(tickets.filter((ticket) => ticket.id !== id))
        })
        .catch((err) => {
          console.log("error in deleting data", err)
        })
    }
  }

  function handleupdate(id) {
    navigate(`/TicketForm/${id}`)
  }

  return (
    <>
      <nav><h2>TicketDashboard</h2></nav>
      <h2>total tickets: {tickets.length}</h2>
      <button><Link to="/addticket">Add new ticket</Link></button>
      <table border="1">
        <thead>
          <tr>
            <th>ticketId</th>
            <th>ticketTitle</th>
            <th>ticketComment</th>
            <th>ticketStatus</th>
            <th>ticketPriority</th>
            <th>ticketCreator</th>
            <th>ticketCreatedDate</th>
            <th colSpan={2}>actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.ticketComment || 'N/A'}</td>
              <td>{ticket.status?.description || 'N/A'}</td>
              <td>{ticket.priority?.description || 'N/A'}</td>
              <td>{ticket.createdBy.name || 'N/A'}</td>
              <td>{ticket.createdDate}</td>
              <td><button onClick={() => handleupdate(ticket.id)}>update</button></td>
              <td><button onClick={() => handledelete(ticket.id)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TicketDashboard
