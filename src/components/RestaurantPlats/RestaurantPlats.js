import React from "react"
import RestaurantPlat from "./RestaurantPlat"
import { useSelector } from "react-redux"

function RestaurantPlats() {
  const PostsRestaurantPlats = useSelector(state => state.PostsResaurantPlats)
  console.log(PostsRestaurantPlats)
  return !PostsRestaurantPlats.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="flex flex-wrap justify-start space-x-2">
      {PostsRestaurantPlats.map(plat => (
        <div className="w-60">
          <RestaurantPlat plat={plat} />
        </div>
      ))}
    </div>
  )
}

export default RestaurantPlats
