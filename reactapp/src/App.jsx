import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Form from './Form'
import Router from './Router'


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [openForm, setOpenForm] = useState(false);
  const [search, setSearch] = useState('');
  const [FilteredUsers, setFilteredUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data)
      setLoading(false)
      setFilteredUsers(res.data)
    }).catch((error) => {
      console.error("Error fetching users");
    })
  }
    , []);


  // function fun1(e) {
  //   navigate("/new");
  //   e.target.blur();
  // }


  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id))
    setFilteredUsers(FilteredUsers.filter((user) => user.id !== id));

  }

  function searchfun(e) {
    const searchQuery = e.target.value;
    setSearch(searchQuery);

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered)
  }



  function handleEdit(user) {
    console.log("<<<<<<<<<>>>>>>>>", user)
    setEditingUser(user);
    setOpenForm(true);
    // navigate("/new");
  };


  const saveUser = (user) => {
    if (user.id) {
      const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      setOpenForm(false);
    } else {
      setOpenForm(false);
      const newUser = { ...user, id: users.length + 1 };
      setUsers([...users, newUser]);
      setFilteredUsers([...FilteredUsers, newUser]);
    }
  }

  const fun1 = () => {
    setOpenForm(true);
    // navigate("/new");
  }

  return (
    <>
      {!openForm &&
        <>

          <nav>
            <div className='abc'>Quest k2 Technologies</div>
            <div className='pqr'>
              <button onClick={fun1}>Add new user</button>
            </div>
          </nav>
          <div id='one'>USERS</div>
          <div id="search">
            <label htmlFor="a">search by name</label>
            <input type="text" id='a' placeholder='enter name' value={search} onChange={searchfun} />

          </div>
          <div id='table'>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <table border={1}>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Company Name</th>
                  <th>City</th>
                  <th colSpan={2}>Actions</th>
                </tr>
                {FilteredUsers.map((obj) => (
                  <tr key={obj.id}>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.phone}</td>
                    <td>{obj.company.name}</td>
                    <td>{obj.address.city}</td>

                    <td><button onClick={() => handleEdit(obj)}>Edit</button></td>
                    <td><button onClick={() => deleteUser(obj.id)}>Delete</button></td>
                  </tr>
                ))}
              </table>
            )
            }
          </div>
        </>}

      {openForm &&
        <Form savedUser={saveUser} editingUser={editingUser} />}
    </>

  )
}


export default App
