import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <ToastContainer/>
  </div>
)
