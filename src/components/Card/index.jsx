import img1 from '../../assets/desktop/image-deep-earth.jpg'
import img2 from '../../assets/desktop/image-night-arcade.jpg'
import img3 from '../../assets/desktop/image-soccer-team.jpg'
import img4 from '../../assets/desktop/image-from-above.jpg'
import img5 from '../../assets/desktop/image-pocket-borealis.jpg'
import img6 from '../../assets/desktop/image-grid.jpg'
import img7 from '../../assets/desktop/image-curiosity.jpg'
import img8 from '../../assets/desktop/image-fisheye.jpg'

export default function Card() {
    return (
        <div className='card flex items justify-center'>
            <div className='w-10/12 h-full flex flex-col gap-3 '>
                <div className='h-20 w-full flex items-center justify-between'>
                    <p className='font-josefin text-3xl'>
                        OUR CREATIONS
                    </p>
                    <button className='h-10 w-28 border border-black text-black hover:text-white hover:bg-black'>
                        SEE ALL
                    </button>
                </div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-4'>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img1} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata w-11/12 px-4  text-2xl text-white'>
                                DEEP EARTH 
                            </p>
                        </div>
                    </div>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img2} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata uppercase w-11/12 px-4  text-2xl text-white'>
                                Night arcade 
                            </p>
                        </div>
                    </div>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img3} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata uppercase w-11/12 px-4  text-2xl text-white'>
                                Soccer team 
                            </p>
                        </div>
                    </div>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img4} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata w-11/12 px-4  text-2xl text-white'>
                                DEEP EARTH 
                            </p>
                        </div>
                    </div>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img5} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata w-11/12 px-4  text-2xl text-white'>
                                DEEP EARTH 
                            </p>
                        </div>
                    </div>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img6} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata w-11/12 px-4  text-2xl text-white'>
                                DEEP EARTH 
                            </p>
                        </div>
                    </div>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img7} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata w-11/12 px-4  text-2xl text-white'>
                                DEEP EARTH 
                            </p>
                        </div>
                    </div>
                    <div className='h-32 sm:h-80  relative'>
                        <img 
                            src={img8} 
                            alt="" 
                            className='w-full h-full object-cover'
                        />
                        <div className='w-full h-max absolute  bottom-10 flex items-center justify-center '>
                            <p className='font-alata w-11/12 px-4  text-2xl text-white'>
                                DEEP EARTH 
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
