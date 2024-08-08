import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='absolute top-4 h-max w-10/12  flex items-center justify-between sm:flex-row flex-col'>
            <div className="flex items-center justify-between text-white text-3xl h-14  w-full">
                <p className=' font-semibold font-josefin  '>
                    loopstudios
                </p>
                <FontAwesomeIcon 
                    icon={isActive ? faClose : faBars} 
                    className='cursor-pointer flex sm:hidden'
                    onClick={() => setIsActive(!isActive)}
                />
            </div>
            <div className={`${isActive ? 'flex' : 'hidden' } sm:bg-transparent bg-black p-5  sm:flex sm:flex-row flex-col items-center justify-end text-white text-sm w-full font-josefin gap-4 sm:gap-8 `}>
                <button className='hover:border-white border-b-2 border-transparent'>
                    About
                </button>
                <button className='hover:border-white border-b-2 border-transparent'>
                    Carerrs
                </button>
                <button className='hover:border-white border-b-2 border-transparent'>
                    Events
                </button>
                <button className='hover:border-white border-b-2 border-transparent'>
                    Products
                </button>
                <button className='hover:border-white border-b-2 border-transparent'>
                    Support
                </button>
            </div>
        </div>
    )
}
