import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-full h-max min-h-60 bg-black text-white flex items-center justify-center'>
            <div className='w-10/12 my-10 flex items-center justify-between sm:flex-row flex-col gap-10'>
                <div className='flex flex-col gap-5 sm:gap-7 '>
                    <p className=' font-semibold font-josefin text-2xl  '>
                        loopstudios
                    </p>
                    <div className='flex items-center gap-3 text-sm sm:flex-row flex-col'>
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
                <div className='flex flex-col gap-7 items-center sm:items-end '>
                    <div className='flex items-center gap-3 text-sm'>
                        <FontAwesomeIcon icon={faFacebook} className='text-lg ' />
                        <FontAwesomeIcon icon={faTwitter} className='text-lg' />
                        <FontAwesomeIcon icon={faPinterest} className='text-lg' />
                        <FontAwesomeIcon icon={faInstagram} className='text-lg' />
                        
                    </div>
                    <p className=' font-josefin text-sm  '>
                        © 2021 Loopstudios. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}
