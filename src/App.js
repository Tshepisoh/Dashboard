import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Income from "./Pages/Income";
import { QueryClient,QueryClientProvider } from "react-query";
import Inventory from "./Pages/Inventory";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/customers" element={<Customers/>}></Route>
          <Route path="/income" element={<Income/>}></Route>
          <Route path="/inventory" element={ <Inventory/>}></Route>
          <Route path="*" element={'Page not found'}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
