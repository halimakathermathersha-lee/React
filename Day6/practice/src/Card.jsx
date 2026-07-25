import React from 'react'

const Card = () => {
  return (
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
        Global technology companies continue restructuring their workforce while
        investing heavily in Artificial Intelligence.
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
        Hiring in India's IT industry is improving with increased demand for AI
        engineers and software developers.
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
      alt="Tamil Nadu"
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
        Thalapathy Vijay’s final film, Jana Nayagan, finally hit theatres on Thursday, July 23. The film had been embroiled in quite the controversy over its certification, and as such, Vijay’s fans have celebrated the release like a festival. As per Sacnilk, the film’s total worldwide opening day collection stands at Rs 78.27 crore.
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
        Political leaders continue to oppose NEET, demanding changes to the
        medical admission process.
      </p>

      <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
        Read More →
      </button>
    </div>
  </div>

</div>
  )
}

export default Card