import React from 'react'

const Footer = (props) => {

  

  return (
    <footer>
        <div className='bgGradient'></div>
        <div>
            <h2>{props.data?.title}</h2>
            <h1>React Projects</h1>
        </div>
        <button onClick={props.handleToggleModel}>
        <i className="fa fa-info-circle" aria-hidden="true"></i>
        </button>
    </footer>
  )
}

export default Footer