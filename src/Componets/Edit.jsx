/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useContext, useEffect, useState } from "react";
import { PlatziFakeContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
// import {  toast } from 'react-toastify';
export const Edit = () => {
  const [pfs, setPfs] = useContext(PlatziFakeContext);
  const navigate = useNavigate();

  const { id } = useParams();

  const [pf, setPf] = useState([
    {
      title: "",
      image: "",
      category: "",
      description: "",
      price: "",
    },
    
  ]);

  const ChangeHandler = (e) => {
    // console.log(e.target.name, e.target.value)

    setPf({ ...pf, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setPf(pfs.filter((p) => p.id == id)[0]);
  }, [id]);
  // console.log(pf);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      pf.title.trim().length < 5 ||
      pf.image.trim().length < 5 ||
      pf.category.trim().length < 5 ||
      pf.price.trim().length < 1 ||
      pf.description.trim().length < 5
    ) {
      alert("Each and every input must have at least 4 characters");

      return;
    }
    const pi = pfs.findIndex((p) => p.id == id);
    const copyData = [...pfs];
    copyData[pi] = { ...pfs[pi], ...pf };

    // console.log(copyData)
    setPfs(copyData);

    localStorage.setItem("pfs", JSON.stringify(copyData));
    // toast.success("Product Update!");
    navigate("/");
    
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="w-1/2 m-3 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className=" text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={ChangeHandler}
        value={pf && pf.image}
      />

      <input
        type="text"
        placeholder="Title"
        className=" text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={ChangeHandler}
        value={pf && pf.title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className=" text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="category"
          onChange={ChangeHandler}
          value={pf && pf.category }
        />
        <input
          type="number"
          placeholder="Price"
          className=" text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="price"
          onChange={ChangeHandler}
          value={pf && pf.price}
        />
      </div>
      <textarea
        placeholder="Description"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
        name="description"
        onChange={ChangeHandler}
        value={pf && pf.description}
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-500 text-blue-500">
          Update Product
        </button>
      </div>
    </form>
  );
};

