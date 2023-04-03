import { useDispatch } from "react-redux"
import * as api from "../api/index"
import { theUser } from "../features/authSlice"

export const signin = async form => {
  try {
    const { data } = await api.signIn(form)
  } catch (error) {
    console.log(error)
  }
}
export const signup = (form, history) => async dispatch => {
  try {
    const { data } = await api.signUp(form)
    dispatch({ type: "AUTH", data })
    history.push("/restaurantinfo")
  } catch (error) {
    console.log(error)
  }
}
