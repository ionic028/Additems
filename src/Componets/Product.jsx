import { useContext} from "react";
import { PlatziFakeContext } from "../utils/Context";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Product = () => {
  const [pfs] = useContext(PlatziFakeContext);
 
  
  //  console.log(platziFake)

  // useEffect(() => {
  //   if (!filteredProducts || category == "undefined") setfilteredProducts(platziFake);
    
  //   if (category != "undefined") {
  //     setfilteredProducts(platziFake.filter((product) => product.category == category));
  //   }
  //   // getproductscategory();
  //  },[category, platziFake]);
   

  return pfs ?  (
    <>
    <Navbar/>
      <div className="flex gap-5 flex-wrap p-10 justify-center  items-center">
        {pfs.map((product, i) => (
          <Link to={`/detailsp/${product.id}`}
            key={i} 
            className="w-52 h-52 flex  flex-col justify-center items-center rounded-2xl mb-2 "
          >
            <div className="w-32 h-32 rounded-xl overflow-hidden  ">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <h1 className="text-center font-semibold">{product.title}</h1>
            <button className=" font-semibold mt-1 text-white bg-green-500 px-4 py-2 rounded-xl">
              Price : ${product.price}
            </button>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Product;
