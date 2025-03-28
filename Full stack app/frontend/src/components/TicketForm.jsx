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

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/tickets/getById/${id}`)
                .then(response => {
                    // Handle array response
                    const ticket = Array.isArray(response.data) ? response.data[0] : response.data
                    console.log('Fetched ticket:', ticket)
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
                    console.log("error in fetching data", err)
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
            if (!existingTicket) return

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
            console.log('Error updating ticket:', error)
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

    if (!existingTicket) {
        return <div>Loading...</div>
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
