import React, { useRef } from "react";
import {
  Grid,
  Typography,
  Stack,
  Box,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Person,
  LibraryBooks,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import BookCard from "../components/ui/bookcard/BookCard";
import BookTopicIcon from "../components/ui/BooKTopicIcon/BookTopicIcon";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/home.scss";

import HeroBooksImg from "../assets/images/hero-books.png";
import OpenBook from "../assets/images/open-book.png";
import VerticalBook from "../assets/images/vertical-book.png";
import AboutImage from "../assets/images/about-image.png";
import TopicsImage from "../assets/images/books-topics.png";
import PencilImage from "../assets/images/pencil.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/ui/navbar/Navbar";


// This is piece if dummy data to show dummy books on our home page 
const arrivalItems = [
  {
    bookImage: OpenBook,
    caption: "Get More Details",
    price: "34.00",
    title: "Dead Or Die 1",
  },
  {
    bookImage: VerticalBook,
    caption: "Get More Details",
    price: "25.00",
    title: "Dead Or Die 2",
  },
  {
    bookImage: OpenBook,
    caption: "Get More Details",
    price: "10.00",
    title: "Dead Or Die 3",
  },
  {
    bookImage: VerticalBook,
    caption: "Get More Details",
    price: "15.00",
    title: "Dead Or Die 4",
  },
  {
    bookImage: OpenBook,
    caption: "Get More Details",
    price: "30.00",
    title: "Dead Or Die 5",
  },
  {
    bookImage: HeroBooksImg,
    caption: "Get More Details",
    price: "31.00",
    title: "Dead Or Die 6",
  },
  {
    bookImage: OpenBook,
    caption: "Get More Details",
    price: "35.00",
    title: "Dead Or Die 7",
  },
];

const Home = () => {
  // setting up ref to carousel to change it
  const carouselRef = useRef();

  const navigate = useNavigate();

  // Functions for handling carousel change when button is clicked
  const handleNextSlide = () => {
    carouselRef.current.slideNext();
  };

  const handlePrevSlide = () => {
    carouselRef.current.slidePrev();
  };
  return (
    <div className="home">
      <div className="heroSection">
        <Navbar />
        <Stack className="section2 position-relative z-100">
          <Typography
            fontSize={60}
            color="white"
            textAlign={"center"}
            marginTop="40px"
            lineHeight={1}
          >
            Expand your mind,
            <br />
            reading a book
          </Typography>
          <Typography
            fontSize={12}
            color="white"
            textAlign={"center"}
            marginTop="20px"
          >
            Reading books is a wonderful way to spend your time. Here at Book
            Land, we beieve reading will <br />
            help you make connections with others.
          </Typography>
          <Button
            className="outlined-button fit-auto"
            onClick={() => navigate("/books")}
          >
            Find Books Now!!
          </Button>

          <div className="img-container book-img">
            <img
              src={HeroBooksImg}
              alt="Books Images"
              className="w-50 m-auto"
            />
          </div>
        </Stack>
        <div className="big circle z-10"></div>
        <div className="open-book circle z-10">
          <img src={OpenBook} alt="Books Images" className="w-100" />
        </div>
        <div className="vertical-book circle z-10">
          <img src={VerticalBook} alt="Books Images" className="w-100" />
        </div>
      </div>
      <div className="aboutBooksLand section3">
        <Grid container alignItems="end">
          <Grid item md={6}>
            <h3 className="heading-2">
              About
              <br />
              The Book Land
            </h3>
          </Grid>
          <Grid item md={6}>
            <Typography>
              Book Land is a convenient and user-friendly platform that brings
              together the best of modern technology and classic literature,
              making it easy for readers to find and enjoy their next favorite
              book.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="about-author">
          <Grid item sx={12} md={4}>
            <div className="about-image-container">
              <img
                src={AboutImage}
                alt="about section images"
                className="w-75 m-auto"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            className="about-author-right position-relative"
          >
            <Stack direction="row" className="justify-align-center">
              <p className="heading-3">
                The <br />
                Book Land
              </p>
              <Stack>
                <div className="about-section">
                  <Stack direction={"row"} alignItems="center" spacing={1}>
                    <Person fontSize="16px" />
                    <p className="title-small">Author</p>
                  </Stack>
                  <p className="caption-small-bold ml-25">Book Land</p>
                </div>
                <div className="about-section">
                  <Stack direction={"row"} alignItems="center" spacing={1}>
                    <LibraryBooks fontSize="16px" />
                    <p className="title-small">Total</p>
                  </Stack>
                  <p className="caption-small-bold ml-25">16000+ Books</p>
                </div>
              </Stack>
            </Stack>
            <div className="circle big-circle"></div>
            <div className="circle small-circle"></div>
          </Grid>
        </Grid>
      </div>
      <div className="newArrivals section4">
        <Grid container alignItems="center">
          <Grid item xs={6} md={6}>
            <p className="heading-2">New Arrivals</p>
            <p className="title-small ml-5">
              Check out our new arrivals right now.
            </p>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack direction="row" justifyContent={"end"} spacing={2}>
              <IconButton className="iconButton" onClick={handlePrevSlide}>
                <ArrowBack />
              </IconButton>
              <IconButton
                className="iconButton filled"
                onClick={handleNextSlide}
              >
                <ArrowForward />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        <Box className="carousel-container bg-white" padding={"3rem"}>
          <AliceCarousel
            ref={carouselRef}
            touchTracking
            mouseTracking
            disableButtonsControls
            disableDotsControls
            autoPlay
            infinite
            autoPlayInterval={2000}
            responsive={{
              0: {
                items: 1,
              },
              800: {
                items: 2,
              },
              1600: {
                items: 3,
              },
              2700: {
                items: 5,
              },
            }}
            items={arrivalItems.map((item, index) => (
              <BookCard
                key={index}
                bookImage={item.bookImage}
                caption={item.caption}
                price={item.price}
                title={item.title}
              />
            ))}
          />
        </Box>
      </div>
      <div className="padder-container section5">
        <div className="someTopics section5-inner">
          <Grid container spacing={4}>
            <Grid item md={6}>
              <h5 className="heading-small">Some Topics</h5>
              <h2 className="heading-3">
                What's inside
                <br />
                the book
              </h2>
              <p className="title-small">
                These are some topics that can be found inside the Books. There
                are as many topics as many books.
              </p>
              <Grid container spacing={5} marginTop={5}>
                <Grid item md={6}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <BookTopicIcon />
                    <h5 className="topicName">Science Fiction</h5>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <BookTopicIcon />
                    <h5 className="topicName">Fantasy</h5>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <BookTopicIcon />
                    <h5 className="topicName">Philosophy</h5>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <BookTopicIcon />
                    <h5 className="topicName">UI Design</h5>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <BookTopicIcon />
                    <h5 className="topicName">Programming</h5>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <BookTopicIcon />
                    <h5 className="topicName">Astrology</h5>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <img className="w-100" src={TopicsImage} alt="Books" />
            </Grid>
          </Grid>
        </div>
        <Divider />

        <div className="readNow section5-inner">
          <div className="readNow-container">
            <span className="small-white-caption">Read Now</span>
            <h3 className="heading">
              Stop Thinking And Find The Book Right Now
            </h3>

            <Button
              className="white-filled-btn"
              onClick={() => navigate("/books")}
            >
              Find Books
            </Button>

            <div className="img-container">
              <img src={PencilImage} alt="Pencil" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
