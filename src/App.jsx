
import {Route ,Routes  } from "react-router-dom"
import Product from "./Componets/Product"
import Categories from "./Componets/Categories"
import Deatilsp from "./Componets/Deatilsp"
import Create from "./Componets/Create"
import { Edit } from "./Componets/Edit"




const App = () => {
  return (
    <div>
      
       
       <Routes>
         <Route path="/" element={<Product/>} />
         <Route path="/detailsp/:id" element={<Deatilsp/>} />
         <Route path="/create" element={<Create/>} />
         <Route path="/categories" element={<Categories/>} />
         <Route path="/edit/:id" element={<Edit/>} />
       </Routes>
    </div>
  )
}

export default App
