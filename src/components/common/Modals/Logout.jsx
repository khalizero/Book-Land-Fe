import React, { useEffect } from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Dialog from "./Dialog";

import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../store/reducers/ui-slice";
import { useNavigate } from "react-router-dom";

const Logout = ({ isOpen, setIsOpen, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const logoutHandler = () =>{
    localStorage.removeItem('token');
    navigate('/login')
    dispatch(
      showNotification({
        show: true,
        type: "success",
        message: "User was Logged out successfully",
      })
    );
    setIsOpen(false);
  }

  const cancelHandler = () =>{
    setIsOpen(false);
  }

  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen} className={className}>
      <DialogTitle
        sx={{
          padding: "12px",
          fontSize: "24px",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Logout
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" className="fw-700" onClick={cancelHandler}>
          Cancel
        </Button>
        <Button
          variant="contained"
          className="errorBtn"
          onClick={logoutHandler}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Logout;
