import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faVideo, faFileInvoiceDollar, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  return (
     <div className='h-screen transition-all ease-in-out duration-800 w-0 md:w-60  bg-white ' >
        <div className="m-4  flex flex-col gap-8">
            <div className='flex justify-between'>
                <p className='border-1 rounded-md bg-blue-900 text-white p-2'>Webiner.gg</p>
                <img className='h-[40px] w-[40px] rounded-full' src="./pfp.png" alt="pfp " />
                
            </div>
            <ul className='flex flex-col gap-6'>
                <li className='flex justify-between items-center bg-blue-200 rounded-lg p-2 '>
                Home
                <FontAwesomeIcon icon={faHouse} />
                </li>
                <li className='flex  justify-between items-center '>Webinars
                <FontAwesomeIcon icon={faVideo} />
                </li>
                <li className='flex justify-between items-center '>Billing
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
                </li>
                <li className='flex justify-between items-center '>User Management
                <FontAwesomeIcon icon={faUsers} />
                </li>
                <li className='flex justify-between items-center '>Settings
                <FontAwesomeIcon icon={faCog} />
                </li>
            </ul>

        </div>
      

      
    </div>
  )
}

export default Sidebar
