import React from 'react'
import './About.css'
import AboutImg from '../../assets/about.png'
import CV from '../../assets/cv.pdf'
import Info from './Info'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle'>Full Stack Web Developer</span>

        <div className='about__container container grid'>
            <img className='about__img' src={AboutImg} alt="" />
            <div className='about__data'>
                <Info/>
                <p className='about__description'>My name is Alexander Wilfredo Munive Choque, I am a Peruvian national. I am an Industrial Engineer specialized in full-stack web development. I create web pages with user interfaces. I have more than four years of experience in different projects, and many clients are happy with the projects I have completed.</p>
                <a download='' className='button button--flex' href={CV}>Download CV
                <i className='bx bx-file'></i></a>
            </div>
        </div>
    </section>
  )
}

export default About