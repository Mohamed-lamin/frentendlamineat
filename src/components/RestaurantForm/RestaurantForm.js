import React, { useState } from "react"
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux"
import { createResaurantPlats } from "../../actions/PostsResaurantPlats"

function RestaurantForm() {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    selectedFile: "",
  })
  const user = JSON.parse(localStorage.getItem("profile"))
  const clear = () => {
    setPostData({
      title: "",
      description: "",
      selectedFile: "",
    })
  }
  const handleSumbit = e => {
    e.preventDefault()
    dispatch(createResaurantPlats(postData))
    clear()
  }

  return (
    <div className="container mx-auto">
      <form className="flex flex-col h-1/2 items-center justify-around mt-20">
        <h2 className="text-xl font-bold">Ajouter un plat</h2>
        <input
          className="bg-gray-300 my-10 w-60 rounded py-2 px-2"
          placeholder="Le plat à ajouter"
          name="title"
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          className="bg-gray-300 mb-10 w-60 rounded py-2 px-2"
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
            name="title"
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button
          className="my-10 py-1 border-solid border-2 bg-black w-5/12  text-white font-bold rounded-md "
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
