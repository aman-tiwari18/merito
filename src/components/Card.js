import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='bg-cover bg-no-repeat bg-brand1 h-96 ' style={{ backgroundImage: props.image }}></div>
    </div>
  )
}

export default Card