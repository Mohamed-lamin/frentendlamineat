import React, { useEffect, useState } from "react"
import { GoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { signin, signup } from "../../actions/auth"
const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
}

function Auth() {
  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  // const switchSignIn = e => {
  //   e.preventDefault()
  //   setIsSignup(!isSignup)
  // }

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

    dispatch(signup(form, history))
  }
  // handle google responses
  // const googleSuccess = async res => {
  //   console.log(res)
  // }
  // const googleFailure = error => {
  //   console.log(error)
  // }
  useEffect(() => {
<<<<<<< HEAD
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
=======
    dispatch(getRestaurantPlats())
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllRestaurant())
    dispatch(getRestaurantPlats())
  },[])
>>>>>>> fa3a83a95a1342c4bf8817f37a0273f12202a87f
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
      <div className="mx-10  md:w-1/2">
        <form
          className="flex flex-col h-fit bg-white  w-full items-center  mt-20 rounded"
          onSubmit={handleSubmitSignUp}
        >
          <h1 className="font-bold mt-5">Inscription</h1>
          <div className="flex w-60 md:w-80 justify-center mt-5 mb-2 space-x-3">
            <input
              className="bg-gray-300 py-2 px-2 w-1/2 rounded "
              placeholder="Votre Nom"
              name="firstname"
              onChange={handleChange}
            />
            <input
              className="bg-gray-300 py-2 px-2 w-1/2 rounded "
              placeholder="Votre Prénom"
              name="lastname"
              onChange={handleChange}
            />
          </div>

          <input
            className="bg-gray-300 mb-2  rounded py-2 px-2 w-60 md:w-80 "
            placeholder="Votre addresse email"
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
            placeholder="Répeter mot de passe"
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
      <div className="mx-10  md:w-1/2 flex items-center">
        <form
          className="flex flex-col h-fit bg-white  w-full items-center   mt-5 md:mt-20 rounded"
          onSubmit={handleSubmitSignIn}
        >
          <h1 className="font-bold mt-5">Authentification</h1>
          <div className="flex flex-col mt-5 ">
            <input
              className="bg-gray-300 mb-2  rounded py-2 px-2 w-60 md:w-80 "
              placeholder="Votre addresse email"
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
            className=" mt-5 mb-5 w-60 md:w-80 py-0.5 border-solid border-2 bg-black   text-white font-bold rounded-md "
            type="submit"
          >
            Enregister
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
