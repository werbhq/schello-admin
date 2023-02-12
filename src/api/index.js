import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://us-central1-merit-werb.cloudfunctions.net/serverCall"
    : "http://localhost:5001/merit-werb/us-central1/serverCall";

export const baseApi = axios.create({
  baseURL,
  headers: {},
});
