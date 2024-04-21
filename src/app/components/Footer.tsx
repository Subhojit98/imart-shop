import packageBox from '@/app/assets/box.svg'
import money from '@/app/assets/usd-circle.svg'
import support from '@/app/assets/headphones-alt.svg'
import card from '@/app/assets/credit-card.svg'
import facebook from '@/app/assets/facebook-f.svg'
import instagram from '@/app/assets/instagram.svg'
import twitter from '@/app/assets/twitter.svg'
import Image from 'next/image'

import { Rubik, Raleway, Manrope, Chakra_Petch } from "next/font/google"
const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })


const Footer = () => {


    const fetchBackend = () => {
        fetch('https://strapi-backend-35x6.onrender.com')
            .then(res => res
            )
            .catch(err => console.log(err))

    }

    fetchBackend()
    return (
        <>
            {/* Speciality section -> */}
            <div className="w-full mt-20">

                <div className="flex justify-around text-xs xl:text-base ml-3 sm:ml-0" style={rubik.style}>

                    <div className=" flex-col gap-1 hidden md:flex">
                        <Image src={packageBox} alt="package" className="w-5 sm:w-6 sm:h-6 xl:w-7 h-5 xl:h-7" />
                        <h5 className='font-bold sm:text-base w-1/2 md:w-full'>Free Shipping</h5>
                        <p className='text-xs xl:text-base'>Free shipping on all order above $150</p>
                    </div>
                    <div className="flex flex-col gap-1 mr-2 md:mr-0">
                        <Image src={money} alt="currency" className="w-5 sm:w-6 sm:h-6 xl:w-7 h-5 xl:h-7" />
                        <h5 className='font-bold sm:text-base'>Money Guarantee</h5>
                        <p className='text-xs xl:text-base'>Within 30 days for an exchange</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image src={support} alt="customer care" className="w-5 sm:w-6 sm:h-6 xl:w-7 h-5 xl:h-7" />
                        <h5 className='font-bold sm:text-base'>Online Support</h5>
                        <p className='text-xs xl:text-base'>24 Hours a day, &days a week</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image src={card} alt="credit card" className="w-5 sm:w-6 sm:h-6 xl:w-7 h-5 xl:h-7" />
                        <h5 className='font-bold sm:text-base'>Flexible Payment</h5>
                        <p className='text-xs xl:text-base'>With multiple credit card</p>
                    </div>
                </div>

                {/* footer section -> */}

                <footer className="w-full bg-black flex justify-center items-center mt-16">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h6 className="text-white text-2xl cursor-pointer" style={chakra.style}>iMart</h6>
                            <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">

                                <span className="block text-sm xl:text-base text-gray-400 sm:text-center mt-4 xl:mt-0 dark:text-gray-400 select-none " style={manrope.style}>© 2024 iMart™. All Rights Reserved.</span>

                            </div>
                            <ul className='text-white flex gap-3'>
                                <li>
                                    <Image src={facebook} alt='facebook' className="hover:underline me-4 md:me-6 cursor-pointer hover:opacity-70 duration-200 ease-linear"></Image>
                                </li>
                                <li>
                                    <Image src={instagram} alt='instagram' className="hover:underline me-4 md:me-6 cursor-pointer hover:opacity-70 duration-200 ease-linear"></Image>
                                </li>
                                <li>
                                    <Image src={twitter} alt='twitter' className="hover:underline me-4 md:me-6 cursor-pointer hover:opacity-70 duration-200 ease-linear"></Image>
                                </li>
                            </ul>
                        </div>

                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer
