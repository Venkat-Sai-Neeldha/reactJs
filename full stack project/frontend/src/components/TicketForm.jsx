import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function TicketForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        ticketComment: '',
        status: '',
        priority: '',
        assignedTo: '',
        createdBy: ''
    })
    const [existingTicket, setExistingTicket] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/tickets/getById/${id}`)
                .then(response => {
                    let ticket = null
                    if (response.data) {
                        ticket = Array.isArray(response.data) ? response.data[0] : response.data
                    }

                    console.log('Fetched ticket:', ticket)

                    if (!ticket) {
                        throw new Error('Ticket not found')
                    }

                    setExistingTicket(ticket)
                    
                    setFormData({
                        title: ticket.title || '',
                        ticketComment: ticket.ticketComment || '',
                        status: ticket.status?.description || '',
                        priority: ticket.priority?.description || '',
                        assignedTo: ticket.assignedTo?.id || '',
                        createdBy: ticket.createdBy?.id || ''
                    })
                })
                .catch(err => {
                    console.error("Error in fetching data:", err)
                    setError("Failed to load ticket data")
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [id])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            if (!existingTicket) {
                throw new Error('No ticket data available')
            }

            const updateData = {
                id: existingTicket.id,
                title: formData.title,
                ticketComment: formData.ticketComment,
                status: {
                    id: getStatusId(formData.status),
                    description: formData.status
                },
                priority: {
                    id: getPriorityId(formData.priority),
                    description: formData.priority
                },
                createdBy: existingTicket.createdBy,
                assignedTo: existingTicket.assignedTo,
                createdDate: existingTicket.createdDate,
                modifiedDate: new Date().toISOString(),
                deleted: false
            }

            console.log('Sending update data:', updateData)

            await axios.put(`http://localhost:8080/tickets/update/${id}`, updateData)
            navigate('/ticketdashboard')
        } catch (error) {
            console.error('Error updating ticket:', error)
            setError('Failed to update ticket')
        }
    }

    
    const getStatusId = (status) => {
        const statusMap = {
            'OPEN': 1,
            'IN_PROGRESS': 2,
            'CLOSED': 3
        }
        return statusMap[status.toUpperCase()] || 1
    }

    
    const getPriorityId = (priority) => {
        const priorityMap = {
            'LOW': 1,
            'MEDIUM': 2,
            'HIGH': 3,
            'CRITICAL': 4
        }
        return priorityMap[priority.toUpperCase()] || 1
    }

    if (loading) {
        return <div>Loading ticket data...</div>
    }

    if (error) {
        return (
            <div>
                <div style={{color: 'red'}}>{error}</div>
                <button onClick={() => navigate('/ticketdashboard')}>Back to Dashboard</button>
            </div>
        )
    }

    if (!existingTicket) {
        return (
            <div>
                <div>Ticket not found</div>
                <button onClick={() => navigate('/ticketdashboard')}>Back to Dashboard</button>
            </div>
        )
    }

    return (
        <>
            <nav><h2>Update Ticket</h2></nav>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea
                        name="ticketComment"
                        value={formData.ticketComment}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="OPEN">Open</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="CLOSED">Closed</option>
                    </select>
                </div>
                <div>
                    <label>Priority:</label>
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Priority</option>
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                        <option value="CRITICAL">Critical</option>
                    </select>
                </div>
                <button type="submit">Update</button>
                <button type="button" onClick={() => navigate('/ticketdashboard')}>Cancel</button>
            </form>
        </>
    )
}

export default TicketForm
