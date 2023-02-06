import React from 'react'
import TypeWriterEffect from 'typewriter-effect';


const Data = () => {

    
  return (
    <div className="home__data">
        <h1 className="home__title">Hello, my name is Alexander Munive</h1>
        <h3 className='home__subtitle'>Software Developer</h3>
        <h4 className='home__description'>I am a Full-Stack Web programmer with experience in: 
        <span className='home__specialty home__maquina-escribir'>
        <TypeWriterEffect
        options={{
          strings: ['React.js', 'Node.js'],
          autoStart: true,
          loop: true,
          delay: 'natural',
          loop: true
        }}
          />
        </span></h4>
        <a href="#contac" className='button button--flex'>Contact me<i className='bx bxs-navigation'></i></a>
    </div>
  )
}

export default Data