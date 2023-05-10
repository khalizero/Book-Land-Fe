import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { Divider, Stack, Grid } from "@mui/material";

import Navbar from "../components/ui/navbar/Navbar";

import "../styles/pageLayout.scss";

const PageLayout = () => {
  return (
    <div className="pageLayout">
      <Navbar />

      <Outlet />

      <div className="section5 footer-container">
        <Divider />
        <div className="footer section5-inner">
          <Grid container spacing={15}>
            <Grid item md={8}>
              <h4 className="heading-medium">Book Land</h4>
            </Grid>
            <Grid item md={2}>
              <Stack>
                <h2 className="title-medium">Information</h2>
                <Link className="item" to="/">
                  Home
                </Link>
                <Link className="item" to="/books">
                  Books
                </Link>
              </Stack>
            </Grid>
            <Grid item md={2}>
              <Stack>
                <h2 className="title-medium">Social</h2>
                <Link className="item" to="https://youtube.com">
                  Youtube
                </Link>
                <Link className="item" to="http://facebook.com">
                  FaceBook
                </Link>
                <Link className="item" to="http://twitter.com">
                  Twitter
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className="copyright">
          <p>&copy;2023 by Book Land</p>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
