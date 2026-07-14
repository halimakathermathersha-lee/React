import React from 'react'

const EmployeePage = ({Eobj}) => {


  return (
   <>
   <div>
    <p>{Eobj.Ename}</p>
    <p>{Eobj.Email}</p>
    <p>{Eobj.Department}</p>
   </div>
   </>
  )
}

export default EmployeePage