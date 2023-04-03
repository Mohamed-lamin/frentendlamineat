import * as api from "../api"
import {
  deleteCommandes,
  getCommandes,
  updateCommandes,
} from "../features/commandeSlice"

export const getAllCommandes = async (dispatch, restaurantId) => {
  try {
    const { data } = await api.getAllCommandes(restaurantId)
    console.log(data)
    dispatch(getCommandes(data))
  } catch (error) {
    console.log(error)
  }
}
export const updateCommand = async (dispatch, restaurantId, postCommand) => {
  try {
    const { data } = await api.updatedCommand(restaurantId, postCommand)
    console.log(data)
    dispatch(updateCommandes(data))
  } catch (error) {
    console.log(error)
  }
}
export const deleteCommand = async (dispatch, restaurantId, postCommand) => {
  try {
    const { data } = await api.deleteCommand(restaurantId, postCommand)
    console.log(data)
    dispatch(deleteCommandes(data))
  } catch (error) {
    console.log(error)
  }
}
