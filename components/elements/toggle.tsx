import { useState, useRef, MutableRefObject } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle({checked, onChange}:{
    checked?: boolean,
    onChange: (checked: boolean)=> void
}) {
    // RefObject<HTMLDivElement>
  return (
        <div className="relative inline-block w-10 mr-2  select-none transition duration-200 ease-in">
        <input 
        // checked={checked || false}
        onClick={(e)=>onChange(e.currentTarget.checked)}
        type="checkbox" name="toggle" id="toggle" 
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label htmlFor="toggle" 
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
  )
}
