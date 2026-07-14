
const Home = (e) => {
  
  const {studentDetails,rdetails,props}=e

  console.log(e);
  
  return (
    <>
    <div className="flex justify-center items-center p-3">
        {studentDetails && (
          <div className="border-1 border-black/30 w-50 p-3 shadow-full">
          <h2>{studentDetails.StudentName}</h2>
        <h3>{studentDetails.studentAge}</h3>
        <h5>{studentDetails.studentCourse}</h5>
        {studentDetails.status?<p>Placed</p>:<p>None</p>}
        </div>
        )}
    </div>
    {rdetails &&(
      <div className="border-1 border-black/30 w-50 p-3 shadow-full ml-2">
        <h2>{rdetails.Name}</h2>
        <h3>{rdetails.Email}</h3>
        <h3>{rdetails.City}</h3>
        <h4>{rdetails.Experience}</h4>
    </div>
    )}

    {props && (
      <div className="flex justify-center items-center p-3">
      <div className="border-1 border-black/30 p-3 grid grid-cols-3 justify-center items-center gap-10 ">
         {props.map((e,i)=>(
          <div>
            <p className="bg-gradient-to-br from-cyan-300 to-blue-500 p-3 flex flex-col w-100 h-50"><span>{e.id}</span> <span>{e.name}</span> <span>{e.course}</span></p>
            </div>
         ))}
        </div>
        </div>
    )}


    </>
  )
}

export default Home