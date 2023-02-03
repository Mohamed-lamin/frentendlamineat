import React from "react"
import RestaurantPlat from "./RestaurantPlat"
import { useSelector } from "react-redux"

function RestaurantPlats({ setCurrentId, setPlatCurrentId, restaurantId }) {
  const Plats = useSelector(state => state.plats)
  console.log(restaurantId)

  const user = JSON.parse(localStorage.getItem("profile"))
  if (!user) {
    return <h1>""</h1>
  }
  return !Plats ? (
    <h1 className="text-white">Téléchargement...</h1>
  ) : (
    <div className="flex flex-wrap justify-start space-x-2">
      {Plats.map((plat, index) => (
        <div key={plat._id} className="w-50 md:w-60">
          <RestaurantPlat
            plat={plat}
            setCurrentId={setCurrentId}
            setPlatCurrentId={setPlatCurrentId}
            restaurantId={restaurantId}
          />
        </div>
      ))}
    </div>
  )
}

export default RestaurantPlats
