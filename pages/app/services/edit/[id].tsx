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
  published: boolean,
  title: string,
  slug: string,
  duration: number,
  conference: string,
  description: string,
}

const Profile: CustomNextPage = () => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("title")) // watch input value by passing the name of it
  
  return ( <div className="flex flex-row">
        {/*---HERO---*/}
        
        <div className="container mx-auto py-4 sm:px-16 ">
            <div className="w-full flex flex-row space-x-4 items-center ">
                <h1 className="flex-grow text-2xl lg:text-4xl font-semibold leading-none">
                  Edit Service 
                </h1>       
                <div className="flex flex-row space-x-2 font-semibold">
                    <div> Published </div>
                    <Controller
                        control={control}
                        name="published"
                        render={ ({ field: { onChange, onBlur, value, ref } }) =>
                            <Toggle 
                            checked={value}
                            onChange={onChange}
                            />
                        }
                      />
                </div>
                <button
                  onClick={handleSubmit(onSubmit)}
                  type="button"
                  className="border font-semibold border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
            </div>
            <div className="flex flex-row">
                <div className="  lg:w-2/3 flex flex-col pt-8 max-w-lg text-semibold space-y-4">

                  <div className="flex flex-col">
                      <label className="font-semibold text-gray-700 select-none ">Title</label>
                      <input
                      {...register("title")} 
                        id="default"
                        type="text"
                        placeholder="Title"
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />
                  </div>
                  <div className="font-semibold flex flex-col space-y-2">
                  <label >Slug</label>
                  <div className="font-semibold flex flex-row">
                      <span className="text-sm font-normal rounded-l px-4 pt-3 py-2 bg-gray-100 whitespace-no-wrap items-center">
                          {/* <p> */}
                            https://30mins.com/adel/
                            {/* </p> */}
                      </span>
                      <input 
                      {...register("slug")} 
                       className=" w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="slug" />
                  </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                          <label className="font-semibold text-gray-700 select-none ">Duration</label>
                          <input
                            id="default"
                            type="number"
                            name="default"
                            placeholder="Minutes"
                            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                      </div>
                      <div className="flex flex-col">
                          <label className="font-semibold text-gray-700 select-none ">Conference</label>
                          <select 
                          {...register("conference")} 
                              className="h-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <option>Individual</option>
                            <option>Business</option>
                          </select>
                      </div>
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
                <div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

Profile.layout='appLayout'
export default Profile
