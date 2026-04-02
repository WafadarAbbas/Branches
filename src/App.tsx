import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🚀 We are working on Git branches</h1>
        <p>This is a feature branch development example</p>

        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
    </>
  )
}

export default App