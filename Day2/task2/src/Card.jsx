import image1 from "./assets/1.png";

const Card = () => {
  return (
    <>
      <div className="bg-cyan-100">
        <h2 className="text-3xl font-bold text-center p-5">
        Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">

        <div className="bg-pink-300 p-3 rounded-lg shadow-lg">
          <img
            src={image1}
            alt="HTML Tutorial"
            className="w-full h-48 object-cover rounded"
          />

          <h2 className="text-2xl font-bold mt-3">
            HTML Tutorial
          </h2>

          <p className="text-gray-600 py-2">
            This is a very easy language. You will learn HTML from basic to advanced.
          </p>

          <p className="text-xl font-semibold">₹2500</p>

          <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:scale-105 transition">
            Enroll
          </button>
        </div>

        <div className="bg-red-300 p-3 rounded-lg shadow-lg">
          <img
            src={image1}
            alt="CSS Tutorial"
            className="w-full h-48 object-cover rounded"
          />

          <h2 className="text-2xl font-bold mt-3">
            CSS Tutorial
          </h2>

          <p className="text-gray-600 py-2">
            Learn CSS from basic to advanced with real-world examples.
          </p>

          <p className="text-xl font-semibold">₹3000</p>

          <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:scale-105 transition">
            Enroll
          </button>
        </div>

        <div className="bg-blue-300 p-3 rounded-lg shadow-lg">
          <img
            src={image1}
            alt="JavaScript Tutorial"
            className="w-full h-48 object-cover rounded"
          />

          <h2 className="text-2xl font-bold mt-3">
            JavaScript Tutorial
          </h2>

          <p className="text-gray-600 py-2">
            Learn JavaScript concepts with practical examples.
          </p>

          <p className="text-xl font-semibold">₹4000</p>

          <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:scale-105 transition">
            Enroll
          </button>
        </div>

        <div className="bg-purple-300 p-3 rounded-lg shadow-lg">
          <img
            src={image1}
            alt="React Tutorial"
            className="w-full h-48 object-cover rounded"
          />

          <h2 className="text-2xl font-bold mt-3">
            React Tutorial
          </h2>

          <p className="text-gray-600 py-2">
            Build modern websites using React and Tailwind CSS.
          </p>

          <p className="text-xl font-semibold">₹5000</p>

          <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:scale-105 transition">
            Enroll
          </button>
        </div>

      </div>
      </div>
    </>
  );
};

export default Card;