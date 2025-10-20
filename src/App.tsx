import React from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<div>Login</div>}/>
        <Route path="/login" element={<div>Login</div>}/>
        <Route path="/login" element={<div>Login</div>}/>

        <Route path='*' element={<div>404 Page not found<Link to="/">Go to Home</Link></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
