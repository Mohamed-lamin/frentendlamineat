import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  plats: [],
}

export const platSlice = createSlice({
  name: "plats",
  initialState,
  reducers: {
    theDishes: (state, action) => {
      state.plats = action.payload
    },
    addDishes: (state, action) => {
      state.plats = [...state.plats, action.payload]
    },
    removeDishes: (state, action) => {
      state.plats = state.plats.filter(plat =>
        plat._id !== action.payload.id ? plat : null
      )
    },
    updateDishes: (state, action) => {
      state.plats = state.plats.map(plat =>
        plat._id !== action.payload._id ? plat : action.payload
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { theDishes, addDishes, removeDishes, updateDishes } =
  platSlice.actions

export default platSlice.reducer
