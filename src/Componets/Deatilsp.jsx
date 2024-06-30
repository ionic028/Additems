import { useContext, useEffect, useState } from "react";
import { PlatziFakeContext } from "../utils/Context";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../utils/axios";

const Deatilsp = () => {
  const [pfs, setPfs] = useContext(PlatziFakeContext);
  const [pf, setPf] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setPf(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    if (!pf) {
      setPf(pfs.filter((p) => p.id == id)[0]);
    }
    // getsingleproduct();
  }, []);


  const ProductDeleteHandler = (id)=>{

    const FilteredProducts = pfs.filter(p => p.id !== id);
    setPfs(FilteredProducts); 
    localStorage.setItem("pfs",JSON.stringify(FilteredProducts));
    navigate("/")
   }

  return pf ? (
    <>
      <div className="flex gap-5 flex-col flex-wrap mt-5 justify-center  items-center">
        <button
          className="px-4 py-2 bg-yellow-400 rounded-full"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <h1 className="text-center text-6xl">PRODUCT FULL DETAILS</h1>
        <div className="w-full gap-6 flex  mt-10 justify-center items-center rounded-2xl mb-2 ">
          <div className="w-62 h-52 rounded-xl overflow-hidden  ">
            <img
              className="w-full h-full object-cover"
              src={pf.image}
              alt=""
            />
          </div>
          <div className="  ">
            <h1 className=" font-semibold">{pf.title}</h1>

            <button className=" block font-semibold mt-2 mb-2 text-white bg-green-500 px-4 py-2 rounded-xl">
              Price : ${pf.price}
            </button>
            <Link to={`/edit/${pf.id}`} className="py-2 px-5 bg-yellow-500 border rounded-full border-red-200 text-white">
              Update
            </Link>
            <button
              onClick={() => ProductDeleteHandler(pf.id)}
              className="py-2 px-5 bg-red-600 border rounded-full border-red-200 text-white"
            >
              Delete
            </button>
          </div>
        </div>
        <h1 className="text-center text-xl font-semibold">
          Category: {pf.category.name || pf.category}{" "}
        </h1>
        <h1 className="text-center text-4xl font-semibold"> Description</h1>
        <p className=" w-1/2 text-center">{pf.description}</p>
      </div>
    </>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Deatilsp;
