import React from 'react'
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Particle from './components/particles/Particle'
import Services from './components/services/Services'
import Skill from './components/skill/Skill'

function App() {
  

  return (
    <div className="App">
      
     <Header/>
     
     <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Services/>
      {/* <Particle/> */}
      
     </main>
    </div>
  )
}

export default App
