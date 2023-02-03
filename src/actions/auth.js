import * as api from "../api/index"

export const signin = (form, history) => async dispatch => {
  try {
    const { data } = await api.signIn(form)
    dispatch({ type: "AUTH", data })
    history.push("/plats")
  } catch (error) {
    console.log(error)
  }
}
export const signup = (form, history) => async dispatch => {
  try {
    const { data } = await api.signUn(form)
    dispatch({ type: "AUTH", data })
    history.push("/restaurantinfo")
  } catch (error) {
    console.log(error)
  }
}
