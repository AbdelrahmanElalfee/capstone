import { Routes , Route } from "react-router-dom";
import Home from "./routes/home/Home.component.jsx";
import Navigation from "./routes/navigation/Navigation.component.jsx";
import Shop from "./routes/shop/Shop.component.jsx";
import SignIn from "./routes/signin/SignIn.component.jsx";


const App = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='signin' element={<SignIn />} />
          </Route>
      </Routes>
  )
}

export default App
