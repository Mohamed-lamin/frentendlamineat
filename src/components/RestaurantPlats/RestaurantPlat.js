import React from "react"

function RestaurantPlat({ plat }) {
  console.log(plat);
  return (
    <div className="flex bg-white flex-col h-fit justify-center items-center rounded-md my-2">
      <img
        className="h-20  md:h-40 w-full rounded-md"
        alt=""
        src={plat.image}
      />
      <div className="flex justify-start w-full flex-col ml-5">
        <h1 className="text-xl font-bold">{plat.dishname}</h1>
        <p>{plat.description}</p>
      </div>
    </div>
  )
}

export default RestaurantPlat
