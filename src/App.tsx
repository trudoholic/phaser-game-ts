import React from 'react'
import './App.css'

import phaserGame from './PhaserGame'
import HelloWorldScene from './scenes/HelloWorldScene'

const handleClick = () => {
    const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
    scene.createEmitter()
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <button className="App-button" onClick={handleClick}>
              Or click me
          </button>
      </header>
    </div>
  )
}

export default App
