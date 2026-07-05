const Form = () => {
    return (
    <>
    <hr></hr>
           <div className="p-5 bg-gray-300 flex flex-col justify-center items-center  ">
             <h1 className="m-5 text-2xl">Volunteer Registration Form</h1>

            <form className="bg-white p-5 w-300 rounded-2xl">

                Full Name:
                <input className="border m-1" type="text" placeholder="Enter your name" required />
                <br /><br />

                Email:
                <input className="border m-1"  type="email" placeholder="Enter email" required />
                <br /><br />

                Password:
                <input className="border m-1"  type="password" min="8" placeholder="Enter password" required />
                <br /><br />

                Phone Number:
                <input type="tel" className="border m-1" minLength="10" maxLength="10" placeholder="Enter phone number" required />
                <br /><br />

                Age:
                <input type="number" className="border m-1 w-25" min="18" max="60" placeholder="Enter age" required />
                <br /><br />

                Date of Birth:
                <input type="date" className="border m-1" required />
                <br /><br />

                Gender:
                <input type="radio" name="gender" required /> Male
                <input type="radio" name="gender" required /> Female
                <br /><br />

                Skills:<br />
                <input type="checkbox" /> Teaching<br />
                <input type="checkbox" /> Communication<br />
                <input type="checkbox" /> Management<br />
                <br /><br />

                Available Time:
                <input type="time" className="border m-1"/>
                <br /><br />

                Favorite Color:
                <input type="color" className="border m-1"/>
                <br /><br />

                Upload Pic:
                <input type="file" className="border m-1" />
                <br /><br />

                Address:
                <br />
                <textarea rows="4" cols="30" className="border m-1"></textarea>
                <br /><br />

                Why do you want to volunteer?
                <br />
                <textarea rows="4" cols="30" className="border m-1"></textarea>
                <br/><br/>

                    <textarea rows="4" cols="30" readOnly className="border m-1">If You Okay with all the rules and regulations, agree with this volunteer work means
                         check all the details and click register</textarea>


                    <input type="submit" className="border m-1 bg-blue-500 p-1 rounded" value="Register" />

                </form>
           </div>

                </>)}

export default Form