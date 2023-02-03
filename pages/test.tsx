import React from 'react'
import Skeleton from '../components/ui/skeleton'
import{ SkeletonLine} from '../components/ui/skeleton'


const test = () => {
  return (
    <div style={{height:"100vh",width:"100vw",border:"solid 10px"}}><SkeletonLine height="26px" count={1} /></div>
  )
}

export default test