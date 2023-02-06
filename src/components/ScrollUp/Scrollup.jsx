import React from 'react'
import './Scrollup.css'

const Scrollup = () => {
    window.addEventListener('scroll', function(){
        const scrollup = this.document.querySelector('.scrollup')
        //* cuando el desplazamiento es superior a la altura de la ventana gráfica 560, agregue la clase show-scroll a una etiqueta con la clase scroll-top
        if (this.scrollY >= 560) scrollup.classList.add('show-scroll');
        else scrollup.classList.remove('show-scroll')
    })
  return (
    <a href="#" className='scrollup'>
        <i className='bx bx-chevron-up scrollup__icon'></i>       
    </a>
  )
}

export default Scrollup