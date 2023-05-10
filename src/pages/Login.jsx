import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import SideImage from "../assets/images/books-topics.png";
import TextInput from "../components/common/TextInput";
import { useApi } from "../hooks/useApi";
import { login } from "../services/bookland/auth";
import { checkObjectValues } from "../utils/vaildations";

import Loading from "../components/ui/Loading";

import "../styles/auth.scss";
import { showNotification } from "../store/reducers/ui-slice";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const { state: locationState } = useLocation();
  const [isLoading, isError, callApi] = useApi();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Checking login status and location exists, then navigating to location, otherwisr sending to /
  useEffect(() => {
    if (isLoggedIn) {
      if (locationState && locationState.visitedLocation) {
        navigate(locationState.visitedLocation);
      } else {
        navigate("/");
      }
    }
  }, [isLoggedIn]);

  const loginHandler = () => {
    // Calling the api
    callApi(() =>
      login(loginData).then((res) => {
        if (!isError) {
          if (res.user) {
            // If user is there set up token and login
            localStorage.setItem("token", res.user);
            navigate("/");
            dispatch(
              showNotification({
                show: true,
                type: "success",
                message: "User Loggedin Successfully",
              })
            );
          } else {
            // If user is not there showing error

            dispatch(
              showNotification({
                show: true,
                type: "error",
                message: "This User Don't Exists",
              })
            );
          }
        }
      })
    );
  };

  return (
    <Grid container className="authPage">
      <Grid item xs={12} md={6} className="sideImgcontainer">
        <img src={SideImage} alt="Side pics for books" className="w-100" />
      </Grid>
      <Grid item xs={12} md={6} className="formSide">
        <div className="container">
          <Typography variant="h1" textAlign={"center"} marginBottom="80px">
            Login
          </Typography>
          <TextInput
            label={"Email or Username"}
            name="email"
            setValue={setLoginData}
            value={loginData.email}
            className="mb-10"
          />
          <TextInput
            label={"Password"}
            name="password"
            setValue={setLoginData}
            value={loginData.password}
            eye
          />
          {isLoading ? (
            <Loading />
          ) : (
            <Button
              variant="contained"
              className="w-100 mt-30"
              type="submit"
              disabled={checkObjectValues(loginData)}
              onClick={loginHandler}
            >
              Login
            </Button>
          )}
          <Button className="newUser" onClick={() => navigate("/signup")}>
            New User?
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
