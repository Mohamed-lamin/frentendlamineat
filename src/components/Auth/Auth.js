import React, { useState } from "react"
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
  const switchSignIn = e => {
    e.preventDefault()
    setIsSignup(!isSignup)
  }

  // handle Change in the form
  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })
  // handleSubmit Form
  const handleSubmit = e => {
    e.preventDefault()

    if (isSignup) {
      dispatch(signup(form, history))
    } else {
      dispatch(signin(form, history))
    }
  }
  // handle google responses
  // const googleSuccess = async res => {
  //   console.log(res)
  // }
  // const googleFailure = error => {
  //   console.log(error)
  // }
  return (
    <div className="container mx-auto flex justify-center">
      <form
        className="flex flex-col h-1/2 bg-white w-1/2 items-center justify-around mt-20 rounded"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold my-10">
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>
        {isSignup && (
          <>
            <input
              className="bg-gray-300 my-10 w-60 rounded py-2 px-2"
              placeholder="Votre Nom"
              name="firstname"
              onChange={handleChange}
            />
            <input
              className="bg-gray-300 mb-10 w-60 rounded py-2 px-2"
              placeholder="Votre Prénom"
              name="lastname"
              onChange={handleChange}
            />
          </>
        )}

        <input
          className="bg-gray-300 mb-10 w-60 rounded py-2 px-2"
          placeholder="Votre addresse email"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <input
          className="bg-gray-300 mb-10 w-60 rounded py-2 px-2"
          placeholder="Mot de passe"
          name="password"
          type="password"
          onChange={handleChange}
        />
        {isSignup && (
          <input
            className="bg-gray-300 mb-10 w-60 rounded py-2 px-2"
            placeholder="Mot de passe"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
          />
        )}
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
          className="my-10 py-1 border-solid border-2 bg-black w-1/6  text-white font-bold rounded-md "
          type="submit"
        >
          {isSignup ? "Sign up" : "Sign in"}
        </button>
        <div>
          <button onClick={switchSignIn}>
            {isSignup
              ? "Avez vous déja un compte ? Sign In"
              : "Vous n'avez pas un compte ? Sign Up"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Auth
