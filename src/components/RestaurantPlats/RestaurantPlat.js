import React, { useState } from "react"
import { EllipsisHorizontalIcon, TrashIcon } from "@heroicons/react/24/solid"
import { deletePlat } from "../../actions/PostsResaurantPlats"
import { useDispatch } from "react-redux"
function RestaurantPlat({ plat, id, setPlatCurrentId, restaurantId }) {
  const dispatch = useDispatch()

  // const [restaurantID, setResaurantID] = useState(
  //   JSON.parse(localStorage.getItem("profile")).result?.restaurantUser?._id
  // )

  return (
    <div
      key={id}
      className="flex bg-white flex-col  justify-center  items-center rounded-md my-2"
    >
      <EllipsisHorizontalIcon
        onClick={() => setPlatCurrentId(plat._id)}
        className="h-6 rounded-md bg-white absolute z-50 w-10 flex mb-60 ml-44 cursor-pointer"
      />
      <img
        className="h-20  md:h-40 w-full rounded-t-md relative"
        alt="a"
        src={plat.image}
      />

      <div className="flex justify-start w-full flex-col ml-5 ">
        <h1 className="text-xl font-bold">{plat.dishname}</h1>
        <h1 className="text-xl font-bold">{plat.price} €</h1>
        <div className="flex flex-wrap space-x-1">
          {plat.category.map(ca => (
            <h1 className="">
              {ca}
              {plat.category.indexOf(ca) === 1 ||
              plat.category.indexOf(ca) === plat.category.length - 1
                ? ""
                : "|"}
            </h1>
          ))}
        </div>

        <p>{plat.description}</p>
      </div>
      <div className="w-full flex justify-end">
        <TrashIcon
          className="h-6 mb-2 mr-5 cursor-pointer"
          onClick={() =>
            deletePlat(dispatch, restaurantId, { PlatId: plat._id })
          }
        />
      </div>
    </div>
  )
}

export default RestaurantPlat
