import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function AddTicket() {
    const navigate = useNavigate()
    const { source, userId } = useParams()
    const [users, setUsers] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [ticketData, setTicketData] = useState({
        title: '',
        priority: '', 
        status: 'OPEN',
        createdBy: '', 
        assignedTo: '', 
        ticketComment: ''
    })

    useEffect(() => {
      
        if (userId && !ticketData.createdBy) {
            setTicketData(prev => ({
                ...prev,
                createdBy: userId
            }))
        }

        axios.get('http://localhost:8080/users')
            .then(response => {
                console.log('Users fetched:', response.data)
                setUsers(response.data)
            })
            .catch(error => {
                console.error('Error fetching users:', error)
            })
    }, [userId])

    const handleChange = (e) => {
        const { name, value } = e.target
        
        if (name === 'createdBy' || name === 'assignedTo') {
            const selectedUser = users.find(user => user.id === parseInt(value))
            setTicketData(prev => ({
                ...prev,
                [name]: value 
            }))
        } else {
            setTicketData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (isSubmitting) {
            console.log('Submission already in progress')
            return
        }
        
        setIsSubmitting(true)
        console.log('Starting ticket creation...')
        
        try {
          
            if (!ticketData.title || !ticketData.priority || !ticketData.createdBy || !ticketData.assignedTo) {
                throw new Error('Please fill in all required fields')
            }

            const ticketPayload = {
                title: ticketData.title,
                priority: { 
                    id: parseInt(ticketData.priority),
                    description: getPriorityDescription(ticketData.priority)
                },
                status: { 
                    id: 1,
                    description: 'OPEN'
                },
                createdBy: {
                    id: parseInt(ticketData.createdBy)
                },
                assignedTo: {
                    id: parseInt(ticketData.assignedTo)
                },
                ticketComment: ticketData.ticketComment || '',
                createdDate: new Date().toISOString(),
                isDeleted: false
            }

            console.log('Sending ticket payload:', ticketPayload)

            const response = await axios.post('http://localhost:8080/tickets/addTicket', ticketPayload)
            console.log('Ticket created successfully:', response.data)
            
            alert('Ticket added successfully!')
            
            
            if (source === 'admin') {
                navigate('/ticketdashboard', { replace: true })
            } else {
                navigate(`/userdashboard/${userId}`, { replace: true })
            }
        } catch (error) {
            console.error('Error creating ticket:', error)
            alert('Failed to add ticket: ' + (error.response?.data?.message || error.message || 'Unknown error'))
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCancel = () => {
        if (source === 'admin') {
            navigate('/ticketdashboard', { replace: true })
        } else {
            navigate(`/userdashboard/${userId}`, { replace: true })
        }
    }

    
    const getPriorityDescription = (priorityId) => {
        switch (parseInt(priorityId)) {
            case 1:
                return 'LOW'
            case 2:
                return 'MEDIUM'
            case 3:
                return 'HIGH'
            case 4:
                return 'CRITICAL'
            default:
                return 'LOW'
        }
    }

    if (users.length === 0) {
        return <div>Loading users...</div>
    }

    return (
        <div className="add-ticket-container">
            <nav><h2>Create New Ticket</h2></nav>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={ticketData.title}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Priority:</label>
                    <select
                        name="priority"
                        value={ticketData.priority}
                        onChange={handleChange}
                        required
                        className="form-control"
                    >
                        <option value="">Select Priority</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                        <option value="4">Critical</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Created By:</label>
                    <select
                        name="createdBy"
                        value={ticketData.createdBy}
                        onChange={handleChange}
                        required
                        className="form-control"
                    >
                        <option value="">Select Creator</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.name} ({user.email})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Assign To:</label>
                    <select
                        name="assignedTo"
                        value={ticketData.assignedTo}
                        onChange={handleChange}
                        required
                        className="form-control"
                    >
                        <option value="">Select Assignee</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.name} ({user.email})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Comment (Optional):</label>
                    <textarea
                        name="ticketComment"
                        value={ticketData.ticketComment}
                        onChange={handleChange}
                        className="form-control"
                        rows="3"
                    />
                </div>

                <div className="button-group">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating...' : 'Create Ticket'}
                    </button>
                    <button 
                        type="button" 
                        onClick={handleCancel}
                        className="btn btn-secondary"
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTicket
