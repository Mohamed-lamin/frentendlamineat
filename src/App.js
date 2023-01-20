import "./App.css"
import RestaurantForm from "./components/RestaurantForm/RestaurantForm"
import RestaurantPlats from "./components/RestaurantPlats/RestaurantPlats"
import imageEAT from "./images/icon.png"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRestaurantPlats } from "./actions/PostsResaurantPlats"
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRestaurantPlats())
  }, [dispatch])
  return (
    <div className="container mx-auto flex min-h-screen justify-center  bg-black">
      <div className="container mx-10">
        <div className="bg-white mx-30 rounded flex flex-row-reverse justify-end items-center my-5 px-5 space-x-2">
          <h2 className="text-lg font-bold ml-1">LaminEAT</h2>
          <img
            alt="LaminEAT"
            className="h-10 rounded-full my-1"
            src={imageEAT}
          />
        </div>
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
      </div>
    </div>
  )
}

export default App
