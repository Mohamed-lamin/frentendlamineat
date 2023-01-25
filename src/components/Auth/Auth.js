import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getRestaurantPlats } from "../../actions/PostsResaurantPlats"
import RestaurantForm from "../RestaurantForm/RestaurantForm"
import RestaurantPlats from "../RestaurantPlats/RestaurantPlats"

function Auth() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRestaurantPlats())
  }, [dispatch])
  return (
    <div className="container mx-auto">
      <div className="container flex justify-between items-stretch space-x-5">
        <div className="flex flex-1  ">
          <div className="">
            <RestaurantPlats />
          </div>
        </div>
        <div className="bg-white rounded">
          <RestaurantForm />
        </div>
      </div>
    </div>
  )
}

export default Auth