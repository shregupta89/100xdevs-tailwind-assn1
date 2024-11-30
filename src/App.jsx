import React from 'react';
import ProfileCard from './components/ProfileCard';
import Sidebar from './components/Sidebar/';
import './App.css';
import Meetings from './components/Meetings';
import ScheduleMeetings from './components/ScheduleMeetings';

function App() {
  return (
    <div className='flex '>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;

function MainContent() {
  return (
    <div className='flex-1  bg-gray-100 '>
      <div className="h-36 ">
        <img className='h-full w-full' src="banner.jpg" alt="banner" />
      </div>

      <div className='grid grid-cols-10 gap-8 p-8'>
          <div className="col-span-2">
            <ProfileCard/>
          </div>
          <div className="col-span-5 m-4 p-3 flex flex-col gap-6 ">
            <p>Monday,14 October</p>
            <p className='font-extrabold text-3xl'>Good Morning, Prabhleen!</p>
            <div className='w-full h-full bg-white rounded-md shadow-md '>
              <Meetings/>
            </div>
          </div>
          <div className='col-span-3'>
            <ScheduleMeetings/>
          </div>
      </div>
    </div>
  )
}