import React from 'react'
import { projectData } from './Data1'
import { projectNav } from './Data1'
import WorksItems from './WorksItems'
import { useState } from 'react'
import { useEffect } from 'react'

const Works = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [project, setProject] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'all') {
      setProject(projectData)
    } else {
      const newProject = projectData.filter((project) => {
        return project.category === item.name
      })
      setProject(newProject)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent })
  }
  return (
    <div>
      <div className="work-filter">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index)
              }}
              className="work-item"
              key={index}
            >
              {item.name}
            </span>
          )
        })}
      </div>
      <div className="work-container ">
        <div className="row work-row">
          {project.map((item) => {
            return <WorksItems item={item} key={item.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Works
