import React from "react";
import classes from "./MyStore.module.scss";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const AddProduct = () => {
  const [product, setProduct] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState("");
  const [userData, setUserData] = React.useState([]);
  const [CategoryData, setCategoryData] = React.useState([]);

  const getData = () => {
    fetch(`http://localhost:3001/product`)
      .then((data) => data.json())
      .then((res) => {
        setProduct(res.items);
        console.log("res", res);
      });
  };
  console.log("ppppppppp", product);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(name, value);
  };

  const getOwner = () => {
    fetch(`http://localhost:3001/users`)
      .then((data) => data.json())
      .then((res) => {
        setUserData(res.items);
        console.log("usssssssss-------", res.items);
      });
  };
  const getCategory = () => {
    fetch(`http://localhost:3001/category`)
      .then((data) => data.json())
      .then((res) => {
        setCategoryData(res.items);
        console.log("catttttttttttttttt-------", res.items);
      });
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    console.log("form.......", form);
    fetch(`http://localhost:3001/product`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    handleClose();
  };
  React.useEffect(() => {
    getData();
    getOwner();
    getCategory();
  }, []);

  const handleRefresh = () => {
    getData();
  };

  return (
    <div>
      <Box>
        <Button onClick={handleRefresh}>Refresh</Button>
        <Button>Filter</Button>
        <Button onClick={handleClickOpen}>Add</Button>
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
              <td>
                <img
                  src={e.image}
                  alt="Category"
                  style={{ width: "140px", height: "50px" }}
                />
              </td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td>{e.description}</td>
              <td>Delete</td>
            </tr>
          ))}
        </table>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl variant="standard" sx={{ minWidth: "100%" }}>
              <TextField
                className={classes.margin}
                id="standard-basic"
                name="title"
                label="Title"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                className={classes.margin}
                id="standard-basic"
                name="description"
                label="Description"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                className={classes.margin}
                id="standard-basic"
                name="price"
                label="Price"
                variant="standard"
                onChange={handleChange}
                type="number"
              />
              <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  //   value={age}
                  name="category"
                  label="category"
                  onChange={handleChange}
                >
                  {CategoryData &&
                    CategoryData.map((item, i) => (
                      <MenuItem value={item._id}>{item.name}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Owner
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  //   value={age}
                  name="owner"
                  label="owner"
                  onChange={handleChange}
                >
                  {userData &&
                    userData.map((item, i) => (
                      <MenuItem value={item._id}>{item.fullName}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              <TextField
                className={classes.margin}
                id="standard-basic"
                name="image"
                label="Image"
                variant="standard"
                onChange={handleChange}
              />
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCategory} autoFocus>
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProduct;
