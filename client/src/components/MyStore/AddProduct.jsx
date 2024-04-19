import React from "react";
import classes from "./MyStore.module.scss";
import { Box, Button } from "@mui/material";
const AddProduct = () => {
  const [product, setProduct] = React.useState([]);

  const getData = () => {
    fetch(`http://localhost:3001/product`)
      .then((data) => data.json())
      .then((res) => {
        setProduct(res.items);
        console.log("res", res);
      });
  };
  console.log("ppppppppp", product);
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Box>
        <Button>Refresh</Button>
        <Button>Filter</Button>
        <Button>Add</Button>
      </Box>
      <Box>
        <table className={classes.table}>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          {product.map((e) => (
            <tr key={e._id}>
              <td>{e.image}</td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td>{e.description}</td>
              <td>Delete</td>
            </tr>
          ))}
        </table>
      </Box>
    </div>
  );
};

export default AddProduct;
