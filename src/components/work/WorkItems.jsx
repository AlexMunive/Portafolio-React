import React from 'react'

const WorkItems = ({ item }) => {
 

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <span>{item.technology}</span>
      <div className='work__sub-container' >
        <a href={item.href} className='work__button' target="_blank">
          Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
        <a href={item.github} className='work__button-github' target="_blank">
          <i className='bx bxl-github'></i>
        </a>
      </div>
    </div>
  )
}

export default WorkItems