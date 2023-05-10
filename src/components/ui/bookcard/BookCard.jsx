import React from "react";
import { Box , Button} from "@mui/material";
import './bookcard.scss'

const BookCard = ({bookImage, title, price, caption, onClick}) =>{
    return(
      <div className="book-card">
        <Box className="centerCircle">
          <img src={bookImage} alt="books" className="w-100" draggable={false}/>
        </Box>
        <Box className="body">
          <div className="heading">
            <h3>{title}</h3>
            <span>$ {price}</span>
          </div>
          <p className="caption">
            {caption}
          </p>
          <Button className="demo-button" onClick={onClick}>View Demo</Button>
        </Box>
      </div>
    )
  }


  export default BookCard