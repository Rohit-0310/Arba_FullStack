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
import React from "react";
import classes from "./MyStore.module.scss";
const AddCategory = () => {
  const [category, setCategory] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState("");
  const [userData, setUserData] = React.useState([]);

  const getData = () => {
    fetch(`http://localhost:3001/category`)
      .then((data) => data.json())
      .then((res) => {
        setCategory(res.items);
        console.log("res", res);
      });
  };
  const getOwner = () => {
    fetch(`http://localhost:3001/users`)
      .then((data) => data.json())
      .then((res) => {
        setUserData(res.items);
        console.log("usssssssss-------", res.items);
      });
  };
  console.log("catttt", category);
  React.useEffect(() => {
    getData();
    getOwner();
  }, []);

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

  const handleAddCategory = (e) => {
    e.preventDefault();
    console.log("form.......", form);
    fetch(`http://localhost:3001/category`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    handleClose();
  };
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
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
          {category.map((e) => (
            <tr key={e._id}>
              <td>
                <img
                  src={e.image}
                  alt="Category"
                  style={{ width: "140px", height: "50px" }}
                />
              </td>
              <td>{e.name}</td>
              <td>{e.slug}</td>
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
        <DialogTitle id="alert-dialog-title">{"Add Category"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl variant="standard" sx={{ minWidth: "100%" }}>
              <TextField
                className={classes.margin}
                id="standard-basic"
                name="name"
                label="Name"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                className={classes.margin}
                id="standard-basic"
                name="slug"
                label="Slug"
                variant="standard"
                onChange={handleChange}
              />
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
            Add Category
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCategory;
