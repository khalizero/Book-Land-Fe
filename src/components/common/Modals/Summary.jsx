import React from "react";
import {
  DialogContent,
  DialogTitle,
} from "@mui/material";

import Dialog from "./Dialog";
import Loading from "../../ui/Loading";

const Summary = ({
  isOpen,
  setIsOpen,
  className,
  title,
  description,
  isLoading,
}) => {
  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen} className={className}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DialogTitle
            sx={{
              padding: "12px",
              fontSize: "24px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {title}
          </DialogTitle>
          <DialogContent>
            <p className="description" dangerouslySetInnerHTML={{__html: description}}></p>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default Summary;
