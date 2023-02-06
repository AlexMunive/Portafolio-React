import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    /*=============== change background header ===============*/
    window.addEventListener('scroll', function () {
        const header = this.document.querySelector('.header')
        //* cuando el desplazamiento es superior a la altura de la ventana gráfica 200, agregue la clase scroll-header a una etiqueta con la clase header
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')
    })

    /*=============== toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setactiveNav] = useState("#home")



    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className='nav__logo'>Munive</a>

                <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={()=>setactiveNav("#home")} className={activeNav ==="#home" ? 'nav__link active-link' : 'nav__link'}>
                                <i className="bx bxs-home nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={()=>setactiveNav("#about")} className={activeNav ==="#about" ? 'nav__link active-link' : 'nav__link'}>
                                <i className="bx bx-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={()=>setactiveNav("#skills")} className={activeNav ==="#skills" ? 'nav__link active-link' : 'nav__link'}>
                                <i className="bx bx-file nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" onClick={()=>setactiveNav("#services")} className={activeNav ==="#services" ? 'nav__link active-link' : 'nav__link'}>
                                <i className="bx bx-briefcase nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={()=>setactiveNav("#portfolio")} className={activeNav ==="#portfolio" ? 'nav__link active-link' : 'nav__link'}>
                                <i className="bx bx-image-alt nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={()=>setactiveNav("#contact")} className={activeNav ==="#contact" ? 'nav__link active-link' : 'nav__link'}>
                                <i className="bx bx-chat nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="bx bx-x-circle nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header