import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserDashboard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userTickets, setUserTickets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    axios.get(`http://localhost:8080/tickets/getById/${id}`)
      .then((response) => {
        const ticketsArray = Array.isArray(response.data) ? response.data : [response.data]
        setUserTickets(ticketsArray)
      })
      .catch((err) => {
        console.log("Error in fetching data:", err.response || err)
        setUserTickets([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  function handledelete(ticketId) {
    if (!ticketId) return

    axios.delete(`http://localhost:8080/tickets/delete/${ticketId}`)
      .then((response) => {
        console.log('Delete response:', response.data)
        setUserTickets([])
        navigate('/ticketdashboard')
      })
      .catch((err) => {
        console.log("Error in deleting data:", err)
      })
  }

  function handleupdate(ticketId) {
    if (ticketId) {
      navigate(`/TicketForm/${ticketId}`)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!userTickets.length) {
    return (
      <>
        <nav>
          <h2>User Ticket Dashboard</h2>
          <h3><Link to="/addTicket">Add new ticket</Link></h3>
        </nav>
        <p>No tickets found</p>
      </>
    )
  }

  return (
    <>
      <nav>
        <h2>User Ticket Dashboard</h2>
        <h3><Link to="/addTicket">Add new ticket</Link></h3>
      </nav>
      <table border="1">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>Comment</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Created By</th>
            <th>Assigned To</th>
            <th>Created Date</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>  
        <tbody>
          {userTickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.ticketComment}</td>
              <td>{ticket.status?.description || 'Not Set'}</td>
              <td>{ticket.priority?.description || 'Not Set'}</td>
              <td>{ticket.createdBy?.name || 'Unknown'}</td>
              <td>{ticket.assignedTo?.name || 'Unassigned'}</td>
              <td>{new Date(ticket.createdDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleupdate(ticket.id)}>
                  Update
                </button>
              </td>
              <td>
                <button onClick={() => handledelete(ticket.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UserDashboard
