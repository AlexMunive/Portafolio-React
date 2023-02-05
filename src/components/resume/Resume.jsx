import React, { useState } from 'react'
import './Resume.css'

const Resume = () => {

    const [toggleState, settoggleState] = useState(1)

    const toggleTab= (index)=>{
        settoggleState(index)
    }

   

    return (
        <section className='qualification section'>
            <h2 className='section__title'>Resume</h2>
            <span className='section__subtitle'>My professional experience</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex': 'qualification__button button--flex'}
                    onClick={()=>toggleTab(1)}
                    >
                        <i className='bx bxs-graduation qualification__icon'></i>Education
                    </div>
                    <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex': 'qualification__button button--flex'}
                    onClick={()=>toggleTab(2)}
                    >
                        <i className='bx bxs-briefcase-alt-2 qualification__icon'></i>Experience
                    </div>
                </div>
                <div className='qualification__sections'>
                    <div className={toggleState === 1 ? 'qualification__content qualification__content-active': 'qualification__content'}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Industrial Engineering</h3>
                                <span className="qualification__subtitle">North Private University</span>
                                <div className='qualification__calender'>
                                    <i className='bx bxs-calendar'></i>2016 - 2020
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full-Stack Web Development</h3>
                                <span className="qualification__subtitle">Academlo</span>
                                <div className='qualification__calender'>
                                    <i className='bx bxs-calendar'></i>2022
                                </div>
                            </div>
                           
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master in JavaScript: Learn JS, jQuery, NodeJS</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className='qualification__calender'>
                                    <i className='bx bxs-calendar'></i>2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Creation of mobile applications iOS and Android</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className='qualification__calender'>
                                    <i className='bx bxs-calendar'></i>2023
                                </div>
                            </div>
                           
                        </div>

                    </div>

                    <div className={toggleState === 2 ? 'qualification__content qualification__content-active': 'qualification__content'}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer Full-Stack</h3>
                                <span className="qualification__subtitle">Independent professional</span>
                                <div className='qualification__calender'>
                                    <i className='bx bxs-calendar'></i>2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Freelancer</h3>
                                <span className="qualification__subtitle">Independent professional</span>
                                <div className='qualification__calender'>
                                    <i className='bx bxs-calendar'></i>2022
                                </div>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume