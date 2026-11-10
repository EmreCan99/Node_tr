import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const API_URL = import.meta.env.VITE_API_URL;

  const [status, setStatus] = useState("Loading...")



  useEffect(() => {
    fetch(`${API_URL}/api/check`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        console.log("The API Path is: ", API_URL)
      })
      .catch((error) => {
        setStatus("not reachable")
        console.error("it doesn't work: ", error)
      })
  }, [])





  return (
    <>

      <main className='page'>
        <section className='card'>
        <h1>This is the first title</h1>
        <p>The backend is {status}</p>


        <form>
          <input className="input-box" type="text" name="data" />

        </form>



        </section>
      </main>
      
    </>
  )
}

export default App
