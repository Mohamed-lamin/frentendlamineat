import { configureStore } from "@reduxjs/toolkit"
import User from "./features/authSlice"
import Plats from "./features/platSlice"
import Commandes from "./features/commandeSlice"
export const store = configureStore({
  reducer: {
    authenticatedUser: User,
    AllThePlats: Plats,
    AllCommandes: Commandes,
  },
})
