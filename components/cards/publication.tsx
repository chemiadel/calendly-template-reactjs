
import { useState, useRef, useEffect } from "react"
import Link from 'next/link'

export default function ServiceCard(){

    return <div className="flex flex-col w-full bg-white border border-black rounded-lg py-2 divide-y">

        <div className="flex flex-row space-x-2 px-4 items-center" >                
            <h1 className="flex-grow text-xl font-semibold pl-4">Publication title</h1>
            <button className=" hover:bg-gray-100 rounded-lg m-1 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </button>
            <Menu />
        </div>
        <div className="flex flex-row px-4 pt-4" >
            <img className="w-64 h-32 rounded-lg" src="https://media-exp1.licdn.com/dms/image/C5622AQHOUrPQ0Bra7g/feedshare-shrink_800/0/1635433442401?e=1638403200&v=beta&t=z-D0hisgTsn41yNZe8sR_k62rtEqxdQriTmD9seoyRk"/>
            <p 
            className="pl-2 text-lg" 
            // dangerouslySetInnerHTML={{
            //     __html:'<div style="font-family:Open Sans,Helvetica,Tahoma,Arial,sans-serif;font-size:16px;font-weight:400;line-height:25px;text-align:left;color:#4f4f4f"><br> Hi chemi adel, <br><br> Order <a style="font-weight:bold;color:#2e9cc3" href="https://trade.aliexpress.com/order_detail.htm?orderId=3013717520787266&amp;edm_click_module=body&amp;tracelog=rowan&amp;rowan_id1=logisticsDefaultNoticeV2_1_en_US_2021-10-29&amp;rowan_msg_id=7266301371752078$db57190697094b1bb3f6ee37d04485b9&amp;ck=in_edm_other" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trade.aliexpress.com/order_detail.htm?orderId%3D3013717520787266%26edm_click_module%3Dbody%26tracelog%3Drowan%26rowan_id1%3DlogisticsDefaultNoticeV2_1_en_US_2021-10-29%26rowan_msg_id%3D7266301371752078$db57190697094b1bb3f6ee37d04485b9%26ck%3Din_edm_other&amp;source=gmail&amp;ust=1635655443971000&amp;usg=AFQjCNFnkNoNWf6FUrRaQLGS2L_khdV4xQ">3013717520787266</a> has a delivery update. You can view the shipping status below. <br></div>'}}
                >
                    Update to your delivery
Hi chemi adel,
Order 3013717520787266 has a delivery update. You can view the shipping status below.
                </p>
        </div>
    </div>
}



function Menu(){
    const [ toggle, setToggle ] = useState(false)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setToggle);

    return <div className="relative">
      <button onClick={()=>setToggle(!toggle)} className=" hover:bg-gray-100 rounded-lg m-1 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </button>
    {toggle?
    <div ref={wrapperRef} className=" font-semibold text-md absolute right-0 z-20 w-xs py-1 mt-2 border border-gray-600 bg-white rounded-md shadow-xl dark:bg-gray-800">
        <Link href={`/services/edit/${123}`} passHref>
        <a onClick={()=>setToggle(!toggle)} className="border-b block px-4 py-2 text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
            Edit
        </a>
        </Link>
        <Link href={`/dashboard/overview`} passHref>
        <a onClick={()=>setToggle(!toggle)} className="block px-4 py-2  text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
            Delete
        </a>
        </Link>
    </div> : null }
  </div>
  }


  function useOutsideAlerter(ref : any, setToggle:any) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event : any) {
            if (ref.current && !ref.current.contains(event.target)) {
              setToggle(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
