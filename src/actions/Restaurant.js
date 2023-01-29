import * as api from "../api"
export const createRestaurant = (restaurant, history) => async dispatch => {
  try {
    const { data } = await api.createRestaurant(restaurant)
    dispatch({ type: "CREATERestaurant", payload: data })
    history.push("/auth")
  } catch (error) {
    console.log(error)
  }
}
export const getAllRestaurant = () => async dispatch => {
  try {
    const { data } = await api.AllAboutRestaurant()
    dispatch({ type: "FETCHALLABOUTRESTAURANT", payload: data })
  } catch (error) {
    console.log(error)
  }
}
