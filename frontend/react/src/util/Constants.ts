export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://zoomie-roomies-backend.herokuapp.com"
    : "http://localhost:5000";
