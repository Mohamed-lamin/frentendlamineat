import React from "react"
import RestaurantPlat from "./RestaurantPlat"
import { useSelector } from "react-redux"

function RestaurantPlats() {
  const PostsRestaurantPlats = useSelector(state => state.PostsResaurantPlats)
  const user = JSON.parse(localStorage.getItem("profile"))
  if (!user) {
    return <h1>""</h1>
  }
  return !PostsRestaurantPlats.length ? (
    <h1 className="text-white">Téléchargement...</h1>
  ) : (
    <div className="flex flex-wrap justify-start space-x-2">
      {PostsRestaurantPlats.map((plat, index) => (
        <div key={index} className="w-50 md:w-60">
          <RestaurantPlat plat={plat} />
        </div>
      ))}
    </div>
  )
}

export default RestaurantPlats
