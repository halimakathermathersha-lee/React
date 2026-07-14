import React from 'react'

const MoviePage = ({Marr}) => {
  console.log(Marr);
  
  return (
    <div>
      {Marr.map((e,i)=>(
        <p key={i+1}>{e}</p>
      ))}
    </div>
  )
}

export default MoviePage