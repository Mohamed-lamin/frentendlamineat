import React, { useState } from "react"
import { useEffect } from "react"
import imageEAT from "../../images/icon.png"
import { useDispatch } from "react-redux"
import { useHistory, useLocation, Link } from "react-router-dom"
import decode from "jwt-decode"
import Avatar from "react-avatar"

function Navbar() {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const logout = () => {
    dispatch({ type: "LOGOUT" })
    history.push("/")
    setUser(null)
  }
  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodeToken = decode(token)
      if (decodeToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])
  return (
    <div className="bg-white mx-30 rounded flex flex-row justify-between items-center my-5 px-5 space-x-2">
      <div className="flex flex-row-reverse items-center">
        <h2 className="text-lg font-bold ml-1">
          <Link to="/">LaminEAT</Link>
        </h2>
        <img alt="LaminEAT" className="h-10 rounded-full my-1" src={imageEAT} />
      </div>
      <div>
        {user ? (
          <div className="flex space-x-2">
            <div div className=" border-2 border-black rounded-full w-5">
              <h1 className="text-black font-bold">
                {user.result.name.charAt(0)}
              </h1>
            </div>
            <button
              className="bg-black text-white font-bold shadow rounded w-16 text-center"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="bg-black text-white font-bold rounded w-16 text-center">
            <Link className="" to="/auth">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
