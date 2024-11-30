import React from 'react'
import Plus from '../icons/Plus'
import Schedule from '../icons/Schedule'
import Film from '../icons/Film'
const ScheduleMeetings = () => {
  return (
    <div className=" bg-white rounded-md shadow-md m-2 p-3 h-64 translate-y-32 grid grid-cols-2 ">
            <div className="flex flex-col justify-center items-center gap-2">
            <Schedule/>
            <p className='text-xs font-semibold'>Schedule a Webinar </p> 
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
            <Plus/>
            <p className='text-xs font-semibold'>Join a Webinar </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
            <Film/>
            <p className='text-xs font-semibold'>Open Recordings </p>
            </div>
      
    </div>
  )
}

export default ScheduleMeetings
