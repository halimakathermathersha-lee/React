import React from 'react'
import Home from '../pages/Home'

const Studentpage = () => {
  const stuDetails={Name:"Lee",Age:23,Course:"React"}
  return (
    <>
    <Home Sdetail={stuDetails}/>
    </>
  )
}

export default Studentpage