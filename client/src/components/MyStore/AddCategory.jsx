import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import React from "react";
import classes from "./MyStore.module.scss";
const AddCategory = () => {
  const [category, setCategory] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState("");

  const getData = () => {
    fetch(`http://localhost:3001/category`)
      .then((data) => data.json())
      .then((res) => {
        setCategory(res.items);
        console.log("res", res);
      });
  };
  console.log("catttt", category);
  React.useEffect(() => {
    getData();
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
console.log('form.......',form)
    // fetch(`http://localhost:3001/category`, {
    //   method: "POST",
    //   body: JSON.stringify(form),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
  };
  return (
    <div>
      <Box>
        <Button>Refresh</Button>
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
              <td>{e.image}</td>
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
              <TextField
                className={classes.margin}
                id="standard-basic"
                name="owner"
                label="Owner"
                variant="standard"
                onChange={handleChange}
              />
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
