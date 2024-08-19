import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Income from "./Pages/Income";
import ProductsSt from "./Pages/ProductsSt";
import NavBar from "./components/NavBar";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavBar/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/customers" element={<Customers/>}></Route>
          <Route path="/income" element={<Income/>}></Route>
          <Route path="/productstats/:id" element={<ProductsSt/>}></Route>
          <Route path="*" element={'Page not found'}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
