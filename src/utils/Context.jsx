/* eslint-disable react/prop-types */
// import axios from "./axios";
import { createContext,useState } from "react";

export const PlatziFakeContext = createContext();



const Context = (props) =>{

const [pfs ,setPfs] = useState(JSON.parse(localStorage.getItem("pfs",)) || [] ||null)

 
//  const getproducts = async () => {
//     try {
//       const { data } = await axios("/products");
//      setPfs(data)
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   useEffect(() => {
//     getproducts();
//   }, []);
// ----------------------------------------------------------------
  // const getcategories = async () => {
  //   try {
  //     const { data } = await axios("/categories");
  //   setcategories(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  // useEffect(() => {
  //   getcategories();
  // }, []);
// ----------------------------------------------------------------
//   const getusers = async () => {
//     try {
//       const { data } = await axios("/users");
    
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   useEffect(() => {
//     getusers();
//   }, []);





return(
        <PlatziFakeContext.Provider value={[pfs ,setPfs]} >
            {props.children}
        </PlatziFakeContext.Provider>
)
}
export default Context;