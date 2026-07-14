import Home from "../pages/Home"


const StudentList = () => {

    const arrobj=[{id:1,name:"Leema",course:"React"},
        {id:2,name:"Seema",course:"Python"},
        {id:3,name:"Dheema",course:".Net"},
        {id:4,name:"Reena",course:"Mern"},
        {id:5,name:"Oops",course:"Java"}
    ]

  return (
    <>
    <Home props={arrobj}/>
    </>
  )
}

export default StudentList