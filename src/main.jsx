import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BgChanger from './components/BgChanger.jsx'
import Counter from './components/Counter.jsx'
import Toggle from './components/Toggle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  < section className='w-screen h-screen flex items-center justify-center'>
    <React.StrictMode>
      {/* <BgChanger /> */}
      <Counter />
      {/* <Toggle /> */}
    </React.StrictMode>
  </section>
)