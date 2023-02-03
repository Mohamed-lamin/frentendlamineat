import React from "react"
import RestaurantPlat from "./RestaurantPlat"
import { useSelector } from "react-redux"

<<<<<<< HEAD
function RestaurantPlats({ setCurrentId, setPlatCurrentId, restaurantId }) {
  const Plats = useSelector(state => state.plats)
  console.log(restaurantId)

=======
function RestaurantPlats() {
  const PostsRestaurantPlats = useSelector(state => state.PostsResaurantPlats)
console.log(PostsRestaurantPlats);
>>>>>>> fa3a83a95a1342c4bf8817f37a0273f12202a87f
  const user = JSON.parse(localStorage.getItem("profile"))
  if (!user) {
    return <h1>""</h1>
  }
  return !Plats ? (
    <h1 className="text-white">Téléchargement...</h1>
  ) : (
    <div className="flex flex-wrap justify-start space-x-2">
<<<<<<< HEAD
      {Plats.map((plat, index) => (
        <div key={plat._id} className="w-50 md:w-60">
          <RestaurantPlat
            plat={plat}
            setCurrentId={setCurrentId}
            setPlatCurrentId={setPlatCurrentId}
            restaurantId={restaurantId}
          />
=======
      {PostsRestaurantPlats.map((item, index) => (
        <div key={index} className="w-50 md:w-60">
          <RestaurantPlat plat={item} />
>>>>>>> fa3a83a95a1342c4bf8817f37a0273f12202a87f
        </div>
      ))}
    </div>
  )
}

export default RestaurantPlats
