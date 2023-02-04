import React from 'react'
import './Data.css'
import TypeWriterEffect from 'react-typewriter-effect';

const Data = () => {

    
  return (
    <div className="home__data">
        <h1 className="home__title">Hello, my name is Alexander Munive</h1>
        <h3 className='home__subtitle'>Software Developer</h3>
        <h4 className='home__description'>I am a Full-Stack Web programmer with experience in: 
        <span className='home__specialty'>
        <TypeWriterEffect
        textStyle={{
            position: 'relative',
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: '3rem',
            marginLeft: '4px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
          startDelay={100}
          cursorColor="#3F3D56"
          multiText={[
            'React.js',
            'Node.js',
          
          ]}
          multiTextDelay={1000}
          typeSpeed={300}
          multiTextLoop/>
        </span></h4>
        <a href="#contac" className='button button--flex'>Contac <i className='bx bxs-navigation'></i></a>
    </div>
  )
}

export default Data