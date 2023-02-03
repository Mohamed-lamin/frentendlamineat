import { combineReducers } from "redux"

import plats from "./PostsRestaurantPlats"
import auth from "./auth"
import restaurant from "./restaurant"

export default combineReducers({ plats, auth, restaurant })
