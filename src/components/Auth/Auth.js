import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllRestaurant } from "../../actions/Restaurant"
import { getRestaurantPlats } from "../../actions/PostsResaurantPlats"
import RestaurantForm from "../RestaurantForm/RestaurantForm"
import RestaurantPlats from "../RestaurantPlats/RestaurantPlats"

function Auth() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRestaurantPlats())
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllRestaurant())
    dispatch(getRestaurantPlats())
  },[])
  return (
    <div className="container mx-auto  ">
      <div className="container  flex flex-col-reverse md:flex-row md:justify-between items-center md:items-stretch space-x-5 ">
        <div className="flex md:flex-1  ">
          <div className="">
            <RestaurantPlats />
          </div>
        </div>
        <div className="bg-white rounded" style={{ margin: 0 }}>
          <RestaurantForm />
        </div>
      </div>
    </div>
  )
}

export default Auth
