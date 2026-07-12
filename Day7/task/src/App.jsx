

const App = () => {
  const arr = ["Home", "About", "Service", "Think", "How U", "Done"]
  const obj = { Name: "Halim", Role: "Student", Experiences: "Fresher" }
  const arrobj = [{ Name: "Halim", Role: "Student", Experiences: "Fresher" },
  { Name: "Lee", Role: "Student", Experiences: "Fresher" },
  { Name: "Oops", Role: "Student", Experiences: "Fresher" },
  { Name: "Lime", Role: "Student", Experiences: "Fresher" }]

  // Task1-String Rendering 

  const course = "React JS"

  // task2-Numbering Rendering

  const price = 50000
  const discount = 5000
  const Amount = price - discount

  // Task3 Boolean Rendering 

  const isLogin = true

  // Task4 Null Rendering

  const profileImage = null

  // task5 Undefined Rendering

  const email = ""

  // task6 Function Rendering

  const getCompanyName = () => {
    return "Google"
  }

  // task7 Array Rendering

  const arr1 = ["Vijay",

    "Ajith",

    "Suriya",

    "SK",

    "Dhanush"]

    const obj2={id:1,Name:"Halima",Course:"React"
    }

    const arrobj1=[{id:1,Name:"Halima",Course:"React"},{id:2,Name:"Lee",Course:"Mern"},
      {id:3,Name:"maa",Course:"Js"}
    ]
  return (
    <>

      <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task1
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">{course}</p>
      </div>

      <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task2
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">Price:{price}<br />
          Discount:{discount}<br />
          Total Amount:{Amount}<br />
        </p>
      </div>


      <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task3
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">
          {isLogin ? <p>Welcome User</p> : <p>Please Login</p>}
        </p>
      </div>

      <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task4
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">
          {profileImage ? <p>Image found</p> : <p>No image Found</p>}
        </p>
      </div>

      <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task5
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">
          {email ? <p>email Available</p> : <p>Email Not Available</p>}
        </p>
      </div>

      <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task6
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">
          {getCompanyName()}
        </p>
      </div>

      <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task7
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">
          {arr1.map((e)=><li>{e}</li>)}
        </p>
      </div>

       <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task8
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">
          {obj2.id} || 
          {obj2.Name} ||
          {obj2.Course}
        </p>
      </div>

       <div>
        <h2 className="bg-blue-950 text-2xl text-white">
          Task9
        </h2>
        <p className="m-3 p-3 bg-green-500 text-white">
          {arrobj1.map((e)=><li>{e.id}. {e.Name} - {e.Course}</li>)}
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-300 via-pink-500 to-cyan-500 py-3 flex flex-col gap-3">
        <ul className="flex justify-between p-3">
          {arr.map((e, i) => (<li key={i + 1} className="text-l border rounded p-1 ">{e}</li>))}
        </ul>
        
      </div>
      <div className="flex flex-col bg-gradient-to-br from-green-400 via-pink-500 to-purple-500  my-3 py-3 text-black  ">
          <h2 className="text-2xl">{obj.Name}</h2>
          <h2 className="text-l">{obj.Role}</h2>
          <h2 className="text-l">{obj.Experiences}</h2>
        </div>

      <div className="bg-gradient-to-br from-pink-500 to-red-200  flex justify-center items-center gap-10">
        {arrobj.map((e, i) => (
          <div className="bg-gradient-to-br from-green-700 to-blue-500 text-black w-70 h-25 m-3 " key={i + 1}>
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