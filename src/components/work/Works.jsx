import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {

  const [item, setitem] = useState({name: 'all'})
  const [projects, setprojects] = useState([])
  const [active, setactive] = useState(0)
  const [page, setPage] = useState(0) 

  useEffect(()=>{
   if(item.name === 'all'){
    setprojects(projectsData)
   }else{
    const newProjects = projectsData.filter((project)=>{
      return project.category.toLowerCase() === item.name
    })
    setprojects(newProjects)
   }
  },[item])

  const handleClick = (e,index)=>{
    setitem({name: e.target.textContent.toLowerCase()})
    setactive(index)
    setPage(0)
  }


   // paginación

   const maxItem = 6;
   const totalItems = projects?.length;
   const maxPage = Math.ceil(totalItems / maxItem);
 
   //creamos dos funciones para aumentar y disminuir las paginas, no los items
   const onNextPage = () => {
     setPage((page + 1) % maxPage);
   };
   const onPrevPage = () => {
     setPage((page - 1) % maxPage);
   };
 

  return (
    <div>
      <div className="work__filters">
        {projectsNav?.map((item, index) => {
          return (
            <span onClick={(e)=>{handleClick(e, index)}} className={`${active===index ? 'active-work': 'work__item'}`} key={index}>{item.name}</span>
          )
        })}
      </div>
      <div className='work__container container grid'>
        {projects?.slice(page * maxItem, maxItem * (page + 1)).map((item)=>{
          return (
            <WorkItems item={item} key={item.id}/>
          )
        })}        
      </div>
      <div className='work__pagination container grid'>
      <button
          className='work__button-pagination'
          onClick={onPrevPage}
          disabled={
            // si page viene en 0 lo desactivamos
            !page
          }
        >
          Prev
        </button>
        <p className='work__pagination-detail'>
          {page + 1} of {maxPage}
        </p>
        <button
          className='work__button-pagination'
          onClick={onNextPage}
          disabled={
            // si page es igual al ultimo se desactiva el boton
            page === Math.ceil(totalItems / maxItem) - 1
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}
console.log(projectsData)
export default Works