import React from 'react'

function Inputbox({label,placeholder}) {
  return (
    <div className="m-2">
  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
  <input 
    type="text" 
    id="first_name" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder={placeholder} 
    required 
  />
</div>

  )
}

export default Inputbox