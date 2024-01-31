import { Chakra_Petch, Raleway } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import shopingCart from '@/app/assets/shopping-cart-alt.svg'
const chakra = Chakra_Petch({ weight: "400", subsets: ["thai"] })
const raleway = Raleway({ weight: "400", subsets: ["latin-ext"] })
const Navbar = () => {
    return (
        <>
            <nav className="w-full h-[10vh] flex justify-between pr-14 pl-32 items-center z-40">
                <div>
                    <h1 className="text-3xl font-bold cursor-pointer" style={chakra.style}>iMart</h1>
                </div>
                <div>
                    <ul className="flex gap-7" style={raleway.style}>
                        <li className="cursor-pointer relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Home</li>
                        <li className="cursor-pointer relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Shop</li>
                        <li className="cursor-pointer mx-2 w-14"><Image src={shopingCart} alt='shoping cart' /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
