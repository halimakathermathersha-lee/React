

const App = () => {
  const arr = ["Home", "About", "Service", "Think", "How U", "Done"]
  const obj = { Name: "Halim", Role: "Student", Experiences: "Fresher" }
  const arrobj = [{ Name: "Halim", Role: "Student", Experiences: "Fresher" },
     { Name: "Lee", Role: "Student", Experiences: "Fresher" },
     { Name: "Oops", Role: "Student", Experiences: "Fresher" },
      { Name: "Lime", Role: "Student", Experiences: "Fresher" }]
  return (
    <>
      <div className="bg-gradient-to-br from-blue-300 via-pink-500 to-cyan-500 py-3 flex flex-col gap-3">
        <ul className="flex justify-between p-3">
          {arr.map((e, i) => (<li key={i + 1} className="text-l border rounded p-1 ">{e}</li>))}
        </ul>
        <div className="flex flex-col bg-gradient-to-br from-green-100 via-pink-500 to-purple-500  my-3 py-3 text-black  ">
          <h2 className="text-2xl">{obj.Name}</h2>
          <h2 className="text-l">{obj.Role}</h2>
          <h2 className="text-l">{obj.Experiences}</h2>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-500 to-red-200  flex justify-center items-center gap-10">
       {arrobj.map((e,i)=>(
        <div className="bg-gradient-to-br from-blue-700 via-white to-blue-200 text-black w-70 h-25 m-3 " key={i+1}>
          <p className="text-2xl fond-bold text-center">{e.Name}</p>
          <p>{e.Role}</p>
          <p>{e.Experiences}</p>
          </div>
       ))}
      </div>
    </>
  )
}

export default App