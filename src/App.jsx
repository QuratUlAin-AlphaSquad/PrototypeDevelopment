// import { useState } from 'react'

// import { ThemeProvider, Typography, createTheme } from "@mui/material";
import "./App.css";
import Content from "./components/Content";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/reuseable/Header";
// import Heading from "./components/reuseable/Heading";
import ProductType from "./components/ProductType";
import ProductSize from "./components/ProductSize";
// import SizeName from "./components/SizeName";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: ["Inter", "sans-serif"].join(","),
  //   },
  // });
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content/>} ></Route>
        <Route path="/product-type" element={<ProductType/>} ></Route>
        <Route path="/product-size" element={<ProductSize/>} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
