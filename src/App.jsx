import { Routes , Route } from "react-router-dom";
import Home from "./routes/home/Home.component.jsx";
import Navigation from "./routes/navigation/Navigation.component.jsx";
import Shop from "./routes/shop/Shop.component.jsx";
import SignIn from "./routes/authentication/Authentication.component.jsx";
import AuthenticationPage from "./routes/authentication/Authentication.component.jsx";


const App = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='auth' element={<AuthenticationPage />} />
          </Route>
      </Routes>
  )
}

export default App
