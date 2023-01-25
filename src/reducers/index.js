import { combineReducers } from "redux"

import PostsResaurantPlats from "./PostsRestaurantPlats"
import auth from "./auth"

export default combineReducers({ PostsResaurantPlats, auth })
