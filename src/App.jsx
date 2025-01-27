
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
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

function App() {
  let ecommerceRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/account' element={<AccountPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/shop-list' element={<ProductListView/>}/>
      <Route path='/product-details' element={<ProductDetailsPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={ecommerceRouter}/>
    </>
  )
}

export default App
