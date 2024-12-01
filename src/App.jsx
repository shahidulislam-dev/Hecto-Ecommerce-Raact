
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import BlogPage from './Pages/BlogPage'
import RootLayout from './RootLayout/RootLayout'
import AccountPage from './Pages/AccountPage'
import AboutUsPage from './Pages/AboutUsPage'
import NotFoundPage from './Pages/NotFoundPage'

function App() {
  let ecommerceRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/account' element={<AccountPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/not-found' element={<NotFoundPage/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={ecommerceRouter}/>
    </>
  )
}

export default App
