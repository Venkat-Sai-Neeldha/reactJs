import React from 'react'
import { BrowserRouter, Routes as Routing, Route } from 'react-router-dom'
import App from './App'
import Purchase from './components/Purchase'

function Routes() {
  return (
    <BrowserRouter>
      <Routing>
        <Route path="/" element={<App/>} />
        <Route path="/purchase" element={<Purchase/>} />
      </Routing>
    </BrowserRouter>
  )
}

export default Routes