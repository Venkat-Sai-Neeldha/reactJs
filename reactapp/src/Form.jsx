import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './App.css'
import './form.css'

function Form() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ category: '',  amount: '',  date: '',  paymentMethod: '' })

  useEffect(() => {
    if (id) {
      const expenses = JSON.parse(localStorage.getItem('expenses')) || []
      const expense = expenses.find(exp => exp.id === parseInt(id))
      if (expense) {
        setFormData(expense)
      }
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const expenses = JSON.parse(localStorage.getItem('expenses')) || []

    const expenseData = {
      ...formData,
      amount: parseFloat(formData.amount)
    }

    let updatedExpenses
    if (id) {
      updatedExpenses = expenses.map(exp =>
        exp.id === parseInt(id) ? { ...expenseData, id: parseInt(id) } : exp
      )
    } else {
      const newId = expenses.length > 0 ? Math.max(...expenses.map(exp => exp.id)) + 1 : 1
      const newExpense = { ...expenseData, id: newId }
      updatedExpenses = [...expenses, newExpense]
    }

    localStorage.setItem('expenses', JSON.stringify(updatedExpenses))
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <div>
      <nav>
        <h2><i>Expense Tracker</i></h2>
        <h4>{id ? 'Edit Expense' : 'Add New Expense'}</h4>
        <ul>
          <li><Link to="/">Back to Dashboard</Link></li>
        </ul>
      </nav>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category" name="category" value={formData.category} onChange={handleChange} required
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Bills">Bills</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount (rupees):</label>
            <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input  type="date" id="date" name="date" value={formData.date} onChange={handleChange}required
            />
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod" name="paymentMethod" value={formData.paymentMethod}  onChange={handleChange} required >

              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit">{id ? 'Update Expense' : 'Add Expense'}</button>
            <button type="button" onClick={() => navigate('/')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form
