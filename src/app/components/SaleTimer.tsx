"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Raleway, Manrope, Chakra_Petch } from "next/font/google"
import Image from 'next/image'
import saleBanner from '@/app/assets/images/sale banner.webp'
import { useRouter } from 'next/navigation'
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const SaleTimer = () => {

    const [setTimer, setSetTimer] = useState(7 * 24 * 60 * 60)
    const router = useRouter()


    const timeCountDown = () => {
        const days = Math.floor(setTimer / (60 * 60 * 24))
        const hours = Math.floor((setTimer % (60 * 60 * 24)) / (60 * 60))
        const minutes = Math.floor((setTimer % (60 * 60)) / 60);
        const seconds = setTimer % 60;

        return { days, hours, minutes, seconds }

    }
    useEffect(() => {

        //  refresh time every second -> 
        const reFreshTime = setInterval(() => {
            setSetTimer((prevCount) => {

                if (prevCount <= 0) {
                    return 7 * 24 * 60 * 60
                }
                else {
                    return prevCount - 1
                }
            })
        }, 1000)

        // Cleanup interval on unmount -> 
        return () => {
            clearInterval(reFreshTime)
        }
    }, [])

    return (
        <>
            <div className="w-full h-full md:h-dvh flex justify-center items-center magicpattern">
                <div className="flex flex-col md:flex-row justify-around shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-l border-2 items-center w-[93%] sm:w-[90%] md:w-[85%] h-[80%] bg-white">
                    {/* Sale Text -> */}

                    <div className="flex flex-col gap-5 w-full sm:w-[85%] xl:w-1/2 h-full p-6 xl:p-10">

                        <h4 className="text-3xl sm:mt-5" style={chakra.style}>{`Deal's of the month`}</h4>

                        <p className="" style={raleway.style}>Get ready for shoping experience like never before with our Deals of the Month! Every purchase with exclusive perks and offers, making this month a celebration of savy choices amazing deals.Dont miss out! 🎁🛒</p>
                        {

                            <div className="flex gap-4 mt-4" style={chakra.style}>

                                <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                    <h5 className='font-bold'>{timeCountDown().days}</h5>
                                    <p>Days</p>
                                </div>
                                <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                    <h5 className='font-bold'>{timeCountDown().hours}</h5>
                                    <p>Hours</p>
                                </div>
                                <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                    <h5 className='font-bold'>{timeCountDown().minutes}</h5>
                                    <p>Mins</p>
                                </div>
                                <div className='flex flex-col items-center justify-center bg-violet-400 w-20 h-20 rounded-md '>
                                    <h5 className='font-bold'>{timeCountDown().seconds}</h5>
                                    <p>Seconds</p>
                                </div>
                            </div>}

                        <Button className="relative inline-flex items-center justify-center mt-3 p-4 py-6 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group w-[45%] xl:w-[35%]" style={manrope.style}
                            onClick={() => router.push("/shop")}>
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>

                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Products</span>
                        </Button>
                    </div>

                    {/*Sale Banner -> */}
                    <div className="w-11/12 sm:w-[80%] h-full flex justify-center items-center mb-5">
                        <Image src={saleBanner} alt="" className="w-full h-[80%] object-contain object-center" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaleTimer
