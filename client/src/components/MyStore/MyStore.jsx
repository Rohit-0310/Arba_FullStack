import React from "react";
import NavBar from "../NavBar/NavBar";
import { Box, Button } from "@mui/material";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";

const MyStore = () => {
  const [toggle, setToggle] = React.useState("category");
  const handleCategory = () => {
    setToggle("category");
  };

  const handleProduct = () => {
    setToggle("product");
  };
  return (
    <div>
      <NavBar />

      <Box
        sx={{ maxWidth: "1080px", margin: "0 auto"}}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={handleCategory}>Category</Button>
          <Button onClick={handleProduct}>Product</Button>
        </Box>
        {toggle === "category" && <AddCategory />}
        {toggle === "product" && <AddProduct />}
      </Box>
    </div>
  );
};

export default MyStore;
