import axios from "axios";

export const searchBooks = async ({search, maxLimit, startIndex}) => {
  // Set up the API endpoint for searching books

  // making a request with axios
  return axios
    .get('https://www.googleapis.com/books/v1/volumes?q='+search+`&key=AIzaSyApPSq1RNAGNZku1TlJagnQJb_liVc2O90&startIndex=${startIndex}&maxResults=${maxLimit}`).then((response) => {
      if (response) {
        return response.data;
      }
    });
};

export const getBookById = async (id) => {
  // Set up the API endpoint for getting specific books

  // making a request with axios
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}`).then((response) => {
      if (response) {
        return response.data;
      }
    });
};
