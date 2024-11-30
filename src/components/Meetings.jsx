import React from 'react'
import Calender from '../icons/Calender'
import GoLeft from '../icons/GoLeft'
import GoRight from '../icons/GoRight'
import Video from '../icons/Video'


const Meetings = () => {
    const meetings=[
        {scheduled:"live" ,WebinarName:"UX Webinar"},
         {scheduled:"Upcoming" ,WebinarName:"My first Webinar"},
          {scheduled:"Upcoming",WebinarName:"Important Webinar"}, {scheduled:"Upcoming" ,WebinarName:"Webinar 1"}
    ]
  return (
    <div>
        <div className="bg-gray-100 p-2 m-4 rounded-lg flex  justify-between">
            <div className='flex gap-2'>
                <Calender/>
                <p>Monday,14 October 2024</p>
                </div>
        
                <div className='flex'>
                    <GoLeft />
                    <GoRight />
                </div>
            </div>
        <div className='p-2 m-4'>
         {meetings.map((meeting,index)=>(
           <MeetingComponent
           key={index}
           scheduled={meeting.scheduled}
           WebinarName={meeting.WebinarName}
           meetings={meetings}
           index={index}
           
           />
           ))}
        </div>

    </div>
  )
}

export default Meetings

function MeetingComponent({meetings,scheduled,WebinarName,index}) {
    console.log(meetings.length)
  return (
    <div className={`grid grid-cols-5 border-b py-2 border-gray-300 ${index===meetings.length-1?'border-b-0':''}`}  >
        <div className='p-2 col-span-1 border-r border-blue-200'>
            <p className='font-semibold'>11.30 AM</p>
            <p className='opacity-50 text-sm'>11.30 AM</p>
        </div>
        <div className='p-2 col-span-4'>
            <div className='flex gap-2 items-center'>
                <p className='opacity-50 text-sm'>{scheduled}</p>
                <Video />
            </div>
            <div className='font-semibold'>
                {WebinarName}
            </div>
           
        </div>


      
    </div>
  )
}
