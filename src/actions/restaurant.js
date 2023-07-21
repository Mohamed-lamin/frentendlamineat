import * as api from "../api"
import { theRestaurant } from "../features/authSlice"
import { useHistory } from "react-router-dom"

export const createRestaurant = async (dispatch, restaurant, id, history) => {
  try {
    const { data } = await api.createRestaurant(restaurant, id)

    console.log(data)
    dispatch(theRestaurant(data))
    history.push("/plats")
  } catch (error) {
    console.log(error.message)
  }
}
export const updateRestaurant = async (dispatch, restaurant, id, history) => {
  try {
    const { data } = await api.updateRestaurant(restaurant, id)
    console.log(data)
    dispatch(theRestaurant(data))
    history.push("/plats")
  } catch (error) {
    console.log(error)
  }
}
export const UpdateCatList = (restaurantId, cat) => async dispatch => {
  try {
    const { data } = await api.UpdateCatList(restaurantId, cat)
    console.log(data)
    dispatch({ type: "FETCHALLABOUTRESTAURANT", payload: data })
  } catch (error) {
    console.log(error)
  }
}
