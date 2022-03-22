import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Link from 'next/link'
import PublicationCard from 'components/cards/publication'

const Profile: CustomNextPage = () => {
  return ( <div className="flex flex-row">
        {/*---HERO---*/}
        
        <div className="container mx-auto py-4 sm:px-16 ">
            <div className="w-full flex flex-row items-center ">
                <h1 className="flex-grow text-2xl lg:text-4xl font-semibold leading-none">
                  Publications 
                </h1>
                <Link href={`/app/publications/create`}>       
                <button
                  type="button"
                  className="font-semibold border-2 border-black bg-gray-100 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                >
                  Add Publication
                </button>
                </Link>
            </div>
            <div className="py-12">
              <PublicationCard />
            </div>
        </div>
        
    </div>
  )
}

Profile.layout='appLayout'
export default Profile
