import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("")
  const hello = async () => {
    const [tab] = await chrome.tabs.query({ active: true})
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id!},
      args: [color],
      func: (color) => {
        document.body.style.backgroundColor = color;
      }
    })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input type="color" value={color} onChange={(e) => setColor(e.currentTarget.value)} />
        <button onClick={() => hello()}>
          Click Here
        </button>
      </div>
    </>
  )
}

export default App
