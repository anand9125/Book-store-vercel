import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';
export const placeOrder = atom({
  key: 'placeOrder',
  default: null, // Default state could be null or an empty object
});



export const getOrderByemail = selectorFamily({
  key: "getOrderByemailSelector",
  get: (email) => async () => {
    if (!email) return [];

    try {
      const response = await axios.get(`http://localhost:3000/api/order/email/${email}`);
      console.log("Response data:", response.data); // Log the data format

      // Ensure the response is an array. If it's a single order object, wrap it in an array.
      return Array.isArray(response.data) ? response.data : [response.data];
    } catch (err) {
      console.error("Error fetching order by email:", err);
      return []; // Return an empty array if there's an error
    }
  },
});
