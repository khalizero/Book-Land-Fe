import React, { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

import { getBookById, searchBooks } from "../services/googleApi";

import TextInput from "../components/common/TextInput";
import "../styles/books.scss";
import { Button, Grid, Box, Pagination } from "@mui/material";

import { Search } from "@mui/icons-material";

import WebBook from "../components/ui/webbook/WebBook";
import Loading from "../components/ui/Loading";
import { checkObjectValues } from "../utils/vaildations";
import Summary from "../components/common/Modals/Summary";

const Books = () => {

  // Setting up the states here
  const [books, setBooks] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [disablePagination, setDisablePagination] = useState(1);
  const [itemsPerPage] = useState(24); // Display 10 books per page
  const [searchData, setSearchData] = useState({
    search: "",
  });

  // Using useApi hooks for calling Apis
  const [isSearchBooksLoading, searchBooksError, searchBooksApiCall] = useApi();
  const [isBookIdLoading, bookIdError, bookIdApiCall] = useApi();

  // This function fetches the books by search
  const fetchBooks = (search, maxLimit, startIndex) => {
    searchBooksApiCall(() =>
      searchBooks({ search, maxLimit, startIndex }).then((data) => {
        if (!searchBooksError) {
          setBooks(data);
        }
      })
    );
  };

  // This function runs when books are searched thorugh search button
  const searchHandler = () => {
    setDisablePagination(false);
    setCurrentPage(1);
    setBooks(false);
    fetchBooks(
      searchData.search,
      itemsPerPage,
      (currentPage - 1) * itemsPerPage
    );
  };

  // This function runs when pagination changes to bring next set of books
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    fetchBooks(searchData.search, itemsPerPage, (value - 1) * itemsPerPage);
    console.log("chnaging");
  };

  // This function is used for getting details of a specific books by passing id
  const fetchbookDetails = (id) => () => {
    setSummaryOpen(true);
    bookIdApiCall(() =>
      getBookById(id).then((data) => {
        if (!bookIdError) {
          setCurrentBook(data);
        }
      })
    );
  };

// This use effect runs whenever search query changes to disable pagination to avoid getting new books from a center page
  useEffect(() => {
    setDisablePagination(true);
  }, [searchData.search]);

  console.log(isSearchBooksLoading);

  return (
    <div className="booksPage">
      <div className="searchBar">
        <Grid container>
          <Grid item xs={10}>
            <TextInput
              value={searchData.search}
              label="Type to search"
              setValue={setSearchData}
              name="search"
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              startIcon={<Search fontWeight={700} />}
              className="w-100 searchBtn"
              onClick={searchHandler}
              disabled={checkObjectValues(searchData)}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
      <Box className="booksArea">
        <Grid container spacing={4}>
          {isSearchBooksLoading ? (
            <Grid item md={12}>
              <Loading />
            </Grid>
          ) : books && books.items ? (
            books.items.length ? (
              books.items.map((item, index) => (
                // rendering webbook with different screen size in mind
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <WebBook
                    key={item.id}
                    id={item.id}
                    info={item?.searchInfo?.textSnippet || "No Info for this"}
                    publishDate={item?.volumeInfo?.publishedDate || "No Date"}
                    thumbnail={item?.volumeInfo?.imageLinks?.thumbnail}
                    title={item?.volumeInfo?.title}
                    onDetails={fetchbookDetails(item.id)}
                  />
                </Grid>
              ))
            ) : (
              // If searched but found nothing - then show this
              <h2>No Such Books Found</h2>
            )
          ) : (
            // If no books then show this
            <Grid item md={12}>
              <h3>Start Searching Books right now.</h3>
            </Grid>
          )}
        </Grid>
        {/* If books are there then showing pagination */}
        {books && books.items && (
          <Pagination
            count={20}
            disabled={disablePagination}
            page={currentPage}
            onChange={handlePageChange}
          />
        )}
      </Box>
      <Summary
        isOpen={summaryOpen}
        setIsOpen={setSummaryOpen}
        isLoading={isBookIdLoading}
        title={currentBook?.volumeInfo?.title}
        description={currentBook?.volumeInfo?.description || 'Sorry, but We have no description for this book.'}
      />
    </div>
  );
};

export default Books;
