import React from 'react'

const WorksItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="" className="work-image" srcset="" />
      <h3 className="work-title">{item.title}</h3>
      <a href="" className="work-button">
        demo <i class="uil uil-arrow-right work-button-icon"></i>
      </a>
    </div>
  )
}

export default WorksItems
