import {TfiBarChart } from 'react-icons/tfi'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { IoArrowRedoOutline } from 'react-icons/io5';

import Card from './card'

export default function Home() {
  return (
    <div className="">
       <div className=" flex justify-center">
            <Card title={'+200'} subtitle={'project completed'} />
            <Card title={'+50'} subtitle={'startup raised'} />
        </div>
    
        <div className="mx-8">
            <h1 className="text-9xl font-bold text-gray-800 mt-2">Hello</h1>
            <p className="text-lg font-normal text-gray-600">Here is Eliel MENGUE</p>
        </div>

        <div className='mt-4 flex justify-around p-4'>

            <div className="p-3 mb-4">
                <h2 className="text-3xl font-bold text-gray-800 mx-3">About Me</h2>
                <p className="text-gray-600 text-ligth mx-3"> 
                  I am specialize in complex problem elegant solutions. My approach blends creativity with
                  strategic thinking to deliver solutions that not only 
                  look great but work seamlessly. Ready to start your
                  next project ?
                  </p>
                  <div className="mt-5 flex justify-center">
                      <IoArrowRedoOutline className='w-20 h-20'/>
                  </div>
            </div>

            <div className="border-gray-200 shadow-gray-300 bg-white flex flex-col p-3 rounded-2xl">
              <div className="mb-2 p-2">
                  <h1 className="text-5xl font-bold text-gray-800">120%</h1>
                  <p className='text-gray-600 text-ligth'>Average increase in client
                    engagement in the first 6
                    months
                  </p>
              </div>
              <div className='mt-2 border-2 bg-secondary rounded-2xl  flex justify-center'>
                  <FaArrowTrendUp  className="w-20 h-20 p-2"/>
              </div>
            </div>

            <div className="p-3">
              <div className="flex justify-center mb-3 ">
                <TfiBarChart className="w-20 h-20 p-2"/>
              </div>
              <div className='mt-2 text-gray-600 text-ligth'>
                <p>With 4 years of experience, i specialize in creating 
                  intuitive, user-focused solutions that solve real-world problems
                  and deliver seamless digital experience.
                </p>
                <p className="mt-2 text-gray-600 text-ligth">
                  I thrive on working closely with clients, blending
                  creativity with stratedy to bring their vision to life.
                </p>
              </div>
            </div>
        </div>
       
     
    </div>
  );
}
