import React from 'react'

const DarkMode = () => {
  return (
    <div>
        <div className="bg-gray-400 dark:bg-gray-700 text-black dark:text-gray-300 h-screen">
        <div>hi there</div>
       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={
        ()=>{document.querySelector("html").classList.toggle("dark")}
        }>Toggle</button>
        </div>
      
    </div>
  )
}

export default DarkMode
