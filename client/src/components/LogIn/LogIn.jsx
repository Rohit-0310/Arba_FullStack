import React from "react";
import classes from "./login.module.scss";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import logInImage from "../../Image/login.png";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [updateform, setUpdateform] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateform({ ...updateform, [name]: value });
    // console.log(updateform);
  };

  const checkLogin = async (e) => {
    e.preventDefault();
    let cdata = await fetch("http://localhost:3001/users");
    let res = await cdata.json();
    console.log(updateform);
    console.log(res.items);

    res.items.filter((user) => {
      console.log("user---", user);
      return user.userName === updateform.userName &&
        user.password === updateform.password
        ? navigate("/")
        : navigate("/Signup");
    });
  };

  const handleSignUp = () => {
    setTimeout(() => {
      navigate("/Signup");
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
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.leftPanel}>
            <img src={logInImage} className={classes.image} alt="error" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            variant="standard"
            sx={{
              minWidth: "100%",
              margin: "0 auto",
              minHeight: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              name="password"
              label="Password"
              variant="standard"
              onChange={handleChange}
            />

            <Button
              className={classes.margin}
              variant="contained"
              onClick={checkLogin}
              sx={{margin:'10px'}}
            >
              Login
            </Button>
            <Box className={classes.margin}>
              Don't have an account?{" "}
              <span onClick={() => handleSignUp()} style={{ color: "blue" }}>
                Sign Up
              </span>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogIn;
