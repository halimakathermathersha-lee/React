import React from 'react'
import Home from '../pages/Home'

const EmployeeCard = () => {
    const obj={Name:"Rahul",Email:"rahul@gmail.com",City:"Chennai",Experience:3}
  return (
    <Home rdetails={obj} />
  )
}

export default EmployeeCard