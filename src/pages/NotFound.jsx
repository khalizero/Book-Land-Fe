import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box classes="not-found">
      <Box className="centered not-found">
        <Box className="logo-img"></Box>
        <Typography
          className="text-404"
          textAlign="center"
          variant="p"
          component="p"
        >
          404
        </Typography>
        <Typography
          className="text-main"
          textAlign="center"
          variant="p"
          component="p"
        >
          The page could not be found or you don't have permission to view it.
        </Typography>
        <Typography textAlign="center" variant="p" component="p">
          <p>
            The resource that you are attempting to access does not exist or you
            don't have the necessary permissions to view it.
          </p>
          <p>
            Make sure the address is correct and that the page hasn't moved.
          </p>
        </Typography>
      </Box>
    </Box>
  );
};
export default NotFound;
