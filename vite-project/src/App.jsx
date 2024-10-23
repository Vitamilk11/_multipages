import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./layouts/Layout/Layout"; // Correct path
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Todo from "./pages/Todo/Todo";
import Products from "./pages/Products/Products";
import Animation from "./pages/Animation/animation";
import Carts from "./pages/Carts/Carts";
import Components from "./pages/Components/components";
import Login from "./pages/Login/Login";

import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { fetchProducts } from "./data/products";

import "./App.css";
import { SiEtihadairways } from "react-icons/si";

function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

 
  useEffect(() => setProducts(fetchProducts()), []);

  useEffect(() => console.log(products), [products]);

   if (token === '') {
    return (<Login setToken={setToken} setRole={setRole}/> )
    }else{
      
    }

  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route element={<Layout products={products} carts={carts} setToken={setToken}/>} >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Todo" element={<Todo />} />
            <Route
              path="/products"
              element={
                <Products products={products} carts={carts} setCarts={setCarts} />
              }
            />
            <Route
              path="/carts"
              element={<Carts carts={carts} setCarts={setCarts} />}
            />
            {/* <Route
              path="/products"
              element={
                <Products
                  products={products}
                  carts={carts}
                  setCarts={setCarts}
                />
              }
            />
            <Route path="/carts" element={<Carts />} /> */}
            <Route path="/components" element={<Components />} />
            <Route path="/Animation" element={<Animation />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
