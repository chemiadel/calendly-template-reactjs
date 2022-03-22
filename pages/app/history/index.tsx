import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: CustomNextPage = () => {
  return ( <div className="flex flex-row">
        {/*---HERO---*/}
        
        <div className="container mx-auto py-4 sm:px-12 ">
            <div className="w-full flex flex-col items-start sm:mt-0 ">
                <div className="flex flex-row items-center w-full">
                    <h1 className="flex-grow w-full text-2xl lg:text-4xl font-semibold leading-none py-2">
                    History
                    </h1>    
                    <input
                      id="default"
                      type="text"
                      placeholder="Search"
                      className="px-4 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      />
                </div>

                <div className="flex flex-col w-full ">
                    <div className="flex flex-row items-center space-x-4 mt-6 border-t border-b py-4">
                        <h1 className="flex-grow text-xl font-semibold">
                          A Service
                        </h1>
                        <h1 className="text-md text-gray-400 font-semibold">
                          {new Date().toLocaleString()}
                        </h1>
                    </div>

                    <div className="flex flex-row items-center space-x-4 border-b py-4">
                    <h1 className="flex-grow text-xl font-semibold">
                          A Service
                        </h1>
                        <h1 className="text-md text-gray-400 font-semibold">
                          {new Date().toLocaleString()}
                        </h1>
                    </div>
                    
                    <div className="flex flex-row items-center space-x-4 border-b py-4">
                    <h1 className="flex-grow text-xl font-semibold">
                          A Service
                        </h1>
                        <h1 className="text-md text-gray-400 font-semibold">
                          {new Date().toLocaleString()}
                        </h1>
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
  )
}

Home.layout='appLayout'
export default Home
