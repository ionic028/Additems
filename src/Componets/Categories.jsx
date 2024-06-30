import { useContext, useState } from "react";
import {PlatziFakeContext } from "../utils/Context";
import Navbar from "./Navbar";

const Categories = () => {
  const [pfs] = useContext(PlatziFakeContext);
  console.log(pfs)
  const [selectedCategory, setSelectedCategory] = useState("All");
  

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

 
  const filteredCategories = pfs
    ? pfs.filter((c) =>
        selectedCategory === "All"
          ? true :
          c.category.name   === selectedCategory ||
          c.category   === selectedCategory
      )
    : [];

  const uniqueCategories = pfs
    ? [...new Set(pfs.map((c) => c.category.name || c.category))]
    : [];

    

  return pfs ? (
    <>
      <Navbar />
      <div className="flex justify-center gap-2 my-5">
        <button
          onClick={() => handleFilterChange("All")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "All"  ? "bg-blue-500 text-white" : "bg-gray-200"
          } ` }
        >
          {filteredCategories.length > 0 ? "All"  : " No Categories  is Found"  }
        </button>
        {uniqueCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleFilterChange(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category? "bg-blue-500 text-white" : "bg-gray-200"
            }`} 
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex gap-5 flex-wrap p-10 justify-center items-center">
        {filteredCategories.map((c, i) => (
          <div
            key={i}
            className="w-52 h-52 flex  flex-col justify-center items-center rounded-2xl mb-2 "
          >
            <div className="w-32 h-32 rounded-xl overflow-hidden  ">
              <img
                className="w-full h-full object-cover"
                src={c.image }
                alt=""
              />
            </div>
            <h1 className="text-center font-semibold">{c.title}</h1>
            <button className=" font-semibold mt-1 text-white bg-green-500 px-4 py-2 rounded-xl">
              Price : ${c.price}
            </button>
          </div>
        ))}
      </div>
    </>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Categories;
