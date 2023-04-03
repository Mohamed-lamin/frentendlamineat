import React, { useState } from "react"
import { useEffect } from "react"
import imageEAT from "../../images/icon.png"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, Link } from "react-router-dom"
import decode from "jwt-decode"
import Avatar from "react-avatar"
import { UpdateCatList } from "../../actions/Restaurant"
import { logout } from "../../features/authSlice"
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid"

function Navbar() {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const [settings, setSettings] = useState(false)
  const [partenaire, setPartenaire] = useState(false)
  const [reduction, setReduction] = useState(false)
  const [offre, setOffre] = useState(false)
  const [status, setStatus] = useState()
  const restaurantId = user?.result?.userRestaurant?._id
  const [restaurantBar, setRestaurantBar] = useState(
    JSON.parse(localStorage.getItem("restaurant"))
  )
  const [userBar, setUserBar] = useState(
    JSON.parse(localStorage.getItem("restaurant"))
  )
  const commandesNumber = useSelector(state => state.AllCommandes.commandes)
  const deconnect = () => {
    dispatch(logout())
    // dispatch({ type: "LEAVE" })
    history.push("/")
    setUser(null)
    setSettings(false)
  }
  useEffect(() => {
    status === "manager" ? history.push("/plats") : history.push("/commandes")
  }, [status])
  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodeToken = decode(token)
      if (decodeToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem("profile")))
    setRestaurantBar(JSON.parse(localStorage.getItem("restaurant")))
    setUserBar(JSON.parse(localStorage.getItem("profile")))
  }, [location])
  const addToPartenaire = () => {
    dispatch(UpdateCatList(restaurantId, { listName: "Séléction" }))
    setPartenaire(false)
  }
  const addToReduction = () => {
    dispatch(UpdateCatList(restaurantId, { listName: "Réduction" }))
    setReduction(false)
  }
  const addToOffre = () => {
    dispatch(UpdateCatList(restaurantId, { listName: "Offres à coté" }))
    setOffre(false)
  }

  return (
    <>
      <div
        className={`bg-white  rounded flex flex-row justify-around md:justify-between items-center my-5  px-5 space-x-2 relative`}
      >
        <div className="flex flex-row-reverse items-center justify-center space-x-1">
          <h2 className="text-lg font-bold ml-1 invisible md:visible">
            <Link to="/">LaminEAT</Link>
          </h2>
          <img
            alt="LaminEAT"
            className=" h-8 md:h-10 rounded-full my-1 ml-3 md:ml-0"
            src={imageEAT}
          />
        </div>
        {restaurantBar && (
          <div className="flex items-center flex-col cursor-pointer">
            <h1 className="font-extrabold relative ">Commandes</h1>
            <div className="w-8 h-8 ml-32 mb-0.5 absolute   bg-orange-500 rounded-full text-center flex items-center justify-center">
              <span className="font-extrabold">{commandesNumber.length}</span>
            </div>
            <select className="" onChange={e => setStatus(e.target.value)}>
              <option value="manager">Manager</option>
              <option value="serveur">Serveur</option>
            </select>
          </div>
        )}
        <div>
          {(restaurantBar || userBar) && (
            <div className="font-bold flex items-center space-x-2 ">
              <Avatar
                round={true}
                size="35"
                className=" "
                name={
                  !restaurantBar
                    ? userBar.result?.name
                    : restaurantBar?.userRestaurant?.restaurant_name
                }
                src={restaurantBar?.result?.userRestaurant?.image}
              />
              <h1>
                {!restaurantBar
                  ? userBar.result?.name
                  : restaurantBar?.result?.userRestaurant?.restaurant_name}
              </h1>
              <AdjustmentsVerticalIcon
                onClick={() => setSettings(!settings)}
                className="w-10 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      {settings && (
        <div className="flex justify-end mx-30 absolute z-50 w-11/12 ml-19">
          <div className="bg-black rounded-b text-white w-1/6 flex flex-col items-center mb-4">
            <button
              onClick={() => setPartenaire(!partenaire)}
              className="font-bold hover:text-orange-500 hover:underline"
            >
              Devenir partenaire
            </button>
            <button
              onClick={() => setReduction(!reduction)}
              className="font-bold  hover:text-orange-500 hover:underline"
            >
              Réductions
            </button>
            <button
              onClick={() => setOffre(!offre)}
              className=" font-bold hover:text-orange-500 hover:underline"
            >
              Offres à faire
            </button>

            <button
              className="font-bold hover:text-orange-500 hover:underline"
              onClick={() =>
                history.push("/restaurantinfo") & setSettings(false)
              }
            >
              Modifier votre profile
            </button>
            <button
              className="font-bold hover:text-orange-500 hover:underline"
              onClick={deconnect}
            >
              Deconnecter
            </button>
          </div>
        </div>
      )}
      {partenaire && (
        <div className="absolute w-full left-0 top-0 bottom-0 bg-black flex flex-col z-50">
          <div className="flex justify-end">
            {" "}
            <span
              onClick={() => setPartenaire(false)}
              className="text-white cursor-pointer"
            >
              X
            </span>
          </div>
          <div className="flex-1 text-center flex items-center justify-center flex-col">
            <h1 className="text-white my-4">
              Merci d'avoir choisi d'etre partenaire
            </h1>
            <button className="bg-white my-4 rounded" onClick={addToPartenaire}>
              Enregister
            </button>
          </div>
        </div>
      )}
      {reduction && (
        <div className="absolute w-full left-0 top-0 bottom-0 bg-black flex flex-col z-50">
          <div className="flex justify-end">
            {" "}
            <span
              onClick={() => setReduction(false)}
              className="text-white cursor-pointer"
            >
              X
            </span>
          </div>
          <div className="flex-1 text-center flex items-center justify-center flex-col">
            <h1 className="text-white my-4">
              Merci d'avoir choisi d'etre partenaire
            </h1>
            <button className="bg-white my-4 rounded" onClick={addToReduction}>
              Enregister
            </button>
          </div>
        </div>
      )}
      {offre && (
        <div className="absolute w-full left-0 top-0 bottom-0 bg-black flex flex-col z-50">
          <div className="flex justify-end">
            {" "}
            <span
              onClick={() => setOffre(false)}
              className="text-white cursor-pointer"
            >
              X
            </span>
          </div>
          <div className="flex-1 text-center flex items-center justify-center flex-col">
            <h1 className="text-white my-4">
              Merci d'avoir choisi d'etre partenaire
            </h1>
            <button className="bg-white my-4 rounded" onClick={addToOffre}>
              Enregister
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
