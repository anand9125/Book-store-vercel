import React from 'react'
import Swal from "sweetalert2"
import { cartState } from '../Recoil/Cart/atom';
import { useRecoilState } from 'recoil';

function useCartAction() {
    const [cartItems, setCartItems] = useRecoilState(cartState);
    
  
    const addToCart= (item)=> {
      
        //cartItem hold the item currently in cart
      //This argument represents the book item that is being added to the cart.
      const existingItem=cartItems.find((cartItem)=>cartItem._id===item._id)
      
      if (!existingItem) {
        // Add item to the cart
        const updatedCart = [...cartItems, item];
        //...cartItems is the spread syntax, which copies all the existing items in cartItems.
       //   item is added to the end of the array, meaning it’s now in the cart.
        setCartItems(updatedCart);
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Product added to the cart",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          title: "Already Added to the Cart",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok!"
        });
      }
    };
    return {addToCart}
}

export default useCartAction;