import React from 'react'

const Skeleton = (props:any) => {
  return (
    <div className='skeleton'></div>
  )
}

export const SkeletonLine = () => {
  return (
    <div className='skeletonLine'></div>
  )
}


export default Skeleton


// style={{height:`${props.height}`}}