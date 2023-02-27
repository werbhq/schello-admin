import axios from "axios";
import { useFirebaseEmulator } from "../config";

const baseURL =
  process.env.NODE_ENV === "production" || !useFirebaseEmulator
    ? "https://us-central1-merit-werb.cloudfunctions.net/api"
    : "http://localhost:5001/merit-werb/us-central1/api";

export const baseApi = axios.create({
  baseURL,
  headers: {},
});
