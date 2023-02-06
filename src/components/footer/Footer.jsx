import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer__container container'>
        <h1 className='footer__title'>Alexander Wilfredo Munive Choque</h1>
        <div className='footer__social'>
        <a href="https://www.instagram.com/alexmunive_13/" className='footer__social-link' target='_blank'>
        <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=936658544&text=Que tal Alexander, tenga un cordial saludos 🖐." className='footer__social-link' target='_blank'>
        <i className='bx bxl-whatsapp'></i>
        </a>
        <a href="https://www.linkedin.com/in/alexander-munive/" className='footer__social-link' target='_blank'>
        <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/AlexMunive" className='footer__social-link' target='_blank'>
        <i className='bx bxl-github'></i>
        </a>
        </div>
        <span className='footer__copy'>&#169; All rigths reserved</span>
    </div>
   </footer>
  )
}

export default Footer