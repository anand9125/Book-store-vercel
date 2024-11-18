import React from 'react'

import '../App.css'

import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../componets/Login'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Register from '../componets/Register'
import { RecoilRoot } from 'recoil'
import "sweetalert2/dist/sweetalert2.js"
import Cart from '../pages/Books.jsx/Cart'
import Checkout from '../pages/Books.jsx/Checkout'
import Singlebook from '../pages/Books.jsx/SingleBook'
import { AuthProvider } from '../context/AuthContext'
import Privatetroutes from './Privatetroutes'
import Order from '../pages/Books.jsx/Order'
import AdminRoutes from './AdminRoutes'
import AdminLogin from '../componets/AdminLogin'
import AddBook from '../pages/Dashboard/addBook/AddBook'
import UpdateBook from '../pages/Dashboard/EditBook/UpdateBook'
import ManageBook from '../pages/Dashboard/manageBooks/ManageBook'
import DashboardLayout from '../pages/Dashboard/DashboardLayout'
import Dashboard from '../pages/Dashboard/Dashboard'
function Router() {
  return (
    <div>
        <RecoilRoot>
         <BrowserRouter>
         <AuthProvider>
         <Navbar></Navbar>
           <Routes>
              <Route path="/" element={<Home></Home>}>Home</Route>
              <Route path="/login" element={<Login></Login>}>Login</Route> 
              <Route path="/register" element={<Register></Register>}>Register</Route> 
              <Route path="/cart" element={<Cart></Cart>}>Cart</Route> 
              <Route path="/checkout" element={<Privatetroutes><Checkout></Checkout></Privatetroutes>}>Cart</Route> 
              <Route path="/books/:id" element={<Singlebook></Singlebook>}>SingleBook</Route>   
              <Route path="/order/:email" element={<Order></Order>}>Order</Route>   
              <Route path="/admin" element={<AdminLogin></AdminLogin>} >Order</Route>   
              <Route path="/dashboard" element={<AdminRoutes><DashboardLayout></DashboardLayout></AdminRoutes>}>
              <Route path="" element={<AdminRoutes><Dashboard></Dashboard></AdminRoutes>}/>
              <Route path="add-new-book" element={<AdminRoutes><AddBook /></AdminRoutes>} />
              <Route path="edit-book/:id" element={<AdminRoutes><  UpdateBook /></AdminRoutes>} />
              <Route path="manage-books" element={<AdminRoutes><ManageBook /></AdminRoutes>} />
              </Route>
 
          </Routes>
          <Footer></Footer> 
          </AuthProvider> 
        </BrowserRouter>
        </RecoilRoot>
    </div>
  )
}

export default Router