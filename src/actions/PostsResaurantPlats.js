import * as api from "../api"

export const getRestaurantPlats = restaurantId => async dispatch => {
  try {
    const { data } = await api.fetchPlats(restaurantId)
    console.log(data)
    dispatch({ type: "FETCHALL", payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createResaurantPlats =
  (newPlat, restaurantId) => async dispatch => {
    try {
      const { data } = await api.createPlat(newPlat, restaurantId)
      dispatch({ type: "CREATE", payload: data })
    } catch (error) {
      console.log(error)
    }
  }
export const deletePlat = (restaurantId, currentId) => async dispatch => {
  try {
    const { data } = await api.deletePlat(restaurantId, currentId)
    console.log(data)
    dispatch({ type: "DELETE", payload: data })
  } catch (error) {
    console.log(error)
  }
}
export const updatePlat = (restaurantId, form) => async dispatch => {
  try {
    const { data } = await api.updatePlat(restaurantId, form)
    console.log(data)
    dispatch({ type: "UPDATE", payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
