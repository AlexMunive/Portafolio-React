import React from 'react'
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
// import Particle from './components/particles/Particle'
import Resume from './components/resume/Resume'
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
      {/* <Particle/> */}
      
     </main>
    </div>
  )
}

export default App
