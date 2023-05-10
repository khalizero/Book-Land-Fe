import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { CheckCircleOutline, Error } from "@mui/icons-material";
import { showNotification } from "../../../store/reducers/ui-slice";

import "./notification.scss";

const Notification = () => {
  const dispatch = useDispatch();
  const { show, type, message } = useSelector((state) => state.ui.notification);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        showNotification({
          show: false,
          type: "",
          message: "",
        })
      );
    }, 3000);
  }, [show, dispatch]);

  return (
    show && (
      <Stack
        className={`notification ${type}`}
        direction={"row"}
        columnGap={1}
        alignItems={"center"}
      >
        {type === "success" ? (
          <CheckCircleOutline className="icon" />
        ) : (
          <Error className="icon" />
        )}

        <Typography color={"success"} className="text">
          {message}
        </Typography>
      </Stack>
    )
  );
};

export default Notification;
