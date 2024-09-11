import './App.css'
import { useState } from 'react'
import CookieBox from './components/CookieBox'

function App() {

  return (
    <div className={"App"}>

      <div style={{ color: "white" }}>
        Total 🍪: {0}
      </div>
      <div style={{ color: "white" }}>
        Total ⚜️: {0}
      </div>

      <div className='game'>
        <CookieBox />
        <CookieBox />
        <CookieBox />
        <CookieBox />
        <CookieBox />
      </div>

    </div>
  )
}

export default App