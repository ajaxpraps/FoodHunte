import React from 'react'

const Shimmer = () => {
  return (
    <div className='restaurant-list'>
     <div className='shimmer-card'></div>
    {
      Array(20).fill("").map((e)=>{
        return <div className='shimmer-card'></div>
       })
    }
    </div>
  )
}

export default Shimmer