import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectioPage from './pages/CollectioPage'
import ProductDetail from './components/Products/productDetail'
import Checkout from './components/Carts/Checkout'
import OrderConformationPage from './pages/OrderConfirmationPage'
import OrderDetailsPage from './pages/OrderDetailsPage'
import MyOrderPage from './pages/MyOrderPage'
import AdminLayout from './components/Admin/AdminLayout'
import AdminHomePage from './pages/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import EditProductPage from './components/Admin/EditProductPage'
import OrderManagement from './components/Admin/OrderManagement'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        {/* sonner library for Error throwing */}
        <Toaster position='top-right' />
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='collections/:collection' element={<CollectioPage />} />
            <Route path='product/:id' element={<ProductDetail />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='order-confirmation' element={<OrderConformationPage />} />
            <Route path='order/:id' element={<OrderDetailsPage/>} />
            <Route path='/my-orders' element={<MyOrderPage />} />

          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path='users' element={<UserManagement />} />
            <Route path='products' element={<ProductManagement />} />
            <Route path='products/:id/edit' element={<EditProductPage />} />
            <Route path='orders' element={<OrderManagement/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
