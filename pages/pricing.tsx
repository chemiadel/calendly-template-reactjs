import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Pricing: CustomNextPage = () => {
  return ( <>
        {/*---HERO---*/}
        <div className="container mx-auto px-6 py-10 sm:px-36 items-center">
            <div className="sm:w-5/5 flex flex-col items-start mt-8 sm:mt-0">
                <h1 className="text-4xl lg:text-6xl leading-none mb-4">
                  <strong className="font-black">Pricing </strong> </h1>
                <p className="lg:text-lg mb-2 sm:mb-12">portunity at an event, Mentorship, or anything.</p>
                
            </div>
            <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
                strong className="font-black">
                Scheduling meetings with experts

                </strong>
            </h1>
            <p className="pb-8">
                FREE. We charge you nothing. You do not even need to signup with us to schedule meetings wth experts.
            </p>
            <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
                strong className="font-black">
                Experts

                </strong>
            </h1>
            <p className="pb-8">
                FREE to signup, create your personalized link that you can share for others to schedule meetings with you or have your profile listed on 30mins.com or published on google.com and other search engines.
                We charge you nothing if you charge your clients nothing. For your PAID meetings where you charge your clients to talk to you, we charge a small fees of 10% which includes the STRIPE fees that we have to pay to STRIPE.            
            </p>
        </div>
        
    </>
  )
}

Pricing.layout='landingLayout'
export default Pricing
