import * as api from "../api"
import {
  addDishes,
  removeDishes,
  theDishes,
  updateDishes,
} from "../features/platSlice"

export const getRestaurantPlats = async (restaurantId, dispatch) => {
  try {
    const { data } = await api.fetchPlats(restaurantId)
    console.log(data)
    dispatch(theDishes(data))
  } catch (error) {
    console.log(error)
  }
}

export const createResaurantPlats = async (dispatch, restaurantId, newPlat) => {
  try {
    const { data } = await api.createPlat(newPlat, restaurantId)
    console.log(data)
    dispatch(addDishes(data))
  } catch (error) {
    console.log(error)
  }
}
export const deletePlat = async (dispatch, restaurantId, currentId) => {
  try {
    const { data } = await api.deletePlat(restaurantId, currentId)
    console.log(data)
    dispatch(removeDishes(data))
  } catch (error) {
    console.log(error)
  }
}
export const updatePlat = async (dispatch, restaurantId, form) => {
  try {
    const { data } = await api.updatePlat(restaurantId, form)
    console.log(data)
    dispatch(updateDishes(data))
  } catch (error) {
    console.log(error.message)
  }
}
