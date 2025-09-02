import { useState } from 'react'
import Unity from './components/unity'
import './App.css'
import UnityPlayer from './components/unity'

function App() {
  const [count, setCount] = useState(0)
  //let [animName, changeAnim] = changeState(animName)

  return (
    <>
    <UnityPlayer />
      <h1>Vite + React</h1>
      <div className="card">

        <button onClick={() => {
          if (window.switchAnimation) {
            window.switchAnimation("Slime", "StartAnimations", "slimeMelt");
          } else {
            console.warn("Unity is nog niet geladen");
          }
        }}>
          Start Animatie
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
