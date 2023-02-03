import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRestaurant } from "../../actions/Restaurant"
import {
  deletePlat,
  getRestaurantPlats,
} from "../../actions/PostsResaurantPlats"
import RestaurantForm from "../RestaurantForm/RestaurantForm"
import RestaurantPlats from "../RestaurantPlats/RestaurantPlats"
import { useHistory, useLocation } from "react-router-dom"

function Plats() {
  const restaurantID = useSelector(
    state => state.restaurant?.restaurantUser._id
  )
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const [restaurantId, setResaurantId] = useState()
  const [currentId, setCurrentId] = useState({ PlatId: "" })
  const [platCurrentId, setPlatCurrentId] = useState(0)
  console.log(restaurantId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurantPlats(restaurantId))
  }, [dispatch, restaurantId, currentId, platCurrentId])
  // useEffect(() => {
  //   dispatch(deletePlat(restaurantId, currentId))
  //   console.log(currentId)
  // }, [currentId, dispatch, restaurantId])
  useEffect(() => {
    restaurantID
      ? setResaurantId(restaurantID)
      : setResaurantId(user?.result?.restaurantUser?._id)
  }, [restaurantId, user])
  useEffect(() => {
    dispatch(getRestaurantPlats(restaurantId))
  }, [restaurantId, dispatch])
  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("profile"))

    if (!isAuth) {
      history.push("/")
    }
  }, [location])
  return (
    <div className="container mx-auto  ">
      <div className="container  flex flex-col-reverse md:flex-row md:justify-between items-center md:items-stretch space-x-5 ">
        <div className="flex md:flex-1  ">
          <div className="">
            <RestaurantPlats
              setCurrentId={setCurrentId}
              setPlatCurrentId={setPlatCurrentId}
              restaurantId={restaurantId}
            />
          </div>
        </div>
        <div className="bg-white rounded" style={{ margin: 0 }}>
          <RestaurantForm
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