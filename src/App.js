import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Products from "./Pages/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="*" element={'Page not found'}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
