
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import BlogPage from './Pages/BlogPage'
import RootLayout from './RootLayout/RootLayout'
import AccountPage from './Pages/AccountPage'
import AboutUsPage from './Pages/AboutUsPage'
import NotFoundPage from './Pages/NotFoundPage'
import ShopPage from './Pages/ShopPage'
import ProductListView from './Components/Shop/ProductListView'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'
import SignUp from './Components/MyAccount/SignUp'
import { useEffect, useState } from 'react'
import { auth } from './Components/firebase'
import { ToastContainer } from 'react-toastify'
import Wishlist from './Components/Cart/wishlist'
import OrderPage from './Pages/OrderPage'
import FaqPage from './Pages/FaqPage'
import SingleBlog from './Components/Blog/SingleBlog/SingleBlog'

function App() {

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  let ecommerceRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={user ? <Navigate to="/home"/> : <AccountPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/account' element={<AccountPage/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/single-blog' element={<SingleBlog/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/shop-list' element={<ProductListView/>}/>
      <Route path='/product-details/:id' element={<ProductDetailsPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/order-completed' element={<OrderPage/>}/>
      <Route path='/frequently-asked-questions' element={<FaqPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      
    </Route>
  ))

  return (
    <>
      <RouterProvider router={ecommerceRouter}/>
      <ToastContainer/>
    </>
  )
}

export default App
