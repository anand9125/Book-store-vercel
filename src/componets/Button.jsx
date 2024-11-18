import React from 'react'

function Button({label}) {
  return (
    <div className="flex justify-center mt-2">
    <button 
      type="button" 
      className=" ml-4 focus:outline-none text-white bg-blue-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm  ml-3  px-6 pr-8 py-2  mb-2 dark:focus:ring-blue-300 transform -translate-x-20 "
    >
      {label}
    </button>
  </div>
  
  )
}

export default Button