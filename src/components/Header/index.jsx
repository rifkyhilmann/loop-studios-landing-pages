import React from 'react'

export default function Header() {
    return (
        <div className='header w-full bg-black flex items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 h-60 w-10/12 '>
                <div className='header-content border flex items-center justify-center '>
                    <p className='text-5xl font-josefin font-thin p-7 uppercase text-white'>
                        Immersive experiences that deliver 
                    </p>
                </div>
                
            </div>
        </div>
    )
}
