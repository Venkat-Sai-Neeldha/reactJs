import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Dashboard() {
    const [search, setSearch] = useState('')
    const [expenses, setExpenses] = useState([])
    const [categoryFilter, setCategoryFilter] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        loadExpenses()
    }, [])

    const loadExpenses = () => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || []
        setExpenses(savedExpenses)
    }
    
    const handleDelete = (id) => {
        const updatedExpenses = expenses.filter(exp => exp.id !== id)
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses))
        setExpenses(updatedExpenses)
    }
    
    const handleEdit = (id) => {
        navigate(`/addexpense/${id}`)
    }

    const filteredExpenses = expenses.filter((exp) => {
        // Search only by category
        const searchTerm = search.toLowerCase()
        const matchesSearch = !search || exp.category.toLowerCase().includes(searchTerm)
        
        const matchesCategory = !categoryFilter || exp.category === categoryFilter
        
        return matchesSearch && matchesCategory
    })
    
    const totalAmount = filteredExpenses.reduce((sum, exp) => sum + Number(exp.amount), 0)

    return (
        <>
            <nav>
                <h2><i>Expense Tracker</i></h2>
                <h4>Dashboard</h4>
                <ul>
                    <li><Link to="/addexpense">Add New Expense</Link></li>
                </ul>
            </nav>
            <div className="search">
                <label htmlFor="ser"><i>search by category: </i></label>
                <input  type="text"   placeholder="Search category"  value={search}   id='ser'   onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Bills">Bills</option>
            </select>
            <h3>Total Expenses: {totalAmount} rupees</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount (Rupees)</th>
                        <th>Payment Method</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenses.map(exp => (
                        <tr key={exp.id}>
                            <td>{exp.id}</td>
                            <td>{exp.date}</td>
                            <td>{exp.category}</td>
                            <td>{Number(exp.amount)}.rupees</td>
                            <td>{exp.paymentMethod}</td>
                            <td>
                                <button onClick={() => handleEdit(exp.id)}>Edit</button>
                                <button onClick={() => handleDelete(exp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Dashboard
