import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import Form from './Form'

function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/addexpense" element={<Form/>} />
        <Route path="/addexpense/:id" element={<Form/>} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
