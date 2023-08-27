import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero'
import Navbar from './Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
  </React.StrictMode>
)
