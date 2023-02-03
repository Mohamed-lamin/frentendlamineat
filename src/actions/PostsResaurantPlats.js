import * as api from "../api"

export const getRestaurantPlats = restaurantId => async dispatch => {
  try {
<<<<<<< HEAD
    const { data } = await api.fetchPlats(restaurantId)
=======
    const { data } = await api.fetchPlats()
    dispatch({ type: "FETCHALL", payload: data })
  } catch (error) {
    console.log(error);
  }
  // const action={type:'FETCHALL', payload:[]}
}

export const createResaurantPlats = newPlat => async dispatch => {
  try {
    const { data } = await api.createPlat(newPlat)
>>>>>>> fa3a83a95a1342c4bf8817f37a0273f12202a87f
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
