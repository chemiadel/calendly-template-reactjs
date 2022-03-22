import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Privacy: CustomNextPage = () => {
  return ( <>
        {/*---HERO---*/}
        <div className="container mx-auto px-6 py-10 sm:px-36 items-center">
            <div className="sm:w-5/5 flex flex-col items-start mt-8 sm:mt-0">
                <h1 className="text-4xl lg:text-6xl leading-none mb-4">
                  <strong className="font-black">Privacy Policy </strong> </h1>
                <p className="lg:text-lg mb-2 sm:mb-12">portunity at an event, Mentorship, or anything.</p>
                
            </div>
            <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
                strong className="font-black">
                1. Sharing data


                </strong>
            </h1>
            <p className="pb-8">
            Your data is absolutely safe with us and will never be shared with any organization, third parties or government agencies.

</p>
            <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
                strong className="font-black">
                2. Data Storage


                </strong>
            </h1>
            <p className="pb-8">
            We are a cloud service platform. All the user transactions are stored on our servers. You can access your data from any device at any time. We make sure the data is absolutely safe therefore all the data stored in the servers is heavily encrypted.

</p>
<h1 className="text-xl lg:text-2xl leading-none mb-4 "><
                strong className="font-black">
                3. Account Deletion


                </strong>
            </h1>
            <p className="pb-8">
If you wish to delete your account, Login into your ACCOUNT tab. Under the profile section, select delete account. Deleting your account removes all the information and transactions with us permanently. Once this action is confirmed, the account cannot be retrieved. No refunds will be made after the deletion of the account. Everything you delete is deleted forever.


</p>
            <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
            strong className="font-black">
            4. Payment Information


            </strong>
        </h1>
        <p className="pb-8">
We have collaborated with different payment providers around the world. The payment platforms manage and store user’s credit card details. All the credit card details are stored on the payment provider’s server. These details are not disclosed to us. You can access the payment and shipping information associated with your account under your ACCOUNT pages.
</p>
            <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
            strong className="font-black">
            5. Use of Data



            </strong>
        </h1>
        <p className="pb-8">
30mins uses the collected data for various purposes:
to provide and maintain our Service.
to notify you about changes to our Service.
to allow you to participate in interactive features of our Service when you choose to do so.
to provide customer support.
to gather analysis or valuable information so that we can improve our Service.
to monitor the usage of our Service.
to detect, prevent and address technical issues.
to fulfill any other purpose for which you provide.
to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.
to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.
in any other way we may describe when you provide the information.
for any other purpose with your consent.

</p>
            <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
            strong className="font-black">
            6. Payment Disputes




            </strong>
        </h1>
        <p className="pb-8">
Please email us at disputes@30mins.com


</p>
        </div>
    </>
  )
}

Privacy.layout='landingLayout'
export default Privacy
