import React from 'react'

const ProfileCard = () => {
  return (
    <div className='bg-white border-2 rounded-md shadow-md hidden xl:flex flex-col  gap-4 p-4 m-8 w-48 h-72 items-center justify-center -translate-y-24 duration-1000 ease-out hover:scale-105 '  >
        <img src="/pfp.png" alt="img here" className='w-24 h-24'/>
        <p className='font-extrabold'>Prabhleen Kaur</p>
        <div className='flex flex-col items-center'>
        <p>prabhleen@gmail.com</p>
        <p>9810023459</p>

        </div>
        
        <div>Delhi,India</div>

        

      
    </div>
  )
}

export default ProfileCard
