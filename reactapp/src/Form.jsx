import React, { useState, useEffect } from "react";
import App from "./App";
import './two.css'

function Form({ editingUser, savedUser }) {
  console.log("editingUser", editingUser)
  console.log("savedUser", editingUser)

  const [formData, setFormData] = useState(
    editingUser ? editingUser : {
      id: "",
      name: "",
      phone: "",
      company: { name: "" },
      address: { city: "" },
    }
  );

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "companyName") {
      setFormData({ ...formData, company: { name: value } });
    } else if (name === "city") {
      setFormData({ ...formData, address: { city: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    savedUser(formData);
  };

  return (
    <div >
      <h1>{editingUser ? "Edit User" : "Add New User"}</h1>
      <form id="form">
        <div>
          <label>Id:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            disabled={!!editingUser}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.company.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit} >Save</button>
      </form>
    </div>
  );
};

export default Form;