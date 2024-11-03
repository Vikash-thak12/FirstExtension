import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const hello = async () => {
    const [tab] = await chrome.tabs.query({ active: true})
    chrome.scripting.executeScript({
      target: { tabId: tab.id!},
      func: () => {
        alert("hello from my first Extension..")
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
        <button onClick={() => hello()}>
          Click Here
        </button>
      </div>
    </>
  )
}

export default App
