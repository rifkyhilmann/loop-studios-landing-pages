import React from 'react'

export default function Content() {
    return (
        <div className='content w-full flex flex-col items-center justify-center'>
            <div className='content-container w-10/12 h-max min-h-96  flex flex-col gap-5 relative'>
                <div className='img-content'></div>
                <div className='content-title w-96 h-60 bg-white absolute bottom-0 right-0'>
                    <div className='p-9 flex flex-col gap-2'>
                        <p className='text-2xl font-josefin ' >
                            THE LEADER IN INTERACTIVE VR
                        </p>
                        <p className='font-alata text-sm '>
                            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
