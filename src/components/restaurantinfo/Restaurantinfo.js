import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import FileBase from "react-file-base64"
import { createRestaurant, updateRestaurant } from "../../actions/Restaurant"
import { useHistory } from "react-router-dom"

function Restaurantinfo() {
  const initial = {
    restaurant_name: "",
    description: "",
    image: "",
    lat: "52",
    long: "52",
    numero: "",
    rue: "",
    ville: "",
    codepostal: "",
    rating: "5",
    category_name: "",
  }
  const dispatch = useDispatch()
  const history = useHistory()
  const [restaurant, setRestaurant] = useState(initial)
  const [id, setId] = useState("")
  const [restV, setRestV] = useState("")

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"))
    const restaurantVerification = JSON.parse(
      localStorage.getItem("restaurant")
    )
    setId(user?.result?._id)
    setRestV(restaurantVerification)
    let verifRestaurant = JSON.parse(localStorage.getItem("restaurant"))
    if (verifRestaurant?.result) {
      setRestaurant(verifRestaurant?.result?.userRestaurant)
    }
  }, [])
  console.log(restaurant)
  const handleSumbit = e => {
    e.preventDefault()
    createRestaurant(dispatch, restaurant, id, history)
  }
  const UpdateRestaurant = e => {
    e.preventDefault()
    updateRestaurant(dispatch, restaurant, id, history)
  }

  return (
    <div className="container mx-auto flex justify-center items-start ">
      <form className="flex w-1/2 flex-col h-1/2 items-center justify-around mt-2 bg-white rounded border-2  border-white">
        <h2 className="text-xl mt-5 font-bold">
          Entrer les informations de votre restaurant
        </h2>
        <div className="flex flex-col mt-5">
          <label>Nom du restaurant</label>
          <input
            className="bg-gray-300 my-1 md:mb-3 w-60 rounded py-2 px-2"
            placeholder="Nom du restaurant"
            name="restaurant_name"
            value={restaurant?.restaurant_name}
            onChange={e =>
              setRestaurant({ ...restaurant, restaurant_name: e.target.value })
            }
          />
        </div>

        {/* <textarea
          className="bg-gray-300 mb-5 md:mb-10 w-60 rounded py-2 px-2"
          name="address"
          rows={3}
          placeholder="Adresse du restaurant"
          value={restaurant.address}
          onChange={e =>
            setRestaurant({ ...restaurant, address: e.target.value })
          }
        /> */}
        <div className="flex flex-col">
          <div className="w-fit flex space-x-1">
            <div className="flex flex-col">
              <label>N°</label>
              <input
                className="bg-gray-300 my-1 md:mb-3 w-10 rounded py-2 px-2"
                name="numero"
                placeholder="N°"
                type="number"
                onChange={e =>
                  setRestaurant({
                    ...restaurant,
                    numero: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label>Rue</label>
              <input
                className="bg-gray-300 my-1 md:mb-3 w-50 rounded py-2 px-2"
                name="rue"
                placeholder="Rue"
                onChange={e =>
                  setRestaurant({
                    ...restaurant,
                    rue: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="w-fit flex space-x-1">
            <div className="flex flex-col">
              <label>Ville</label>
              <input
                className="bg-gray-300 my-1 md:mb-3 w-20 rounded py-2 px-2"
                name="ville"
                placeholder="Ville"
                onChange={e =>
                  setRestaurant({
                    ...restaurant,
                    ville: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label>Code Postal</label>
              <input
                className="bg-gray-300 my-1 md:mb-3 w-40 rounded py-2 px-2"
                name="codepostal"
                Placeholder="Code Postal"
                onChange={e =>
                  setRestaurant({
                    ...restaurant,
                    codepostal: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            className="bg-gray-300 mb-5 md:mb-3 mt-2 w-60 rounded py-2 px-2"
            name="description"
            rows={3}
            placeholder="Description"
            value={restaurant?.description}
            onChange={e =>
              setRestaurant({ ...restaurant, description: e.target.value })
            }
          />
        </div>

        <label for="categorie" className="font-bold text-sm text-black">
          Selectionnez une categorie
        </label>
        <select
          className="mb-5 w-1/5 rounded bg-gray-200"
          name="category_name"
          id="categorie"
          onChange={e =>
            setRestaurant({ ...restaurant, category_name: e.target.value })
          }
        >
          <option value="Traditional">Traditionel</option>
          <option value="Local">Local</option>
          <option value="Americain">Americain</option>
          <option value="Italien">Italien</option>
          <option value="Japanais">Japanais</option>
          <option value="Lebanaise">Lebanaise</option>
          <option value="Chinois">Chinois</option>
        </select>

        <div className="text-black">
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
          className=" md:mt-5 py-1 border-solid border-2 bg-black w-1/5  text-white font-bold rounded-md "
          type="submit"
          onClick={!restV ? handleSumbit : UpdateRestaurant}
        >
          {restV ? "Mettre à jour" : "Enregistrer"}
        </button>
        {restV && (
          <button
            className=" md:my-1 py-1 border-solid border-2 bg-black w-1/5  text-white font-bold rounded-md "
            onClick={() => history.push("/plats")}
          >
            Annuler
          </button>
        )}
      </form>
    </div>
  )
}

export default Restaurantinfo
