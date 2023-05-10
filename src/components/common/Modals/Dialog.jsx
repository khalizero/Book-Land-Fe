import React from "react";
import { Dialog as MUIDialog } from "@mui/material";

const Dialog = ({ isOpen, setIsOpen, className, children }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MUIDialog open={isOpen} onClose={handleClose} className={className}>
        {children}
      </MUIDialog>
    </>
  );
};

export default Dialog;
