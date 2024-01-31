import { Button } from '@/components/ui/button'
import React from 'react'
import { Rubik, Raleway, Manrope, Chakra_Petch } from "next/font/google"
import Image from 'next/image'
import saleBanner from '@/app/assets/images/sale banner.webp'
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })

const SaleTimer = () => {
    return (
        <>
            <div className="w-full h-dvh flex justify-center items-center magicpattern">
                <div className="flex justify-around shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-l border-2 items-center w-[85%] h-[80%] bg-white">
                    {/* Sale Text -> */}

                    <div className="flex flex-col gap-5 w-1/2 h-full p-10 ">

                        <h4 className="text-2xl" style={chakra.style}>{`Deal's of the month`}</h4>

                        <p className="" style={raleway.style}>Get ready for shoping experience like never before with our Deals of the Month! Every purchase with exclusive perks and offers, making this month a celebration of savy choices amazing deals.Dont miss out! 🎁🛒</p>

                        <div className="flex gap-4 mt-4" style={chakra.style}>

                            <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                <h5 className='font-bold'>7</h5>
                                <p>Days</p>
                            </div>
                            <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                <h5 className='font-bold'>10</h5>
                                <p>Hours</p>
                            </div>
                            <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                <h5 className='font-bold'>56</h5>
                                <p>Mins</p>
                            </div>
                            <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                <h5 className='font-bold'>07</h5>
                                <p>Seconds</p>
                            </div>
                        </div>

                        <Button className="relative inline-flex items-center justify-center mt-3 p-4 py-6 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group w-[25%]" style={manrope.style}>
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>

                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Products</span>
                        </Button>
                    </div>

                    {/*Sale Banner -> */}
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <Image src={saleBanner} alt="" className="w-full h-[80%] object-contain object-center" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaleTimer
