import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/js/bootstrap'

function UserDashboard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userTickets, setUserTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const [showDeleted, setShowDeleted] = useState(false)
  const [ticketToDelete, setTicketToDelete] = useState(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    // Fetch current user details
    axios.get(`http://localhost:8080/users/${id}`)
      .then((response) => {
        setCurrentUser(response.data)
      })
      .catch((err) => {
        console.log("Error fetching user details:", err)
      })

    
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

  const isAdmin = currentUser?.roles?.some(role => role.role === "ADMIN")

  const filteredTickets = userTickets.filter(ticket => {
    if (!isAdmin && ticket.deleted) {
      return false
    }
    
    if (!showDeleted && ticket.deleted) {
      return false
    }

    return true
  })

  function handledelete(ticketId) {
    setTicketToDelete(ticketId)
    const modalEl = document.getElementById('deleteModal')
    const modal = new bootstrap.Modal(modalEl)
    modal.show()
  }

  function confirmDelete() {
    axios.delete(`http://localhost:8080/tickets/delete/${ticketToDelete}`)
      .then((response) => {
        console.log('Delete response:', response.data)
        setUserTickets(prevTickets => 
          prevTickets.map(ticket => 
            ticket.id === ticketToDelete 
              ? { ...ticket, deleted: true }
              : ticket
          )
        )
        closeModal()
      })
      .catch((err) => {
        console.log("Error in deleting data:", err)
        alert("Error deleting ticket")
        closeModal()
      })
  }

  const closeModal = () => {
    const modalEl = document.getElementById('deleteModal')
    const modal = bootstrap.Modal.getInstance(modalEl)
    
    if (modal) {
      modal.hide()
    }
    
    const backdrop = document.querySelector('.modal-backdrop')
    if (backdrop) {
      backdrop.remove()
    }
    
    document.body.classList.remove('modal-open')
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }

  function handleupdate(ticketId) {
    if (ticketId) {
      navigate(`/TicketForm/${ticketId}`)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <nav>
        <h2>User Ticket Dashboard</h2>
        <h3><Link to={`/addTicket/user/${id}`}>Add new ticket</Link></h3>
      </nav>

      <div className="dashboard-header">
        <div className="ticket-stats">
          <h3>Total tickets: {filteredTickets.length}</h3>
        </div>
        {isAdmin && (
          <div className="dashboard-controls">
            <label>
              <input
                type="checkbox"
                checked={showDeleted}
                onChange={(e) => setShowDeleted(e.target.checked)}
              /> Show deleted tickets
            </label>
          </div>
        )}
      </div>

      {!filteredTickets.length ? (
        <p>No tickets found</p>
      ) : (
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
              {isAdmin && <th>Status</th>}
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>  
          <tbody>
            {filteredTickets.map(ticket => (
              <tr key={ticket.id} style={ticket.deleted ? {backgroundColor: '#ffebee'} : {}}>
                <td>{ticket.id}</td>
                <td>{ticket.title}</td>
                <td>{ticket.ticketComment}</td>
                <td>{ticket.status?.description || 'Not Set'}</td>
                <td>{ticket.priority?.description || 'Not Set'}</td>
                <td>{ticket.createdBy?.name || 'Unknown'}</td>
                <td>{ticket.assignedTo?.name || 'Unassigned'}</td>
                <td>{new Date(ticket.createdDate).toLocaleDateString()}</td>
                {isAdmin && (
                  <td>{ticket.deleted ? 'Deleted' : 'Active'}</td>
                )}
                <td>
                  {!ticket.deleted && (
                    <button onClick={() => handleupdate(ticket.id)}>
                      Update
                    </button>
                  )}
                </td>
                <td>
                  {!ticket.deleted && (ticket.createdBy?.id.toString() === id || isAdmin) && (
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => handledelete(ticket.id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div 
        className="modal" 
        id="deleteModal" 
        tabIndex="-1" 
        aria-labelledby="deleteModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteModalLabel">Confirm Delete</h1>
              <button 
                type="button" 
                className="btn-close" 
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this ticket?
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={closeModal}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
