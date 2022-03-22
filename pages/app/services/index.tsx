import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Link from 'next/link'
import ServiceCard from 'components/cards/service'

const Profile: CustomNextPage = () => {
  return ( <div className="flex flex-row">
        {/*---HERO---*/}
        
        <div className="container mx-auto py-4 sm:px-16 ">
            <div className="w-full flex flex-row items-center ">
                <h1 className="flex-grow text-2xl lg:text-4xl font-semibold leading-none">
                  Services 
                </h1>
                <Link href={`/app/services/create`}>       
                <button
                  type="button"
                  className="font-semibold border-2 border-black bg-gray-100 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                >
                  Add Service
                </button>
                </Link>
                <button
                  type="button"
                  className="flex flex-row items-center space-x-2 border font-semibold border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>

                  Availability </span>
                </button>
            </div>
            <div className="py-12">
              <ServiceCard />
            </div>
        </div>
        
    </div>
  )
}

Profile.layout='appLayout'
export default Profile
