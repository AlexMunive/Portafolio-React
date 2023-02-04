import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <i className='bx bx-award'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>1 + Year </span>
        </div>
        <div className='about__box'>
        <i className='bx bx-briefcase-alt'></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>25 + Projects</span>
        </div>
        <div className='about__box'>
        <i className='bx bxs-graduation'></i>
            <h3 className='about__title'>Certificate</h3>
            <span className='about__subtitle'>7 + diploma</span>
        </div>
    </div>
  )
}

export default Info