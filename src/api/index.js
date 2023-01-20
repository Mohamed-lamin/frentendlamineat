import axios from "axios"

const url = "https://lamineatbackend-lamineat.onrender.com/plats"

export const fetchPlats = () => axios.get(url)
export const createPlat = newPlatPost => axios.post(url, newPlatPost)
