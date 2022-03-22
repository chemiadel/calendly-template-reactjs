import type { NextPage } from 'next'
import type { CustomNextPage } from '_utils/types'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Ckeditor = dynamic(() => import("components/ckeditor"), { ssr: false });
import dynamic from 'next/dynamic'
import Toggle from 'components/elements/toggle'
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  headline: string,
  url: string,
  type: string,
  image: string,
  description: string,
}

const Profile: CustomNextPage = () => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return ( <div className="flex flex-row">
        {/*---HERO---*/}
        
        <div className="container mx-auto py-4 sm:px-16 ">
            <div className="w-full flex flex-row space-x-4 items-center pb-6">
                <h1 className="flex-grow text-2xl lg:text-4xl font-semibold leading-none">
                  Create Publication
                </h1>       
                <button
                  onClick={handleSubmit(onSubmit)}
                  type="button"
                  className="border font-semibold border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                  Create
                </button>
            </div>
            <div className="flex flex-col lg:flex-row-reverse">
                <div className="w-full  lg:w-1/2 lg:p-14">
                  <div className="flex border-2 border-dashed h-64 rounded-lg border-gray-400 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col pt-8 max-w-lg text-semibold space-y-4">

                  <div className="flex flex-col">
                      <label className="font-semibold text-gray-700 select-none ">Title</label>
                      <input
                      {...register("headline")} 
                        id="default"
                        type="text"
                        placeholder="Headline"
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />
                  </div>
                  <div className="font-semibold flex flex-col space-y-2">
                  <label >URL</label>
                  <div className="font-semibold flex flex-row">
                      <input 
                      {...register("url")} 
                       className=" w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="slug" />
                  </div>
                  </div>
                  <div className="flex flex-col">
                      <label className="font-semibold text-gray-700 select-none ">Type</label>
                      <select 
                      {...register("type")} 
                          className="h-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <option>Individual</option>
                        <option>Business</option>
                      </select>
                  </div>
                  <div className="font-semibold flex flex-col space-y-2">
                      <label >Description</label>
                      <Controller
                        control={control}
                        name="description"
                        render={ ({ field: { onChange, onBlur, value, ref } }) =>
                          <Ckeditor
                            setContent={onChange}
                            defaultValue={value}
                          />
                        }
                      />
                      
                  </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

Profile.layout='appLayout'
export default Profile
