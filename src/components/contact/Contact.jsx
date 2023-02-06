import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r6vz2s6', 'template_iena2cv', form.current, 'mI33ruFE_0IYOSAsV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <section className='contact section' id='contact'>
         <h2 className='section__title'>Get in touch</h2>
        <span className='section__subtitle'>Contact Me</span>
        <div className='contact__container container grid'>
            <div className='contact__content'>
                <h3 className='contact__title'>Talk to me</h3>
                <div className='contact__info'>

                    <div className='contact__card'>
                     <i className='bx bx-mail-send contact__card-icon'></i>
                     <h3 className='contact__card-title'>Email</h3>
                     <span className='contact__card-data'>alexmunive.0213@gmail.com</span>
                     <a href="alexmunive.0213@gmail.com" className='contact__button'>Write me 
                     <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>

                    <div className='contact__card'>
                    <i className='bx bxl-whatsapp contact__card-icon'></i>
                     <h3 className='contact__card-title'>whatsapp</h3>
                     <span className='contact__card-data'>+51 936658544</span>
                     <a href="https://api.whatsapp.com/send?phone=936658544&text=Que tal Alexander, tenga un cordial saludos 🖐." target="_blank" className='contact__button'>Write me 
                     <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>

                    <div className='contact__card'>
                    <i className='bx bx-location-plus contact__card-icon' ></i>
                     <h3 className='contact__card-title'>Location</h3>
                     <span className='contact__card-data'>Lima - Perú</span>
                     <a href="https://goo.gl/maps/hCRAydAtRmsiGK6UA" target="_blank" className='contact__button'>Write me 
                     <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>

                </div>
            </div>
            <div className='contact__content'>
                <h3 className='contact__title'>Write me your project</h3>
                <form className='contact__form' ref={form} onSubmit={sendEmail}>

                    <div  className='contact__form-div'>
                        <label className='contact__form-tag'>Name</label>
                        <input type="text"  name='name' className='contact__form-input' placeholder='Insert your name'/>
                    </div>

                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Email</label>
                        <input type="email"  name='email' className='contact__form-input' placeholder='Insert your email'/>
                    </div>

                    <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag'>Project</label>
                        <textarea type="text"  name='project' cols='30' rows='10'
                        className='contact__form-input' placeholder='Tell me your big idea'/>
                    </div>
                    <button className='button button--flex'>Send Message<i className='bx bxs-navigation'></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact