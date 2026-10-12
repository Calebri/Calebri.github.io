import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Timeline from './Timeline.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*Navigation*/}
      <Navbar />

      {/*Routes*/}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/timeline" element={<Timeline />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
