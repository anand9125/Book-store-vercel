// We are building an authentication context using React's Context API to manage 
// authentication-related state across the app. This approach is helpful for handling 
// global state, which refers to data or variables accessible throughout the entire application. 
// It is used for user login, logout, registration, and current user information, 
// accessible by any component in the app.

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseCOnfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();  // AuthContext holds the authentication state to provide it to other components via a Provider.

export const useAuth = () => {        // useAuth is a custom hook to access authentication data stored in AuthContext.
    return useContext(AuthContext);   // Returns the current context value, allowing components to access AuthContext data directly.
};

export const AuthProvider = ({ children }) => {            // AuthProvider wraps the children components to provide access to authentication context.
    const [currentUser, setCurrentUser] = useState(null);  // Tracks the currently authenticated user.
    const [loading, setLoading] = useState(false);         // Loading state to handle asynchronous operations like login.
  
   //read firbase docs built =>web=>getstarted
   //register user
    const registerUser = async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false);
        }
    };
   //login user
   const loginUser=async(email, password)=>{
      return await signInWithEmailAndPassword(auth, email, password)
   }
   //signin with google
   const signInWithgoogle =async()=>{
      return await signInWithPopup(auth, googleProvider)
   }
   //signout
   const logOut = async()=>{
    return await signOut(auth)
   } 
   //manageUser
   useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);

        if(user) {
           
            const {email, displayName, photoURL} = user;
            const userData = {
                email, username: displayName, photo: photoURL
            } 
        }
    })

    return () => unsubscribe();
}, [])

    const value = {                      // Holds functions or variables needed by components consuming this context.
        currentUser,
        registerUser,
        loading,
        loginUser,
        signInWithgoogle,
        logOut
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
