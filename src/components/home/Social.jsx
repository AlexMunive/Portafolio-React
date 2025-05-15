import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        <a href="https://www.instagram.com/alexmunive_13/" className='home__social-icon' target='_blank'>
        <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=933528790&text=Que tal Alexander, tenga un cordial saludos 🖐." className='home__social-icon' target='_blank'>
        <i className='bx bxl-whatsapp'></i>
        </a>
        <a href="https://www.linkedin.com/in/alexander-munive/" className='home__social-icon' target='_blank'>
        <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/AlexMunive" className='home__social-icon' target='_blank'>
        <i className='bx bxl-github'></i>
        </a>
    </div>
  )
}

export default Social