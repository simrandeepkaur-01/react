import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  < section className='w-screen h-screen flex items-center justify-center'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </section>
)