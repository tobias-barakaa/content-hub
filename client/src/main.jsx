import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

fetch('/http://localhost:4000')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
