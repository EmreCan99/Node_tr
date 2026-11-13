import { useState, useEffect } from 'react'
import './App.css'
import './styles/tokens.css'

import Navbar from "./components/Navbar.jsx"
import Landing from "./pages/Landing.jsx"
import Experiment from "./pages/Experiment.jsx"



function App() {
  
  const API_URL = import.meta.env.VITE_API_URL;

  const [status, setStatus] = useState("Loading...")
  const [whichPage, setWhichPage] = useState("Landing")
  const [languageSelect, setLanguageSelect] = useState("english")

  // to use later in a fetch
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/check`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        console.log("The API Path is: ", API_URL)
      })
      .catch((error) => {
        setStatus("error")
        console.error("=> Api bağlantısı Yok ", error)
      })
  }, [])




  return (
    <div className='app-shell'>
      <Navbar setWhichPage={setWhichPage} setLanguageSelect={setLanguageSelect} languageSelect={languageSelect} />

      {  // Load the Landing page
      whichPage === "Landing" ? (
        <Landing status={status} languageSelect={languageSelect} /> 

        // Load the Experiment page
      ) : whichPage === "Experiment" ? (
        <Experiment languageSelect={languageSelect} />

      ) : null }
  
      
    </div>
  )
}

export default App
