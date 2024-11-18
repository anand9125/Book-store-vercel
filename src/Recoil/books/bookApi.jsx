import { atom, selectorFamily } from "recoil"
import { selector } from "recoil"
import axios from "axios"



export const getAllBooks=selector({
        key:"getAllBookselector",
        get:async({get})=>{
          
          try {
             const response=await axios.get("http://localhost:3000/api/books/")
             return response.data
            }catch(err){
             console.error("Error while fetching book",err)
             return {err: "Error to fetch book"}
        }
        }
    })



  // Define a selectorFamily to fetch a single book by its ID dynamically
  export const getSingleBookbyID = selectorFamily({     //In Recoil, selectorFamily is used to create parameterized selectors,
    key: "getSingleBookByIDSelector",                   // which allows you to pass a parameter (like an id) to fetch specific data based on that parameter.
    get: (id) => async () => {
    
      if (!id) return null; // Return null if no ID is provided
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`);
        return response.data;
      } catch (err) {
        console.error("Error fetching book by ID:", err);
        return { error: "Failed to fetch book data" }; // Return a default error message
      }
    },
  });
  
export const updateBookByid = selector({
        key:"updateBookByidSelector",
        get: (id) => async () => { 
          
            if (!id) return null; // Return null if no ID is provided
            try {
                const response = await axios.put(`http://localhost:3000/api/books/edit${id}`);
                return response.data;
              } catch (err) {
                console.error("Error while updating book by ID:", err);
                return { error: "Failed to Update data" }; // Return a default error message
              }
              
        }
    })


export const postBookByid = selector({
        key:" postBookByidSelector",
        get:async()=>{
         
          try {
             const response=await axios.post("http://localhost:3000/api/books/create-book")
            return response.data
           }
            catch(err){
                console.error("Error while posting book",err)
                return {err:"Failed to crate-book"}
            }
            
        }
    })

// export const deleteBookByid = selectorFamily({
//         key:"deleteBookByidSelectorFamily",
//         get:(id)=>async()=>{
         
//           try {
//              const response=await axios.delete(`http://localhost:3000/api/books/${id}`)
//             return response.data
//            }
//             catch(err){
//                 console.error("Error while deleting book",err)
//                 return {err:"Failed to delete book"}
//             }
          
//         }
//     })





///An atom represents a piece of state. Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly subscribed to that atom
// it’s not necessary to define an atom for getAllBooks 
//if you just want to fetch and display data. You can use a selector directly without an atom to retrieve data