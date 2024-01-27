import { Chakra_Petch, Raleway } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import shopingCart from '@/app/assets/shopping-cart-alt.svg'
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const Navbar = () => {
    return (
        <>
            <nav className="w-full h-[10vh] flex justify-between pr-14 pl-32 items-center z-40">
                <div>
                    <h1 className="text-3xl font-bold cursor-pointer" style={chakra.style}>iMart</h1>
                </div>
                <div>
                    <ul className="flex gap-7" style={raleway.style}>
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Shop</li>
                        <li className="cursor-pointer mx-2 w-14"><Image src={shopingCart} alt='' /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
