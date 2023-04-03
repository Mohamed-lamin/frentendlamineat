import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  commandes: [],
}

export const commandeSlice = createSlice({
  name: "commandes",
  initialState,
  reducers: {
    getCommandes: (state, action) => {
      state.commandes = [...action.payload]
    },
    updateCommandes: (state, action) => {
      state.commandes = state.commandes.map(item =>
        item._id === action.payload._id ? action.payload : item
      )
    },
    deleteCommandes: (state, action) => {
      state.commandes = state.commandes.filter(
        item => item._id !== action.payload
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCommandes, updateCommandes, deleteCommandes } =
  commandeSlice.actions

export default commandeSlice.reducer
