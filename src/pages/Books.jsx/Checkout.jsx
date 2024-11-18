import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cartState } from '../../Recoil/Cart/atom';
import { useRecoilState } from 'recoil';
import { useAuth } from '../../context/AuthContext';
import { useForm } from "react-hook-form"
import { placeOrder } from '../../Recoil/orders/orderApi';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';
function Checkout() {
    const{currentUser} =useAuth()
    const [cartItems, setCartItems] = useRecoilState(cartState);
    const Subtotal = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.newPrice, 0);
    const [orderResponse, setOrderResponse] = useRecoilState(placeOrder);
    const navigate = useNavigate();
  console.log(cartItems)
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {  // react hook form 
     console.log(data)
    const newOrder = {
        name: data.name,
        email: currentUser?.email,
        address: {
            city: data.city,
            country: data.country,
            state: data.state,
            pincode: data.pincode
    
        },
        phone: data.phone,
        productIds: cartItems.map(item => item?._id),
        totalPrice: Subtotal,
    } 
    console.log(newOrder);
    
    try {
      const response = await axios.post('http://localhost:3000/api/order', newOrder);
      setOrderResponse(response.data);
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Your order is placed",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(`/order/${currentUser.email}`)
      console.log(orderResponse)// Update Recoil state with response
    } catch (error) {
      console.error("Error while placing order", error);
      alert("Failed to place order");
    }
   }
 
 
   return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
        <p className="text-gray-500 mb-2">Total Price: ${Subtotal}</p>
        <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>

        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                {/* Full Name */}
                <div className="md:col-span-5">
                  <label htmlFor="name">Full Name</label>
                  <input
                    {...register("name", { required: "Full Name is required" })}
                    type="text"
                    id="name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email Address (disabled, currentUser) */}
                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    disabled
                   
                    defaultValue={currentUser?.email}
                  />
                </div>

                {/* Phone Number */}
                <div className="md:col-span-5">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    {...register("phone", { required: "Phone Number is required" })}
                    type="text"
                    id="phone"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>

                {/* City */}
                <div className="md:col-span-3">
                  <label htmlFor="city">City</label>
                  <input
                    {...register("city", { required: "City is required" })}
                    type="text"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                  {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                </div>

                {/* Country */}
                <div className="md:col-span-2">
                  <label htmlFor="country">Country</label>
                  <input
                    {...register("country", { required: "Country is required" })}
                    type="text"
                    id="country"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                  {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                </div>

                {/* State */}
                <div className="md:col-span-2">
                  <label htmlFor="state">State</label>
                  <input
                    {...register("state", { required: "State is required" })}
                    type="text"
                    id="state"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                  {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                </div>

                {/* Pincode */}
                <div className="md:col-span-1">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    {...register("pincode", { required: "Pincode is required" })}
                    type="text"
                    id="pincode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                  {errors.pincode && <p className="text-red-500">{errors.pincode.message}</p>}
                </div>

                {/* Terms & Conditions */}
                <div className="md:col-span-5 mt-3">
                  <div className="inline-flex items-center">
                    <input
                      {...register("terms", { required: "You must agree to the terms" })}
                      type="checkbox"
                      id="terms"
                      className="form-checkbox"
                    />
                    <label htmlFor="terms" className="ml-2">
                      I agree to the <a href="#" className="underline text-blue-600">Terms & Conditions</a> and <a href="#" className="underline text-blue-600">Shopping Policy</a>.
                    </label>
                    {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-5 text-right">
                  <button
                  
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Place an Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  
     }

export default Checkout;
