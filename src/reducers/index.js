import { combineReducers } from "redux"

import PostsResaurantPlats from "./PostsRestaurantPlats"
import auth from "./auth"
import restaurant from "./restaurantinfo"

export default combineReducers({ PostsResaurantPlats, auth, restaurant })
