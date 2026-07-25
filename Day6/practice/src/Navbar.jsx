const Navbar = () => {
  const user = {
    name: "Halima",
  };

  return (
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

          {/* Profile Circle */}
          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg">
            {user.name.charAt(0).toUpperCase()}
          </div>

          {/* User Details */}
          <div className="flex flex-col">
            <span className="font-semibold text-sm">
              {user.name}
            </span>
            <span className="text-xs text-gray-500">
              Reader
            </span>
          </div>

          {/* Logout */}
          <button
            className="border border-red-400 text-red-500 rounded-full px-5 py-2 hover:bg-red-500 hover:text-white transition"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;