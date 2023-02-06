import React, { useState } from 'react'
import './Services.css'

const Services = () => {

    const [toggleState, settoggleState] = useState(0)

    const toggleTab= (index)=>{
        settoggleState(index)
    }




    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What i offer</span>
            <div className="services__container container grid">
                <div className='services__content'>
                    <div>
                        <i className='bx bxs-folder-minus services__icon'></i>
                        <h3 className='services__title'>Web Designer</h3>
                    </div>
                    <span className='services__button' onClick={()=>toggleTab(1)}>View More
                        <i className='bx bx-right-arrow-alt services__button-icon'></i>
                    </span>

                    <div className={toggleState===1 ? 'services__modal active-modal': 'services__modal'}>
                        <div className='services__modal-content'>
                            <i onClick={()=>toggleTab(0)} className='bx bxs-x-circle services__modal-close'></i>
                            <h3 className='services__modal-title'>Web Designer</h3>
                            <p className='services__modal-description'>Service with more than 1 year of project experience. Provide quality work with good practices.</p>
                            <ul className='services__modal-services grid'>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I develop the user interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Web page development.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div className='services__content'>
                    <div>
                        <i className='bx bx-laptop services__icon'></i>
                        <h3 className='services__title'>Full stack developer</h3>
                    </div>
                    <span className='services__button' onClick={()=>toggleTab(2)}>View More
                        <i className='bx bx-right-arrow-alt services__button-icon'></i>
                    </span>

                    <div className={toggleState===2 ? 'services__modal active-modal': 'services__modal'}>
                        <div className='services__modal-content'>
                            <i onClick={()=>toggleTab(0)} className='bx bxs-x-circle services__modal-close'></i>
                            <h3 className='services__modal-title'>Full stack developer</h3>
                            <p className='services__modal-description'>Service with more than 1 year of project experience. Provide quality work with good practices.</p>
                            <ul className='services__modal-services grid'>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Maintain and optimize websites.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Develop frontend and backend projects.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Ensure application functionality.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Develop interface website architecture.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Ensure the speed and stability of the website.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div className='services__content'>
                    <div>
                        <i className='bx bxs-palette services__icon'></i>

                        <h3 className='services__title'>Visual designer</h3>
                    </div>
                    <span className='services__button' onClick={()=>toggleTab(3)}>View More
                        <i className='bx bx-right-arrow-alt services__button-icon'></i>
                    </span>

                    <div className={toggleState===3 ? 'services__modal active-modal': 'services__modal'}>
                        <div className='services__modal-content'>
                            <i onClick={()=>toggleTab(0)} className='bx bxs-x-circle services__modal-close'></i>
                            <h3 className='services__modal-title'>Visual designer</h3>
                            <p className='services__modal-description'>Service with more than 1 year of project experience. Provide quality work with good practices.</p>
                            <ul className='services__modal-services grid'>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Architecture design in interaction and information.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Content structure, needs and functions.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Ability to communicate ideas visually.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Creative designs with customer needs.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='bx bx-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>User needs, site goals.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>


        </section>
    )
}

export default Services