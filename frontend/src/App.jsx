import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import AdminPanel from './components/AdminPanel'
import { getProfile } from './services/api'

function App() {
  const [profile, setProfile] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('authToken') || '')

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile()
        setProfile(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadProfile()
  }, [])

  const handleLogin = (newToken) => {
    localStorage.setItem('authToken', newToken)
    setToken(newToken)
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setToken('')
  }

  return (
    <div className="app">
      <Nav adminMode={Boolean(token)} />
      <main>
        <Hero profile={profile} />
        <Services />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <AdminPanel token={token} onLogin={handleLogin} onLogout={handleLogout} />
      </main>
    </div>
  )
}

export default App
