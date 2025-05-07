import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import HomePage from './Pages/HomePage'
import Nav from './Component/Nav'
import Footer from "./Component/Footer"
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProductDetails'
import UserProfile from './Pages/UserProfile'
import Cart from './Pages/Cart'
import WishList from './Pages/WishList'
import  { ProductWrapper } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import { WishListProvider } from './context/WishListContext'
import { AddressProvider } from './context/AddressContext'

function App() {


  return (
    <>
    
      <ProductWrapper>
      <CartProvider>
        <WishListProvider>
          <AddressProvider>
      <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product' element={<ProductListing/>} />
        <Route path='/product/:proId' element={<ProductDetails/>} />
        <Route path='/user' element={<UserProfile/>} />
        <Route path='/user/cart' element={<Cart/>} />
        <Route path='/user/wishlist' element={<WishList/>} />
      </Routes>
      <Footer/>
      </Router>
      </AddressProvider>
      </WishListProvider>
      </CartProvider>
      </ProductWrapper>
    
    </>
  )
}

export default App
