import React from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
// import Particle from './components/particles/Particle'
import Resume from './components/resume/Resume'
import Scrollup from './components/ScrollUp/Scrollup'
import Services from './components/services/Services'
import Skill from './components/skill/Skill'
import Work from './components/work/Work'

function App() {
  

  return (
    <div className="App">
      
     <Header/>
     
     <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Services/>
      <Resume/>
      <Work/>
      <Contact/>    
      {/* <Particle/> */}      
     </main>
     <Footer/>
     <Scrollup/>
    </div>
  )
}

export default App
