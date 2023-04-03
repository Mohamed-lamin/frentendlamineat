import axios from "axios"

// const url = "https://lamineatbackend-lamineat.onrender.com"
const url = "http://localhost:5000"
// const url = process.env.REACT_APP_BASE_URL
const API = axios.create({
  baseURL: url,
})

API.interceptors.request.use(req => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`
  }
  return req
})
// Plats
export const fetchPlats = restaurantId =>
  API.get(`/restaurant/plats/${restaurantId}`)
export const createPlat = (newPlatPost, restaurantId) =>
  API.post(`/restaurant/plats/${restaurantId}`, newPlatPost)
export const deletePlat = (restaurantId, currentId) =>
  API.post(`/restaurant/deleteplat/${restaurantId}`, currentId)
export const updatePlat = (restaurantId, form) =>
  API.patch(`/restaurant/updateplat/${restaurantId}`, form)
// Commandes
export const getAllCommandes = restaurantId =>
  API.get(`/commandes/${restaurantId}`)
export const updatedCommand = (restaurantId, postCommand) =>
  API.post(`/updatecommand/${restaurantId}`, postCommand)
export const deleteCommand = (restaurantId, postCommand) =>
  API.post(`/deletecommand/${restaurantId}`, postCommand)
//CreateRestaurant
export const createRestaurant = (restaurant, userId) =>
  API.post(`/restaurant/${userId}`, restaurant)
// updateRestaurant
export const updateRestaurant = (restaurant, userId) =>
  API.patch(`/restaurant/${userId}`, restaurant)

export const AllAboutRestaurant = () => API.get(`plats/restaurants`)

// Auth

export const signIn = form => API.post(`/signin`, form)
export const signUp = form => API.post(`/signup`, form)

// Update CatList

export const UpdateCatList = (restaurantId, cat) =>
  API.post(`/type/${restaurantId}`, cat)
