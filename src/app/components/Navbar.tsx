"use client"
import { Chakra_Petch, Raleway } from 'next/font/google'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import shopingCart from '@/app/assets/shopping-cart-alt.svg'
import { useRouter } from 'next/navigation'
import { GlobalProviderContext } from '@/providers/GlobalProvider'
import { Context } from '@apollo/client'
const chakra = Chakra_Petch({ weight: "400", subsets: ["thai"] })
const raleway = Raleway({ weight: "400", subsets: ["latin-ext"] })

const Navbar = () => {

    const router = useRouter()
    const { cartObj, setCartObj } = useContext<Context>(GlobalProviderContext)
    const [cartItemCounter, setCartItemCounter] = useState(0)

    const pageReload = () => {
        window.location.reload()

    }
    useEffect(() => {
        const storedProductToGet = sessionStorage.getItem("cartObj")
        if (storedProductToGet) {
            setCartObj(JSON.parse(storedProductToGet))
        }
    }, [])

    useEffect(() => {
        setCartItemCounter(cartObj.length)
    }, [cartObj])


    return (
        <>
            <nav className={`w-full h-[8vh] sm:h-[9vh] flex justify-between  items-center z-40 relative bg-white xl:h-[10vh] xl:pr-14 xl:pl-32`}>
                <div className='ml-5 xl:ml-0' onClick={pageReload}>
                    <h1 className="text-xl sm:text-2xl font-bold cursor-pointer xl:text-3xl" style={chakra.style}>iMart</h1>
                </div>
                <div>
                    <ul className="flex items-center gap-4 xl:gap-7" style={raleway.style}>
                        <li className="cursor-pointer relative sm:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onClick={() => router.push("/")}>Home</li>
                        <li className="cursor-pointer relative sm:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onClick={() => router.push("/shop")}>Shop</li>

                        <li className="cursor-pointer xl:mx-2 w-14 relative" onClick={() => router.push("/cart")}>
                            <span className="absolute -mt-4 ml-3 px-2 py-[2px] bg-black rounded-full text-white text-sm">
                                {cartItemCounter}
                            </span>
                            <Image src={shopingCart} alt='shopping cart' />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
