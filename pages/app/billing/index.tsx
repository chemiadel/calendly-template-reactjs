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
                <h1 className="w-full text-2xl lg:text-4xl font-semibold leading-none py-2">
                Payments
                </h1>          
                <div className="flex flex-col w-full ">
                  
                <div className="flex flex-row items-center space-x-4 mt-6 border-t pt-4">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="green">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </span>
                        <h2 className="flex-grow text-xl font-semibold">
                          Offline
                        </h2>
                        <button
                          type="button"
                          disabled
                          className="font-semibold disabled:opacity-50 border-gray-900 bg-gray-200 text-gray-700 px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
                        >
                          Default
                        </button>
                    </div>
                    <div className="flex flex-row items-center space-x-4 mt-6 border-t border-b py-4">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="green">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </span>
                        <h2 className="flex-grow text-xl font-semibold">
                          Stripe
                        </h2>
                        <button
                          type="button"
                          className="font-semibold border border-gray-900 bg-red-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                          Revoke
                        </button>
                    </div>
                    
                    <div className="flex flex-row items-center space-x-4 border-b py-4">
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="orange">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      </span>
                      <h2 className="flex-grow text-xl font-semibold">
                        Paypal
                      </h2>
                      <Link href={`/app/services/create`}>       
                      <button
                        type="button"
                        className="font-semibold border border-gray-900 bg-gray-100 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                      >
                        Add
                      </button>
                    </Link>
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
  )
}

Home.layout='appLayout'
export default Home
