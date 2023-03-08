import React from 'react'
import TypeWriterEffect from 'typewriter-effect';


const Data = () => {

    
  return (
    <div className="home__data">
        <h1 className="home__title">Hello, my name is Alexander Munive</h1>
        <h3 className='home__subtitle'>Software Developer</h3>
        <h4 className='home__description'>I am a full stack web developer and application developer for Android and iOS, with experience in: 
        <span className='home__specialty home__maquina-escribir'>
        <TypeWriterEffect
        options={{
          strings: ['React.js', 'Node.js', 'React.native','.Net Core', 'C#'],
          autoStart: true,
          loop: true,
          delay: 'natural',
        }}
          />
        </span></h4>
        <a href="#contact" className='button button--flex'>Contact me<i className='bx bxs-navigation'></i></a>
    </div>
  )
}

export default Data