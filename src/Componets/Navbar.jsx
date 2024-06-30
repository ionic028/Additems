
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="flex px-10">
      <div className=" w-full flex items-center justify-center">
        <nav className="flex font-bold  gap-6 my-4">
          <Link
           className="px-4 py-2 rounded 
           active:bg-violet-700 active:text-white bg-violet-100   "
            to="/"
          >
            Home
          </Link>
          <Link className="px-4 py-2 rounded 
           active:bg-violet-700 bg-violet-100 active:text-white  " to="/categories">Categories</Link>
        </nav>
      </div>
      <div className="flex items-center whitespace-nowrap justify-between">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full">
          <Link to="/create">Add Product</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
