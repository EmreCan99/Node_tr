import { useState, useEffect } from 'react'
import './App.css'

import Navbar from "./components/Navbar.jsx"
import Landing from "./pages/Landing.jsx"
import Experiment from "./pages/Experiment.jsx"



function App() {
  
  const API_URL = import.meta.env.VITE_API_URL;

  const [status, setStatus] = useState("Loading...")
  const [whichPage, setWhichPage] = useState("Landing")



  useEffect(() => {
    fetch(`${API_URL}/api/check`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        console.log("The API Path is: ", API_URL)
      })
      .catch((error) => {
        setStatus("not reachable")
        console.error("=> Api bağlantısı Yok ", error)
      })
  }, [])




  return (
    <>
      <Navbar setWhichPage={setWhichPage} />

      {  // Load the Landing page
      whichPage === "Landing" ? (
        <Landing status={status}/> 

        // Load the Experiment page
      ) : whichPage === "Experiment" ? (
        <Experiment />

      ) : null }
      

      
      
    </>
  )
}

export default App
