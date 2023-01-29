import React, { useState } from "react"
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux"
import { createResaurantPlats } from "../../actions/PostsResaurantPlats"

function RestaurantForm() {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    dishname: "",
    description: "",
    image: "",
  })

  const user = JSON.parse(localStorage.getItem("profile"))
  const clear = () => {
    setPostData({
      dishname: "",
      description: "",
      image: "",
    })
  }
  const handleSumbit = e => {
    e.preventDefault()
    dispatch(createResaurantPlats(postData))
    clear()
  }

  return (
    <div className="container mx-auto ">
      <form className="flex flex-col h-1/2 items-center justify-around mt-2 md:mt-20">
        <h2 className="text-xl font-bold">Ajouter un plat</h2>
        <input
          className="bg-gray-300 my-2 md:my-10 w-60 rounded py-2 px-2"
          placeholder="Le plat à ajouter"
          name="dishname"
          value={postData.dishname}
          onChange={e => setPostData({ ...postData, dishname: e.target.value })}
        />
        <textarea
          className="bg-gray-300 mb-5 md:mb-10 w-60 rounded py-2 px-2"
          name="description"
          rows={5}
          placeholder="Description du plat"
          value={postData.description}
          onChange={e =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <div className="">
          <FileBase
            type="file"
            multiple={false}
            name="image"
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
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

export default RestaurantForm
