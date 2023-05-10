import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLoggedIn } from "../store/reducers/auth-slice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";
import { decodeToken } from "react-jwt";

const AuthGuard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { state: locationState, pathname } = useLocation();


  // Checking token and determininf the user route accordingly 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = decodeToken(token);
      if (user) {
        dispatch(setLoggedIn(true));
        console.log("loggeding");
      }
    }else if(!token){
      dispatch(setLoggedIn(false))
    }
    setLoading(false)
  }, []);

  useEffect(() => {
    if(!loading){
      if(isLoggedIn){
        navigate(pathname)
      }else{
        navigate('/login')
      }
    }
  }, [isLoggedIn, loading]);

  if(loading){
    return <div>Loading...</div>
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ visitedLocation: locationState }} />;
  }

  return <PageLayout />;
};

export default AuthGuard;
