// import { useState } from 'react'

import { ThemeProvider, Typography, createTheme } from "@mui/material";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Header from "./components/reuseable/Header";
import Heading from "./components/reuseable/Heading";
// import ProductType from "./components/ProductType";
// import ProductSize from "./components/ProductSize";
// import SizeName from "./components/SizeName";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto">
        <ThemeProvider theme={theme}>
          <Typography>
            <div className="">
              <Header />
              <div className="flex">
                <Sidebar />
                <div className="w-full">
                  <Heading />
                  <Content />
                  {/* <ProductType /> */}
                  {/* <ProductSize /> */}
                  {/* <SizeName /> */}
                </div>
              </div>
              {/* Prototype Dev */}
            </div>
          </Typography>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
