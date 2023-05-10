import axios from "axios";

const API_URL = "https://cute-jade-cockroach-veil.cyclic.app/api/";

export const signup = async (body) => {
  const postUrl = API_URL + "signup";

  // making a request with axios
  return axios
    .post(postUrl, body, {
      headers: {
        Authorization: "Bearer token",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
};

export const login = async (data) => {
  const postUrl = API_URL + "login";

  // making a request with axios
  return axios
    .post(postUrl, data, {
      headers: {
        Authorization: "Bearer token",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
};
