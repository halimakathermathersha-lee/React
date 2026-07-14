
import Studentpage from '../components/Studentpage'

import EmployeePage from '../components/EmployeePage'

import MoviePage from '../components/MoviePage'


const Home = (e) => {

  const { Sdetail } = e

  const obj = {
    Ename: "Mike",
    Email: "mike@gmail.com",
    Department: "Cs"

  }

  const arr=["Vijay","Ajith","Suriya"]


  return (
    <>
      <div>
        {Sdetail.Name}
        <p>{Sdetail.Age}</p>
        <p>{Sdetail.Course}</p>
      </div>
      <EmployeePage Eobj={obj} />
      <MoviePage Marr={arr}/>
    </>
  )
}

export default Home