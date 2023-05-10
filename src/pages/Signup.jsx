import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SideImage from "../assets/images/books-topics.png";
import TextInput from "../components/common/TextInput";

import {
  checkObjectValues,
  validateEmailAndPassword,
} from "../utils/vaildations";

import { useApi } from "../hooks/useApi";

import { signup } from "../services/bookland/auth";

import "../styles/auth.scss";
import { useDispatch } from "react-redux";
import { showNotification } from "../store/reducers/ui-slice";
import Loading from "../components/ui/Loading";

const Signup = () => {
  const [isLoading, isError, callApi] = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupHandler = () => {
    const valid = validateEmailAndPassword(
      signupData.email,
      signupData.password,
      signupData.confirmPassword
    );
    if (valid.status === "ok") {
      callApi(() =>
        signup(signupData).then((res) => {
          if (!isError) {
            if (res.status === "ok") {
              dispatch(
                showNotification({
                  show: true,
                  type: "success",
                  message: "User Signed up Successfully",
                })
              );
              navigate("/login");
            } else {
              dispatch(
                showNotification({
                  show: true,
                  type: "error",
                  message: "This User Already exists",
                })
              );
            }
          }
        })
      );
    } else {
      dispatch(
        showNotification({ show: true, type: "error", message: valid.message })
      );
    }
  };
  return (
    <Grid container className="authPage">
      <Grid item xs={12} md={6} className="sideImgcontainer">
        <img src={SideImage} alt="Side pics for books" className="w-100" />
      </Grid>
      <Grid item xs={12} md={6} className="formSide">
        <div className="container">
          <Typography variant="h1" textAlign={"center"} marginBottom="80px">
            Signup
          </Typography>
          <TextInput
            label={"Email or Username"}
            name="email"
            setValue={setSignupData}
            value={signupData.email}
            className="mb-10"
          />
          <TextInput
            label={"Password"}
            name="password"
            setValue={setSignupData}
            value={signupData.password}
            eye
            className={"mb-10"}
          />
          <TextInput
            label={"Confirm Password"}
            name="confirmPassword"
            setValue={setSignupData}
            value={signupData.confirmPassword}
            eye
          />
          {isLoading ? (
            <Loading />
          ) : (
            <Button
              variant="contained"
              className="w-100 mt-30"
              disabled={checkObjectValues(signupData)}
              onClick={signupHandler}
            >
              Signup
            </Button>
          )}
          <Button className="newUser" onClick={() => navigate("/login")}>
            Already have an account?
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
