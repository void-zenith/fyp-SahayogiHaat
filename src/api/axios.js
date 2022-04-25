import axios from "axios";

const baseURL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: localStorage.getItem("accesstoken")
      ? `Bearer ${localStorage.getItem("accesstoken")}`
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (typeof error.response === "undefined") {
      console.log("internal server error");
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      window.location.href = "/login";
      return Promise.reject(error);
    }
    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      axiosInstance.post("/logout");
      window.location.href = "/login";
    }
  }
);
