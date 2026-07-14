import Home from "../pages/Home"


const StudentsCard = () => {

    const StudentName="Sudhan"
    const studentAge=25
    const studentCourse="React"
    const status=true



    return (
    <>
    <Home studentDetails={{StudentName,studentAge,studentCourse,status}}/>
    </>
  )
}

export default StudentsCard