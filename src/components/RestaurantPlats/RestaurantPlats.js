import React from "react"
import RestaurantPlat from "./RestaurantPlat"
import { useSelector } from "react-redux"

function RestaurantPlats({
  setCurrentId,
  platCurrentId,
  setPlatCurrentId,
  restaurantId,
}) {
  const Plats = useSelector(state => state.AllThePlats.plats)
  console.log(Plats)
  return (
    <div className="flex flex-wrap    ">
      {Plats.map((plat, index) => (
        <div
          key={plat._id}
          className={`mr-8 w-50 md:w-60 rounded ${
            platCurrentId === plat._id
              ? " border-orange-400 border-solid border-4 "
              : " border-transparent"
          }`}
        >
          <RestaurantPlat
            id={plat._id}
            plat={plat}
            setCurrentId={setCurrentId}
            setPlatCurrentId={setPlatCurrentId}
            platCurrentId={platCurrentId}
            restaurantId={restaurantId}
          />
        </div>
      ))}
    </div>
  )
}

export default RestaurantPlats
