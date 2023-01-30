import * as api from "../api"

export const getRestaurantPlats = () => async dispatch => {
  try {
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
    console.log(data)
    dispatch({ type: "CREATE", payload: data })
  } catch (error) {
    console.log(error)
  }
}
