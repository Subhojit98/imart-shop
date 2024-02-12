"use client"
import { Chakra_Petch, Raleway } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import shopingCart from '@/app/assets/shopping-cart-alt.svg'
import { useRouter } from 'next/navigation'
const chakra = Chakra_Petch({ weight: "400", subsets: ["thai"] })
const raleway = Raleway({ weight: "400", subsets: ["latin-ext"] })

const Navbar = () => {
    const router = useRouter()
    return (
        <>
            <nav className={`w-full h-[8vh] sm:h-[9vh] flex justify-between  items-center z-40 relative bg-white xl:h-[10vh] xl:pr-14 xl:pl-32`}>
                <div className='ml-5 xl:ml-0'>
                    <h1 className="text-xl sm:text-2xl font-bold cursor-pointer xl:text-3xl" style={chakra.style}>iMart</h1>
                </div>
                <div>
                    <ul className="flex gap-4 xl:gap-7" style={raleway.style}>
                        <li className="cursor-pointer relative sm:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onClick={() => router.push("/")}>Home</li>
                        <li className="cursor-pointer relative sm:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onClick={() => router.push("/shop")}>Shop</li>
                        <li className="cursor-pointer xl:mx-2 w-14" onClick={() => router.push("/cart")}><Image src={shopingCart} alt='shoping cart' /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
