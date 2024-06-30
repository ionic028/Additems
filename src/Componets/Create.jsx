import { useContext, useState } from "react";
import { PlatziFakeContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Create = () => {
  const navigate =useNavigate()

  const [pfs,setPfs] = useContext(PlatziFakeContext);


  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have at least 4 characters");

      return;
    }
    const pf = {
      id: nanoid(),
      title,
      image,
      category,
      description,
      price,
    };
    setPfs([...pfs,pf ]);

    localStorage.setItem("pfs", JSON.stringify([...pfs, pf]));
   
    
    

    navigate("/")
  };



  return (
    <>
    <Navbar/>  
  <form
    onSubmit={AddProductHandler}
    className="p-[5%] w-screen h-screen flex flex-col items-center"
  >
    <h1 className="w-1/2 m-3 text-3xl">Add New Product</h1>
    <input
      type="url"
      placeholder="Image Link"
      className=" text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
      onChange={(e) => setimage(e.target.value)}
      value={image}
    />

    <input
      type="text"
      placeholder="Title"
      className=" text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
      onChange={(e) => settitle(e.target.value)}
      value={title}
    />

    <div className="w-1/2 flex justify-between">
      <input
        type="text"
        placeholder="Category"
        className=" text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
        onChange={(e) => setcategory(e.target.value)}
        value={category}
      />
      <input
        type="number"
        placeholder="Price"
        className=" text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
        onChange={(e) => setprice(e.target.value)}
        value={price}
      />
    </div>
    <textarea
      placeholder="Description"
      className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
      rows="10"
      onChange={(e) => setdescription(e.target.value)}
      value={description}
    ></textarea>
    <div className="w1/2">
      <button className="py-2 px-5 border rounded border-blue-500 text-blue-500">
        Add New Product
      </button>
    </div>
   
  </form>
  </>
  )
}

export default Create
