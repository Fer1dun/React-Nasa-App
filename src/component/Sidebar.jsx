import React from 'react'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
        <div className='bgOverlay' onClick={props.handleToggleModel}></div>
        <div className='sidebarContents'>
        <h2>{props.data?.title}</h2>
        <div className='descriptionContainer'>
            <p className='descriptionTitle'>{props.data?.date}</p>
            <p>{props.data?.explanation}</p>
        </div>
          <button onClick={props.handleToggleModel}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
    </div>
  )
}

export default Sidebar