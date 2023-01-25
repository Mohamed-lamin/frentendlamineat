import * as api from "../api/index"

export const signin = (form, history) => async dispatch => {
  try {
    const { data } = await api.signIn(form)
    dispatch({ type: "AUTH", data })
    history.push("/auth")
  } catch (error) {}
}
export const signup = (form, history) => async dispatch => {
  try {
    const { data } = await api.signUn(form)
    dispatch({ type: "AUTH", data })
    history.push("/auth")
  } catch (error) {}
}
