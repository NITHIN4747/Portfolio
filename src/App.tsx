import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import components (will be created in next steps)
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Achievements />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

