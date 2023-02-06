import React from 'react'
import Skill_software from './Skill_software'
import './Skill.css'

const Skill = () => {
    
    return (
        <section className='skills section' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My technical level</span>
            <div className='skills_container container grid'>
                <h3 className='skills__tipe'>Skill software</h3>
                <Skill_software />                            
            </div>
        </section>
    )
}

export default Skill