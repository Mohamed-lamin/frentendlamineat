import React, { useState } from "react"
import { EllipsisHorizontalIcon, TrashIcon } from "@heroicons/react/24/solid"
import { deletePlat } from "../../actions/PostsResaurantPlats"
import { useDispatch } from "react-redux"
function RestaurantPlat({
  plat,
  setCurrentId,
  setPlatCurrentId,
  restaurantId,
}) {
  const Dispatch = useDispatch()
  // const [restaurantID, setResaurantID] = useState(
  //   JSON.parse(localStorage.getItem("profile")).result?.restaurantUser?._id
  // )

<<<<<<< HEAD
=======
function RestaurantPlat({ plat }) {
  console.log(plat);
>>>>>>> fa3a83a95a1342c4bf8817f37a0273f12202a87f
  return (
    <div className="flex bg-white flex-col h-fit justify-center items-center rounded-md my-2">
      <EllipsisHorizontalIcon
        onClick={() => setPlatCurrentId(plat._id)}
        className="h-8 absolute z-50 w-10 flex mb-52 ml-40 cursor-pointer "
      />
      <img
        className="h-20  md:h-40 w-full rounded-md relative"
        alt="a"
        src={plat.image}
      />
<<<<<<< HEAD

      <div className="flex justify-start w-full flex-col ml-5 ">
=======
      <div className="flex justify-start w-full flex-col ml-5">
>>>>>>> fa3a83a95a1342c4bf8817f37a0273f12202a87f
        <h1 className="text-xl font-bold">{plat.dishname}</h1>
        <p>{plat.description}</p>
      </div>
      <div className="w-full flex justify-end">
        <TrashIcon
          className="h-6 mb-2 mr-5 cursor-pointer"
          onClick={() =>
            Dispatch(deletePlat(restaurantId, { PlatId: plat._id }))
          }
        />
      </div>
    </div>
  )
}

export default RestaurantPlat
