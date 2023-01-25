import "./App.css"
import Navbar from "./components/Nabar/Navbar"
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Auth from "./components/Auth/Auth"
function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto flex min-h-screen justify-center  bg-black">
        <div className="container mx-10">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
