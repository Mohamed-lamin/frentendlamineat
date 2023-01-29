import React, { useState } from "react"
import { useDispatch } from "react-redux"
import FileBase from "react-file-base64"
import { createRestaurant } from "../../actions/Restaurant"
import { useHistory } from "react-router-dom"

function Restaurantinfo() {
  const initial = {
    restaurant_name: "",
    description: "",
    image: "",
    lat: "",
    long: "",
    address: "",
    rating: "",
    category_name: "",
  }
  const dispatch = useDispatch()
  const history = useHistory()
  const [restaurant, setRestaurant] = useState(initial)
  console.log(restaurant)

  const handleSumbit = e => {
    e.preventDefault()
    dispatch(createRestaurant(restaurant, history))
  }

  return (
    <div className="container mx-auto ">
      <form className="flex flex-col h-1/2 items-center justify-around mt-2 md:mt-20">
        <h2 className="text-xl font-bold">Ajouter un plat</h2>
        <input
          className="bg-gray-300 my-2 md:my-10 w-60 rounded py-2 px-2"
          placeholder="Le plat à ajouter"
          name="restaurant_name"
          value={restaurant.restaurant_name}
          onChange={e =>
            setRestaurant({ ...restaurant, restaurant_name: e.target.value })
          }
        />
        <textarea
          className="bg-gray-300 mb-5 md:mb-10 w-60 rounded py-2 px-2"
          name="address"
          rows={3}
          placeholder="Description du plat"
          value={restaurant.address}
          onChange={e =>
            setRestaurant({ ...restaurant, address: e.target.value })
          }
        />
        <textarea
          className="bg-gray-300 mb-5 md:mb-10 w-60 rounded py-2 px-2"
          name="description"
          rows={3}
          placeholder="Description du plat"
          value={restaurant.description}
          onChange={e =>
            setRestaurant({ ...restaurant, description: e.target.value })
          }
        />
        <div className="">
          <FileBase
            type="file"
            multiple={false}
            name="image"
            onDone={({ base64 }) =>
              setRestaurant({ ...restaurant, image: base64 })
            }
          />
        </div>
        <button
          className="my-5 md:my-10 py-1 border-solid border-2 bg-black w-5/12  text-white font-bold rounded-md "
          type="submit"
          onClick={handleSumbit}
        >
          Enregister
        </button>
      </form>
    </div>
  )
}

export default Restaurantinfo
