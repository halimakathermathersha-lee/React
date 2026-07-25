import React from "react";

const Home = () => {
  const user = {
    name: "Halima",
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto h-20 px-10 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div>
              <h1 className="text-4xl font-bold">NewTn</h1>
              <p className="text-xs text-gray-500">
                From The Economic Times
              </p>
            </div>
          </div>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-12 text-lg">
            <li className="h-20 flex items-center border-b-2 border-red-600 text-red-600 cursor-pointer">
              News
            </li>

            <li className="hover:text-red-600 cursor-pointer">India</li>
            <li className="hover:text-red-600 cursor-pointer">World</li>
            <li className="hover:text-red-600 cursor-pointer">Events</li>
            <li className="hover:text-red-600 cursor-pointer">Awards</li>
            <li className="hover:text-red-600 cursor-pointer">Movies</li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4">

           <button className="border border-red-400 rounded-full px-6 py-2 text-base hover:bg-red-400 hover:text-white transition" > Sign Up </button> 
           <button  className="border border-gray-400 rounded-full px-6 py-2 text-base hover:bg-gray-400 hover:text-white transition" > Login </button>

          </div>
        </div>
      </nav>

      {/* ================= NEWS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-20 bg-slate-100 min-h-screen">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <img
            src="./tech1.png"
            alt="AI Tech"
            className="w-full h-52 object-cover"
          />
          <div className="p-5">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Technology
            </span>

            <h2 className="text-xl font-bold mt-3">
              AI-driven Tech Layoffs Continue Worldwide
            </h2>

            <p className="text-gray-600 mt-2">
              Global technology companies continue restructuring while investing heavily in AI.
            </p>

            <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Read More →
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <img
            src="./image.png"
            alt="IT Jobs"
            className="w-full h-52 object-cover"
          />
          <div className="p-5">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Technology
            </span>

            <h2 className="text-xl font-bold mt-3">
              Indian IT Sector Sees Hiring Recovery
            </h2>

            <p className="text-gray-600 mt-2">
              Hiring in India's IT industry is improving with increased demand for AI engineers.
            </p>

            <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
              Read More →
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <img
            src="./tn1.webp"
            alt="Movie"
            className="w-full h-52 object-cover"
          />
          <div className="p-5">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
              Tamil Nadu
            </span>

            <h2 className="text-xl font-bold mt-3">
              Jana Nayagan Box Office Collection
            </h2>

            <p className="text-gray-600 mt-2">
              Vijay's final film opened with a massive worldwide collection on its first day.
            </p>

            <button className="mt-5 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700">
              Read More →
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <img
            src="./tn2.jpg"
            alt="NEET"
            className="w-full h-52 object-cover"
          />
          <div className="p-5">
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              India
            </span>

            <h2 className="text-xl font-bold mt-3">
              NEET Protests Continue
            </h2>

            <p className="text-gray-600 mt-2">
              Political leaders continue opposing NEET and demand changes in the admission process.
            </p>

            <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
              Read More →
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;