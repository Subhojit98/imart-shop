
"use client"
import { Chakra_Petch, Manrope, Raleway } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'
const chakra = Chakra_Petch({ weight: "400", subsets: ["thai"] })
const manrope = Manrope({ weight: "400", subsets: ["greek"] })
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"


const Hero = () => {
    const router = useRouter()
    const [alert, setAlert] = useState(false)

    useEffect(() => {

        if (sessionStorage.getItem('alert') === 'true') {
            setAlert(false)
        }
        else {
            sessionStorage.setItem('alert', 'true')
            setTimeout(() => setAlert(true), 2000)

        }

    }, [])



    return (
        <>
            <div className="w-full h-full">
                <div className="flex justify-center">

                    <div className="w-[95%] h-[82vh] xl:h-[88vh] bg-hero-bg bg-cover bg-center relative flex flex-col justify-center items-start shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">

                        <h1 className="text-white text-6xl sm:text-7xl xl:text-9xl p-5 xl:p-10 leading-tight select-none" style={manrope.style} >Unlesh <span className="font-outline-2 text-transparent">Innovation</span> in Every <span className="text-transparent font-outline-1">Byte</span>.</h1>

                        <div className="flex flex-col items-start" style={manrope.style}>
                            <p className="text-white text-xs sm:text-sm ml-6 xl:ml-20">Embark on a journey into the forefront of innovation, where cutting-edge technology reshapes the boundaries of whats possible.</p>

                            <button className=" flex justify-center items-center mt-8 xl:mt-5 mx-7 xl:mx-20" style={chakra.style} onClick={() => router.push("/shop")}>

                                <div className="relative inline-flex group">
                                    <div
                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                    </div>
                                    <span
                                        className="relative inline-flex items-center justify-center px-7 py-3 xl:py-4 text-sm font-bold text-white transition-all duration-200 bg-[#000200] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
                                        role="button">Shop now
                                    </span>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Alert API response time ->*/}

            <AlertDialog open={alert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='text-amber-500'>Busy Backend Alert !</AlertDialogTitle>
                        <AlertDialogDescription className='text-black'>
                            This Application is useing stapi as backend for products. and currently the backend is hoasted on a free tier server. so it may take some time (60 sec) to load the products. please be patient 🙏🏼🙇🏼‍♀️.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setAlert(false)}>Okay,Undertand</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>
    )
}

export default Hero
