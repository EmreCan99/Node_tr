import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const API_URL = "http://127.0.0.1:8000"

  const [status, setStatus] = useState("Loading...")



  useEffect(() => {
    fetch(`${API_URL}/api/check`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        console.log("the backend is: ", data.status)
      })
      .catch((error) => {
        setStatus("not reachable")
        console.error("it doesn't work: ", error)
      })
  }, [])





  return (
    <>
      <h1>This is the first title</h1>
      <p>The backend is {status}</p>
    </>
  )
}

export default App
