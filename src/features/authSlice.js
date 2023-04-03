import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  auth: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    theUser: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }))
      state.auth = action.payload
    },
    theRestaurant: (state, action) => {
      localStorage.setItem("restaurant", JSON.stringify({ ...action?.payload }))
      state.auth = action.payload
    },
    logout: (state, action) => {
      localStorage.clear()
      state.auth = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { theUser, theRestaurant, logout } = authSlice.actions

export default authSlice.reducer
