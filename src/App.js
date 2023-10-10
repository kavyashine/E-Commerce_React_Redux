import React from "react"
import { BrowserRouter , Router, Route , Routes} from "react-router-dom";
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Register";
import { useSelector } from "react-redux"
import { Order } from "./components/hero/Order";
import { Category } from "./components/category/Category";
import { Help } from "./components/header/Help";
import { Payment } from "./pages/Payment";


const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {isLoggIn && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/regsiter' element={<Regsiter/>} />
            <Route exact path='/account' element={<Account/>} />
            <Route exact path='/order' element={<Order/>} />
            <Route exact path='/category' element={<Category/>} />
            <Route exact path="/help" element={<Help/>}/>
            <Route exact path="/payment" element={<Payment/>}/>
            <Route exact path="/login" element={<Login/>}/>

          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      {!isLoggIn && <Login />}
    </>
  )
}
export default App