import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {

  const [item, setitem] = useState({name: 'all'})
  const [projects, setprojects] = useState([])
  const [active, setactive] = useState(0)

  useEffect(()=>{
   if(item.name === 'all'){
    setprojects(projectsData)
   }else{
    const newProjects = projectsData.filter((project)=>{
      return project.category === item.name
    })
    setprojects(newProjects)
   }
  },[item])

  const handleClick = (e,index)=>{
    setitem({name: e.target.textContent})
  }

  return (
    <div>
      <div className="work__filters">
        {projectsNav?.map((item, index) => {
          return (
            <span onClick={(e)=>{handleClick(e, index)}} className='work__item' key={index}>{item.name}</span>
          )
        })}
      </div>
      <div className='work__container container grid'>
        {projects?.map((item)=>{
          return (
            <WorkItems item={item} key={item.id}/>
          )
        })}
        
      </div>
    </div>
  )
}
// console.log(projectsData[0].id)
export default Works