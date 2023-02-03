import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import FileBase from "react-file-base64"
import { createRestaurant } from "../../actions/Restaurant"
import { useHistory } from "react-router-dom"

function Restaurantinfo() {
  const initial = {
    restaurant_name: "",
    description: "",
    image: "",
    lat: "52",
    long: "52",
    address: "",
    rating: "5",
    category_name: "Test",
  }
  const dispatch = useDispatch()
  const history = useHistory()
  const [restaurant, setRestaurant] = useState(initial)
  const [id, setId] = useState("")

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"))
    setId(user.result._id)
    console.log(id)
  }, [])
  const handleSumbit = e => {
    e.preventDefault()
    dispatch(createRestaurant(restaurant, id, history))
  }
  console.log(restaurant)
  return (
    <div className="container mx-auto flex justify-center">
      <form className="flex w-1/2 flex-col h-1/2 items-center justify-around mt-2 md:mt-20 border-2  border-white">
        <h2 className="text-xl text-white font-bold">
          Entrer les informations de votre restaurant
        </h2>
        <input
          className="bg-gray-300 my-2 md:my-10 w-60 rounded py-2 px-2"
          placeholder="Nom du restaurant"
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
          placeholder="Adresse du restaurant"
          value={restaurant.address}
          onChange={e =>
            setRestaurant({ ...restaurant, address: e.target.value })
          }
        />
        <textarea
          className="bg-gray-300 mb-5 md:mb-5 w-60 rounded py-2 px-2"
          name="description"
          rows={3}
          placeholder="Description"
          value={restaurant.description}
          onChange={e =>
            setRestaurant({ ...restaurant, description: e.target.value })
          }
        />

        <label for="categorie" className="font-bold text-sm text-white">
          Selectionnez une categorie
        </label>
        <select
          className="mb-10 w-1/5 rounded"
          name="category_name"
          id="categorie"
          onChange={e =>
            setRestaurant({ ...restaurant, category_name: e.target.value })
          }
        >
          <option value="traditional">Traditionel</option>
          <option value="local">Local</option>
          <option value="americain">Americain</option>
          <option value="italien">Italien</option>
          <option value="japanais">Japanais</option>
          <option value="lebanaise">Lebanaise</option>
          <option value="chinois">Chinois</option>
        </select>

        <div className="text-white">
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
          className="my-5 md:my-10 py-1 border-solid border-2 bg-black w-1/5  text-white font-bold rounded-md "
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
