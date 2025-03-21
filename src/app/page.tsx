"use client";

import {TfiBarChart } from 'react-icons/tfi'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { IoArrowRedoOutline } from 'react-icons/io5';
import { RiGeminiFill } from 'react-icons/ri';
import { MdArrowOutward } from "react-icons/md";
import CountUp from "react-countup";
import Component from './component';
import Image from 'next/image';
import image1 from '../../public/images/image1.webp';
import image2 from '../../public/images/image2.webp';


import Card from './card'

export default function Home() {
  return (
    <div className="my-5 mb-10">
       <div className=" flex justify-center">
            <Card title={200} subtitle={'project completed'} />
            <Card title={50} subtitle={'startup raised'} />
        </div>
    
        <div className="mx-8">
            <h1 className="text-9xl font-bold text-gray-800 mt-2">Hello_</h1>
            <p className="text-lg font-normal text-gray-600">Here is Eliel MENGUE</p>
        </div>

        <div className='mt-4 flex justify-around gap-4 p-4'>

            <div className="p-3 mb-4">
                <h2 className="text-3xl font-bold text-gray-800 mx-3">About Me</h2>
                <p className="text-gray-600 text-ligth mx-3"> 
                  I am specialize in complex problem elegant solutions. My approach blends creativity with
                  strategic thinking to deliver solutions that not only 
                  look great but work seamlessly. Ready to start your
                  next project ?
                  </p>
                  <div className="mt-5 flex justify-center">
                      <IoArrowRedoOutline className='w-20 h-20 mt-10'/>
                  </div>
            </div>

            <div className="border-gray-200 shadow-gray-300 bg-white flex flex-col justify-between p-3 py-5 rounded-2xl">
              <div className="mb-2 p-2">
                  <h1 className="text-5xl font-bold text-gray-800"><CountUp start={0} end={120} duration={3}/>%</h1>
              </div>
              <div className="mb-2 p-2">
                 <p className='text-gray-600 text-ligth'>Average increase in client
                    engagement in the first 6
                    months
                  </p>
              </div>
              <div className='mt-4 border-2 bg-secondary rounded-2xl w-full h-full flex justify-center'>
                  <FaArrowTrendUp  className="w-50 h-50 p-2 mt-10 text-white"/>
              </div>
            </div>

            <div className="p-3">
              <div className="flex justify-center mb-3 p-3">
                <TfiBarChart className="w-50 h-50 p-2"/>
              </div>
              <div className='mt-2 text-gray-600 text-ligth p-2'>
                <div className='flex'>
                   <div className="bg-gray-700 rounded-4xl w-10 h-5 flex justify-center mx-2">
                    <RiGeminiFill className='text-white'/>
                    </div>
                  <p>
                    With 4 years of experience, i specialize in creating 
                    intuitive, user-focused solutions that solve real-world problems
                    and deliver seamless digital experience.
                </p>
                </div>
               <div className='flex mt-5'>
                  <div className="bg-gray-700 rounded-4xl w-10 h-5 flex justify-center mx-2">
                    <RiGeminiFill className='text-white'/>
                  </div>
                  <p className="">
                    I thrive on working closely with clients, blending
                    creativity with stratedy to bring their vision to life.
                </p>
               </div>
                
              </div>
            </div>
        </div>
        <div className="m-5 relative"></div>
       <div className='bg-white w-full relative'>
          <div className='m-2'>
                  <h2 className='font-bold text-gray-800 text-2xl mx-5'>Experiences</h2>
                  <p className='text-gray-600 text-lg  mx-5'>
                    Explore My Design <br/>Journey
                  </p>
          </div>  

          <div className='mt-8'>
                <Component 
                  title={'Creative Minds, New York, USA'} 
                  subtitle={'February 2022 - Inperson'} 
                  text={'Innovated designs, New York, Senior, Product designer'} 
                  button1={<button>UIUX</button>}
                  button2={<button>Branding</button>}
                />

                <Component 
                  title={'Creative Minds, New York, USA'} 
                  subtitle={'February 2022 - Inperson'} 
                  text={'Innovated designs, New York, Senior, Product designer'} 
                  button1={<button>UIUX</button>}
                  button2={<button>Branding</button>}
                />

              <Component 
                title={'Innovative Design Inc, USA'} 
                subtitle={'Junuay 2020 - February 2022'} 
                text={' Led UX/UI, San Francisco, Crafting tomorrow\'s experience'} 
                button1={<button>UIUX</button>}
                button2={<button>Branding</button>}
                />

            <div className='border-none py-4 m-4 relative'>

              <div className="flex justify-between">
                 <div>
                      <h3 className="text-gray-600 font-bold">FutureTech, Berlin, Germany</h3>
                      <p className="text-gray-400 text-ligth">February 2022 - Inperson</p>
                  </div>

                  <div className="flex">
                        <div className="bg-black p-3 text-ligth text-white rounded-2xl mx-2">
                          <button>Branding</button>
                        </div>
                        <div className="bg-black p-3 text-ligth text-white rounded-2xl">
                          <button>UIUX</button>
                        </div>
                  </div>
                </div>       
            </div>
            <div className="flex border-b border-neutral-300 justify-between mt-4 m-4 py-5">
                  <div className='h-30 w-50 rounded-2xl'>
                      <Image
                        src={image1}
                        alt='image'
                        className='w-full h-full object-cover rounded-2xl'
                      />
                  </div>
                      <div className='h-30 w-50 rounded-2xl'>
                        <Image
                              src={image2}
                              alt='image'
                              className='w-full h-full object-cover rounded-2xl'
                            />
                      </div>
                          <div className='h-30 w-50 rounded-2xl'>
                              <Image
                                    src={image1}
                                    alt='image'
                                    className='w-full h-full object-cover rounded-2xl'
                                />
                          </div>
                        <div className="text-gray-400 text-xm">
                            <p>From crafting seamless user experiences to leading <br />
                            strategic product design initiatives, each <br />
                            experiences has shaped my approach and <br />
                            strengthened my passion for solving desing challenge
                            </p>
                        </div>
                        <div className="rounded-2xl w-10 h-10 bg-black flex justify-center mt-3">
                            <button className=''><MdArrowOutward className="text-white w-10 h-10"/></button>
                        </div>
                     </div>
          </div>
      </div>
  </div>
  );
}
