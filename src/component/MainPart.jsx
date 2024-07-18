import React from 'react'

const MainPart = (props) => {
  return (
    <div className='imgContainer'>

        <img src={props.data?.hdurl} alt={props.data.title || 'bg-img'} className='bgImage' />      

    </div>
  )
}

export default MainPart;