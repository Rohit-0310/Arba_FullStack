import React from "react";
import classes from "./SignUp.module.scss";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import logInImage from "../../Image/login.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState("");

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(name, value);
  };

  const Handleclick = (e) => {
    e.preventDefault();
    const { confirmPassword, ...newForm} = form;
    console.log(newForm);

    fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify(newForm),
      headers: {
        "content-type": "application/json",
      },
    });

    setTimeout(() => {
      navigate("/Login");
    }, 3000);
  };

  const handlLogin = () => {
    setTimeout(() => {
      navigate("/Login");
    }, 1000);
  };
  return (
    <Box
      sx={{
        maxWidth: "720px",
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container sx={{ border: "3px solid red" }}>
        <Grid item xs={6}>
          <div className={classes.leftPanel}>
            <img src={logInImage} className={classes.image} alt="error" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="standard" sx={{ minWidth: "100%" }}>
            <Box sx={{ textAlign: "center" }}>App Name</Box>
            <TextField
              className={classes.margin}
              id="standard-basic"
              name="userName"
              label="User Name"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              className={classes.margin}
              id="standard-basic"
              name="fullName"
              label="Full Name"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              className={classes.margin}
              id="standard-basic"
              name="email"
              label="Email"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              className={classes.margin}
              id="standard-basic"
              name="password"
              label="Password"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              className={classes.margin}
              id="standard-basic"
              name="confirmPassword"
              label="Confirm Password"
              variant="standard"
              onChange={handleChange}
            />
            <Button
              className={classes.margin}
              variant="contained"
              onClick={Handleclick}
            >
              Register
            </Button>
            <Box className={classes.margin}>
              Already have an account?{" "}
              <span onClick={() => handlLogin()} style={{ color: "blue" }}>
                Login
              </span>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
