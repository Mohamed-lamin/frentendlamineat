import React, { useEffect, useState } from "react"
// import { GoogleLogin } from "react-google-login"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { signin, signup } from "../../actions/auth"
import { theRestaurant, theUser } from "../../features/authSlice"
import * as api from "../../api/index"
const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
}

function Auth() {
  const authenticated = useSelector(state => state.authenticatedUser.auth)
  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  // const switchSignIn = e => {
  //   e.preventDefault()
  //   setIsSignup(!isSignup)
  // }
  // Functions
  const signin = async form => {
    try {
      const { data } = await api.signIn(form)
      console.log(data)
      dispatch(theUser(data))
      dispatch(theRestaurant(data))
      history.push("/plats")
    } catch (error) {
      console.log(error)
    }
  }
  const signup = async form => {
    console.log(form)
    try {
      const { data } = await api.signUp(form)
      console.log(data)
      dispatch(theUser(data))
      history.push("/restaurantinfo")
    } catch (error) {
      console.log(error)
    }
  }
  console.log(form)
  // handle Change in the form
  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })
  // handleSubmit Form
  const handleSubmitSignIn = e => {
    e.preventDefault()

    dispatch(signin(form, history))
  }

  const handleSubmitSignUp = e => {
    e.preventDefault()
    signup(form)
  }
  console.log(authenticated)
  // handle google responses
  // const googleSuccess = async res => {
  //   console.log(res)
  // }
  // const googleFailure = error => {
  //   console.log(error)
  // }
  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("profile"))
    console.log(isAuth)
    if (isAuth && !isAuth?.result?.restaurantUser) {
      history.push("/restaurantinfo")
    } else if (isAuth && isAuth?.result?.restaurantUser) {
      history.push("/plats")
    } else {
      history.push("/")
    }
  }, [])
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
      <div className="mx-10  md:w-1/2">
        <form
          className="flex flex-col h-96 bg-white  w-full items-center  mt-20 rounded"
          onSubmit={handleSubmitSignUp}
        >
          <h1 className="font-bold mt-5">Inscription</h1>
          <div className="flex w-60 md:w-80 justify-center mt-5 mb-2 space-x-3">
            <input
              className="bg-gray-300 py-2 px-2 w-1/2 rounded "
              placeholder="Nom"
              name="firstname"
              onChange={handleChange}
            />
            <input
              className="bg-gray-300 py-2 px-2 w-1/2 rounded "
              placeholder="Prénom"
              name="lastname"
              onChange={handleChange}
            />
          </div>

          <input
            className="bg-gray-300 mb-2  rounded py-2 px-2 w-60 md:w-80 "
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />

          <input
            className="bg-gray-300 mb-2  rounded py-2 px-2 w-60 md:w-80"
            placeholder="Mot de passe"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <input
            className="bg-gray-300   rounded py-2 px-2 w-60 md:w-80"
            placeholder="Confirmer le mot de passe"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
          />

          {/* <GoogleLogin
          clientId="458146796540-d5m8url2koae8v3092divjlvp7qlfbk4.apps.googleusercontent.com"
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              >
              Google singin
              </button>
              )}
          onSuccess={googleSuccess}
          onFailure={}
          cookiePolicy="single_host_origin"
        /> */}
          <button
            className=" mt-5 w-60 md:w-80 py-0.5 border-solid border-2 bg-black   text-white font-bold rounded-md "
            type="submit"
          >
            S'inscrire
          </button>
          <button className=" mt-3 mb-5 w-60  md:w-80 py-0.5 border-solid border-2 bg-black  text-white font-bold rounded-md ">
            S'inscrire avec Google
          </button>
        </form>
      </div>
      <div className="mx-10 md:w-1/2 flex items-center">
        <form
          className="flex flex-col bg-white h-96  w-full items-center justify-center  mt-5 md:mt-20 rounded"
          onSubmit={handleSubmitSignIn}
        >
          <h1 className="font-bold mt-5">Authentification</h1>
          <div className="flex flex-col mt-5 ">
            <input
              className="bg-gray-300 mb-2  rounded py-2 px-2 w-60 md:w-80 "
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleChange}
            />

            <input
              className="bg-gray-300 mb-2  rounded py-2 px-2 w-60 md:w-80"
              placeholder="Mot de passe"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>

          {/* <GoogleLogin
          clientId="458146796540-d5m8url2koae8v3092divjlvp7qlfbk4.apps.googleusercontent.com"
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              >
              Google singin
              </button>
              )}
          onSuccess={googleSuccess}
          onFailure={}
          cookiePolicy="single_host_origin"
        /> */}
          <button
            className=" mt-5  w-60 md:w-80 py-0.5 border-solid border-2 bg-black   text-white font-bold rounded-md "
            type="submit"
          >
            Enregistrer
          </button>
          <button className=" mt-3 mb-5 w-60  md:w-80 py-0.5 border-solid border-2 bg-black  text-white font-bold rounded-md ">
            S'authentifier avec google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
