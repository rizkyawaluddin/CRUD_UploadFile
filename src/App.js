
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css"

import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Update from "./pages/Update";
// import AddCategory from "./pages/AddCategory";
// import Category from "./pages/Category";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Product/>} />
      <Route path="/add-product" element={<AddProduct/>} />
      <Route path="/update" element={<Update/>} />
    </Routes>
    </>
  )
}

export default App;