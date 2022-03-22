import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Privacy: CustomNextPage = () => {
  return ( <>
        {/*---HERO---*/}
        <div className="container text-lg mx-auto px-6 py-10 sm:px-36 items-center space-y-">
            <div className="sm:w-5/5 flex flex-col items-start mt-8 sm:mt-0">
                <h1 className="text-4xl lg:text-6xl leading-none mb-4">
                  <strong className="font-black">About us </strong> </h1>
            </div>
            <p className="py-8">
            Useful knowledge is dispersed, hidden and buried in the minds of individuals around the world.
            </p>
            <p className="pb-8">
            Our company mission is to make the knowledge of the world's experts universally accessible.  We envision a world where everyone can effortlessly tap the world’s collective knowledge.            </p>
            <p className="pb-8">
            A world where anyone can connect to experts anywhere to leverage their insights and perspectives.            </p>
        </div>
    </>
  )
}

Privacy.layout='landingLayout'
export default Privacy
