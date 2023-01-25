import axios from "axios"

// const url = "https://lamineatbackend-lamineat.onrender.com"
const url = "http://localhost:5000"
const API = axios.create({ baseURL: url })

API.interceptors.request.use(req => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`
  }
  return req
})
export const fetchPlats = () => API.get("/plats")
export const createPlat = newPlatPost => API.post("/plats", newPlatPost)

// Auth

export const signIn = form => API.post(`/user/signin`, form)
export const signUn = form => API.post(`/user/signup`, form)
