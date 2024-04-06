"use client"
import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Payment from "./Payment"
import EmptyCart from "../cart/components/EmptyCart"
import Image from "next/image"
import OrderConfermation from "./OrderConfermation"
import { GlobalProviderContext } from "@/providers/GlobalProvider"
import { Context } from "@apollo/client"
import { CartObjType } from "../interface/product"
const Cart = () => {

    const { isOrderConfermed } = useContext<Context>(GlobalProviderContext)
    const [cartItemsToCheckout, setCartItemsToCheckout] = useState<[] | [CartObjType]>([])

    useEffect(() => {

        const storedCartItems = sessionStorage.getItem("cartObj")

        if (storedCartItems) {
            const cartItems = JSON.parse(storedCartItems)
            setCartItemsToCheckout(cartItems)
        }

    }, [])

    return (
        <>
            <Navbar />
            {

                isOrderConfermed ?

                    <OrderConfermation />
                    :

                    <> {cartItemsToCheckout.length < 0 ?

                        <EmptyCart />
                        :

                        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                            <div className="px-4 pt-8">
                                <p className="text-xl font-medium">Order Summary</p>
                                <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                                <div className="mt-8 space-y-3 rounded-lg border  max-h-[70%] overflow-y-auto px-2 py-4 sm:px-6">
                                    {
                                        cartItemsToCheckout.map((items, i) => {
                                            const { name, price, quantity, images } = items
                                            const imageToUse = images.data[0]?.attributes?.url
                                            return <div key={i} className="flex flex-col rounded-lg bg-white sm:flex-row">
                                                <Image src={`${imageToUse}`} alt="product image" width={100} height={100} className="m-2 h-24 w-28 rounded-md border object-cover object-center" />
                                                <div className="flex w-full flex-col px-4 py-4 gap-2">
                                                    <span className="font-semibold">{name}</span>
                                                    <p className="text-lg font-bold">{price}$</p>

                                                    <p>{quantity}X</p>
                                                </div>
                                            </div>

                                        })
                                    }
                                </div>
                            </div>

                            <Payment cartItems={cartItemsToCheckout} />
                        </div>
                    }
                    </>

            }
            <Footer />
        </>
    )
}

export default Cart
