import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRestaurant } from "../../actions/Restaurant"
import {
  deletePlat,
  getRestaurantPlats,
} from "../../actions/PostsResaurantPlats"
import Platform from "../Platform/Platform"
import RestaurantPlats from "../RestaurantPlats/RestaurantPlats"
import { useHistory, useLocation } from "react-router-dom"
import { getAllCommandes } from "../../actions/commandes"

function Plats() {
  const restaurantID = useSelector(state => state.restaurant)
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const [restaurant, setResaurant] = useState(
    JSON.parse(localStorage.getItem("restaurant"))
  )
  const [currentId, setCurrentId] = useState({ PlatId: "" })
  const [platCurrentId, setPlatCurrentId] = useState(0)
  const restaurantId = restaurant?.result?.userRestaurant?._id
  const dispatch = useDispatch()

  useEffect(() => {
    getRestaurantPlats(restaurantId, dispatch)

    getAllCommandes(dispatch, restaurantId)
  }, [])
  // useEffect(() => {
  //   dispatch(deletePlat(restaurantId, currentId))
  //   console.log(currentId)
  // }, [currentId, dispatch, restaurantId])
  // useEffect(() => {
  //   setResaurantId()
  //   console.log(restaurantId)
  // }, [])
  // useEffect(() => {
  //   dispatch(getRestaurantPlats(restaurantId))
  // }, [restaurantId, dispatch])
  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("profile"))

    if (!isAuth) {
      history.push("/")
    }
  }, [location])
  return (
    <div className="container mx-auto  ">
      <div className="container  flex flex-col-reverse md:flex-row md:justify-between items-center md:items-stretch  ">
        <div className="flex md:flex-1  ">
          <RestaurantPlats
            setCurrentId={setCurrentId}
            setPlatCurrentId={setPlatCurrentId}
            restaurantId={restaurantId}
            platCurrentId={platCurrentId}
          />
        </div>
        <div
          className={`bg-white rounded ${
            platCurrentId
              ? "border-spacing-2 border-orange-600 bg-orange-500"
              : ""
          }`}
          style={{ margin: 0 }}
        >
          <Platform
            restaurantId={restaurantId}
            setPlatCurrentId={setPlatCurrentId}
            platCurrentId={platCurrentId}
          />
        </div>
      </div>
    </div>
  )
}

export default Plats
