import { Routes , Route } from "react-router-dom";
import Home from "./pages/home/Home.component.jsx";
import Navigation from "./pages/navigation/Navigation.component.jsx";
import Shop from "./pages/shop/Shop.component.jsx";
import AuthenticationPage from "./pages/authentication/Authentication.component.jsx";
import Checkout from "./pages/checkout/Checkout.component.jsx";

const App = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='shop' element={<Shop />} />
              <Route path='auth' element={<AuthenticationPage />} />
              <Route path='checkout' element={<Checkout/>}/>
          </Route>
      </Routes>
  )
}

export default App
