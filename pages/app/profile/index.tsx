import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Ckeditor = dynamic(() => import("components/ckeditor"), { ssr: false });
import dynamic from 'next/dynamic'

const Profile: CustomNextPage = () => {
  return ( <div className="flex flex-row">
        {/*---HERO---*/}
        
        <div className="container mx-auto py-4 sm:px-12 ">
            <div className="w-full flex flex-col items-start sm:mt-0 ">
            <div className="w-full flex flex-row items-center ">
                <h1 className="flex-grow text-2xl lg:text-4xl font-semibold">
                  Profile
                </h1>
                
                <button
                  type="button"
                  className="font-semibold hover:underline text-black px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
                >
                  Preview
                </button>    
                <button
                  type="button"
                  className="flex flex-row items-center space-x-2 border font-semibold border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                  Save 
                </button>
            </div>            
                <div className="grid grid-cols-2  w-full py-8 ">
                        <div className="mx-auto ">
                            <img className="rounded-full h-64 w-64" src="https://pbs.twimg.com/profile_images/958258285055967233/2ekSG05m.jpg"  />
                        </div>
                        <div className=" flex flex-col space-y-6">
                            <div className="flex flex-col ">
                              <input
                                id="default"
                                type="text"
                                name="default"
                                placeholder="Full Name"
                                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                />
                            </div>
                            <div className="flex flex-col ">
                              <input
                                id="default"
                                type="text"
                                name="default"
                                disabled
                                placeholder="Email"
                                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                />
                            </div>
                            <select 
                                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200">
                              <option>Individual</option>
                              <option>Business</option>
                            </select>
                            <div className="flex">
                                <span className="text-sm rounded-l px-4 py-2 bg-gray-200 whitespace-no-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                    </svg>
                                </span>
                                <input name="field_name" className=" w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="Facebook" />
                            </div>
                            <div className="flex">
                                <span className="text-sm rounded-l px-4 py-2 bg-gray-200 whitespace-no-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
                                </span>
                                <input name="field_name" className=" w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="Twitter" />
                            </div>
                            <div className="flex w-full">
                                <span className="text-sm rounded-l px-4 py-2 bg-gray-200 whitespace-no-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                      <line x1="8" y1="11" x2="8" y2="16"></line>
                                      <line x1="8" y1="8" x2="8" y2="8.01"></line>
                                      <line x1="12" y1="16" x2="12" y2="11"></line>
                                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </span>
                                <input name="field_name" className=" w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="Linkedin" />
                            </div>
                            <Ckeditor />
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
  )
}

Profile.layout='appLayout'
Profile.title='Profile'

export default Profile
