import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/js/bootstrap'
import './ticketDashboard.css'

function TicketDashboard() {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showDeleted, setShowDeleted] = useState(false)
  const [ticketToDelete, setTicketToDelete] = useState(null)
  const navigate = useNavigate()
  
  const fetchAllTickets = async () => {
    try {
      // Fetch active tickets
      console.log('Fetching active tickets...')
      const activeResponse = await axios.get("http://localhost:8080/tickets/getAllTickets")
      console.log('Active tickets response:', activeResponse.data)
      
      const activeTickets = Array.isArray(activeResponse.data) 
        ? activeResponse.data.map(ticket => ({ ...ticket, deleted: false }))
        : []
      console.log('Fetching deleted tickets...')
      let deletedTickets = []
      try {
        const deletedResponse = await axios.get("http://localhost:8080/tickets/deleted")
        console.log('Deleted tickets response:', deletedResponse.data)
        deletedTickets = Array.isArray(deletedResponse.data)
          ? deletedResponse.data.map(ticket => ({ ...ticket, deleted: true }))
          : []
      } catch (deletedErr) {
        console.log('No deleted tickets found:', deletedErr)
       
      }
      
      console.log('Processed active tickets:', activeTickets)
      console.log('Processed deleted tickets:', deletedTickets)
      
      setTickets([...activeTickets, ...deletedTickets])
      setError(null)
    } catch (err) {
      console.error("Error fetching tickets:", err)
      const errorMessage = err.response?.data?.message || err.message || "Failed to load tickets"
      setError(`Error: ${errorMessage}. Status: ${err.response?.status || 'Unknown'}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllTickets()
  }, [])

  function handledelete(ticketId) {
    setTicketToDelete(ticketId);
    
    const modalEl = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  function confirmDelete() {
    axios.delete(`http://localhost:8080/tickets/delete/${ticketToDelete}`)
      .then((response) => {
        console.log('Delete response:', response.data)
        setTickets(prevTickets => 
          prevTickets.map(ticket => 
            ticket.id === ticketToDelete 
              ? { ...ticket, deleted: true }
              : ticket
          )
        )
        closeModal();
      })
      .catch((err) => {
        console.error("Error in deletion process:", err)
        alert("Error occurred during deletion: " + (err.response?.data?.message || err.message))
        closeModal();
      })
  }

  const closeModal = () => {
   
    const modalEl = document.getElementById('deleteModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    
    if (modal) {
      modal.hide();
    }
    
  
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
    
    // Reset body styles
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  function handleupdate(id) {
    navigate(`/TicketForm/${id}`)
  }

  function formatDate(dateString) {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleString()
  }

  if (loading) return <div>Loading tickets...</div>
  if (error) return (
    <div>
      <div style={{color: 'red'}}>{error}</div>
      <button onClick={fetchAllTickets}>Retry</button>
    </div>
  )

  const activeTickets = tickets.filter(t => !t.deleted)
  const deletedTickets = tickets.filter(t => t.deleted)
  const displayedTickets = showDeleted ? deletedTickets : activeTickets

  return (
    <div className="dashboard-container">
      <nav>
        <h2>Admin Dashboard</h2>
        <button className="btn-primary" onClick={() => navigate('/login')}>Logout</button>
      </nav>
      
      <div className="dashboard-header">
        <div className="ticket-stats">
          <h3>Active tickets: {activeTickets.length}</h3>
          <h3>Deleted tickets: {deletedTickets.length}</h3>
        </div>
        <div className="dashboard-controls">
          <button 
            className={`btn ${showDeleted ? 'btn-warning' : 'btn-secondary'}`}
            onClick={() => setShowDeleted(!showDeleted)}
          >
            {showDeleted ? 'Show Active Tickets' : 'Show Deleted Tickets'}
          </button>
          {!showDeleted && (
            <button className="btn-primary">
              <Link to="/addTicket/admin" style={{color: 'white', textDecoration: 'none'}}>
                Add new ticket
              </Link>
            </button>
          )}
        </div>
      </div>

      {displayedTickets.length === 0 ? (
        <p>{showDeleted ? 'No deleted tickets found' : 'No active tickets found'}</p>
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
              <th>Status</th>
              {showDeleted && <th>Delete Date</th>}
              {!showDeleted && <th colSpan={2}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {displayedTickets.map((ticket) => (
              <tr 
                key={`${ticket.id}-${ticket.deleted ? 'deleted' : 'active'}`}
                style={ticket.deleted ? {backgroundColor: '#ffebee'} : {}}
              >
                <td>{ticket.id}</td>
                <td>{ticket.title}</td>
                <td>{ticket.ticketComment || 'N/A'}</td>
                <td>{ticket.status?.description || 'N/A'}</td>
                <td>{ticket.priority?.description || 'N/A'}</td>
                <td>{ticket.createdBy?.name || 'N/A'}</td>
                <td>{ticket.assignedTo?.name || 'N/A'}</td>
                <td>{formatDate(ticket.createdDate)}</td>
                <td>{ticket.deleted ? 'Deleted' : 'Active'}</td>
                {showDeleted && <td>{formatDate(ticket.deleteDate)}</td>}
                {!showDeleted && (
                  <>
                    <td>
                      <button onClick={() => handleupdate(ticket.id)}> 
                        Update
                      </button>
                    </td>
                    <td>
                      <button 
                        onClick={() => handledelete(ticket.id)} 
                        className="btn btn-danger btn-sm"
                      > 
                        Delete Ticket
                      </button>
                    </td>
                  </>
                )}
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
    </div>
  )
}

export default TicketDashboard
