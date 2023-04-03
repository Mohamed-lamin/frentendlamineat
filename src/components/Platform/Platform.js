import { PaperAirplaneIcon, PlusIcon } from "@heroicons/react/24/solid"
import React, { useEffect, useState } from "react"
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"
import {
  createResaurantPlats,
  getRestaurantPlats,
  updatePlat,
} from "../../actions/PostsResaurantPlats"

function RestaurantForm({ restaurantId, setPlatCurrentId, platCurrentId }) {
  const plat = useSelector(state =>
    platCurrentId
      ? state.AllThePlats.plats?.find(plat => plat._id === platCurrentId)
      : null
  )
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    dishname: "",
    price: "",
    category: [],
    description: "",
    image: "",
  })
  const resetUpdate = () => {
    setPlatCurrentId(0)
  }
  const [showcategory, setShowcategory] = useState(false)
  // const user = JSON.parse(localStorage.getItem("profile"))
  const clear = e => {
    setPlatCurrentId(0)
    setPostData({
      dishname: "",
      price: "",
      category: [],
      description: "",
      image: "",
    })
  }
  const clearAnunuler = e => {
    e.preventDefault()
    setPlatCurrentId(0)
    setPostData({
      dishname: "",
      price: "",
      category: [],
      description: "",
      image: "",
    })
  }

  useEffect(() => {
    if (plat) {
      setPostData(plat)
    }
  }, [plat])
  const handleSumbit = e => {
    e.preventDefault()
    if (platCurrentId === 0) {
      createResaurantPlats(dispatch, restaurantId, postData)
      clear()
    } else {
      updatePlat(dispatch, restaurantId, postData)
      clear()
    }
  }
  console.log(postData)
  // useEffect(() => {
  //   dispatch(getRestaurantPlats(restaurantId))
  // }, [dispatch])
  return (
    <div className="container mx-auto ">
      <form className="flex flex-col h-1/2 items-center  mt-2 md:mt-10">
        <h2 className="text-xl font-bold">{`${
          platCurrentId ? "Mettre à jour" : "Ajouter un plat"
        }`}</h2>
        <div className="flex flex-col mt-10">
          <label>Nom du plat</label>
          <input
            className="bg-gray-300 my-2 md: w-60 rounded py-2 px-2"
            placeholder="Nom du plat"
            name="dishname"
            value={postData.dishname}
            onChange={e =>
              setPostData({ ...postData, dishname: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label>Prix</label>
          <input
            className="bg-gray-300 my-2 md:mb-2 w-60 rounded py-2 px-2"
            placeholder="Le prix"
            name="price"
            type="number"
            value={postData.price}
            onChange={e => setPostData({ ...postData, price: e.target.value })}
          />
        </div>
        <div className="flex w-60 flex-col items-center">
          <div className=" flex self-start">
            <label>Catégories</label>
            <PlusIcon
              className=" p-1 h-8 w-8 relative"
              onClick={() => setShowcategory(true)}
            />
          </div>
          {(showcategory || plat) && (
            <div className="absolute flex justify-end items-center">
              <input
                className="bg-gray-300 my-2 md:mb-2 w-60 rounded py-2 px-2  z-50 relative"
                placeholder="Séparez les par (,)"
                name="category"
                // type="number"
                value={postData.category}
                onChange={e =>
                  setPostData({
                    ...postData,
                    category: e.target.value.split(","),
                  })
                }
              />
              <PaperAirplaneIcon
                className="h-7 w-7 absolute z-50"
                onClick={() => setShowcategory(false)}
              />
            </div>
          )}
          {!showcategory && (
            <div className=" mb-2 w-full flex flex-wrap">
              {postData.category.map(it => (
                <div className="mx-0.5 bg-orange-400 rounded-md p-0.5">
                  {/* <div> */}
                  <h1>{it}</h1>
                  {/* </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            className="bg-gray-300 mb-5 md:mb-3 w-60 rounded py-2 px-2"
            name="description"
            rows={5}
            placeholder="Description du plat"
            value={postData.description}
            onChange={e =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </div>

        <div className="">
          <FileBase
            type="file"
            multiple={false}
            name="image"
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
        </div>
        <button
          className="mt-5 mb-2 md:mt-10 py-1 border-solid border-2 bg-black w-5/12  text-white font-bold rounded-md "
          type="submit"
          onClick={handleSumbit}
        >
          {`${platCurrentId ? "Mettre à jour" : "Enregistrer"}`}
        </button>

        <button
          className={`my-1 py-1 border-solid border-2 bg-black w-5/12 ${
            platCurrentId ? "block" : "hidden"
          } text-white font-bold rounded-md`}
          onClick={clearAnunuler}
        >
          Annuler
        </button>
      </form>
    </div>
  )
}

export default RestaurantForm
