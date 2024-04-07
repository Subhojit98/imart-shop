"use client"
import Image from "next/image"
import deleteBtn from '@/app/assets/trash-alt.svg'
import { Button } from "@/components/ui/button"
import EmptyCart from "./components/EmptyCart"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { Context } from "@apollo/client"
import { GlobalProviderContext } from "@/providers/GlobalProvider"
import { CartObjType } from "@/app/interface/product"
const Page = () => {
    const router = useRouter()

    const { cartObj, setCartObj } = useContext<Context>(GlobalProviderContext)

    // delete item from cart ->
    const handlDelectItemFromCart = (name: any): void => {
        const updatedCartObj = cartObj.filter((product: any) => product.name !== name)
        setCartObj(updatedCartObj)

        sessionStorage.setItem("cartObj", JSON.stringify(updatedCartObj))
    }

    const incrementItemQuantity = (name: string) => {

        const updatedCartObj = cartObj.map((product: any) => {

            if (product.name === name) {

                return { ...product, quantity: product.quantity + 1 }
            }
            return product
        })

        setCartObj(updatedCartObj)
        sessionStorage.setItem("cartObj", JSON.stringify(updatedCartObj))
    }


    const deCrementItemQuantity = (name: string): void => {

        const updatedCartObj = cartObj.map((product: any) => {
            if (product.name === name) {
                return { ...product, quantity: product.quantity == 1 ? 1 : product.quantity - 1 }
            }
            return product
        })

        setCartObj(updatedCartObj)
        sessionStorage.setItem("cartObj", JSON.stringify(updatedCartObj))
    }

    // generate subtotal ->
    const generateSubTotal = (cartValues: [CartObjType]) => {

        return cartValues.reduce((acc, item) => {
            return item.price * item.quantity + acc
        }, 0)
    }
    // static tax and shipping charges ->
    const taxCharges = 2.99
    const shippingCharges = 16.77
    // return total value upto 2 decimal places -> ex: 2.00
    const generateTotal = (generateSubTotal(cartObj) + taxCharges + shippingCharges).toFixed(2)

    return (
        <>
            <Navbar />
            <div className="w-full mt-10">
                {cartObj.length <= 0 && <EmptyCart />}
                {cartObj.length > 0 &&
                    <div className="w-full h-[60vh] overflow-y-auto flex flex-col items-center">

                        <div className="w-[88%] overflow-x-auto h-full flex flex-col xl:flex-row gap-5 justify-between">
                            <div className="w-full h-full">
                                <h1 className="text-2xl font-bold">Cart</h1>
                                <ul className="flex justify-between gap-10 w-full mt-6">
                                    <li className="">Products</li>
                                    <li className="mr-5">Quantity</li>
                                </ul>

                                <div className="w-full overflow-y-auto mt-6">

                                    {cartObj.map((products: CartObjType, i: number) => {

                                        const { name, price, images, quantity } = products

                                        return <div key={i} className="flex h-[80%] gap-5 md:gap-16 xl:justify-between items-center">
                                            <div className="flex gap-3 items-center mt-3">
                                                <div className="w-40 lg:w-32 xl:w-20 xl:h-20 h-24">
                                                    <Image src={images.data[0]?.attributes?.url} alt="" className="w-full h-full object-cover" width={100} height={100} />
                                                </div>
                                                <div>
                                                    <h4>{name}</h4>
                                                    <p className="font-semibold mt-3">$ {price}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-10">

                                                <Image src={deleteBtn} alt="" className="w-6 h-6 mr-10 cursor-pointer" onClick={() => handlDelectItemFromCart(name)} />

                                                <div className="py-2 px-3 inline-block border border-gray-900 rounded-lg h-10">

                                                    <div className="flex items-center gap-x-1.5">
                                                        <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" onClick={() => deCrementItemQuantity(name)}>

                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                                        </button>

                                                        <span className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0">{quantity}</span>

                                                        <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" onClick={() => incrementItemQuantity(name)}>

                                                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    })}

                                </div>
                            </div>

                            <div className="w-full mt-10 xl:mt-0 xl:w-[30%] h-full bg-slate-100">
                                <div className="p-6 flex flex-col gap-y-3">
                                    <h2 className="text-lg font-semibold mb-4 text-center my-5">Summary</h2>
                                    <div className="flex justify-between mb-2">
                                        <span>Subtotal</span>
                                        <span>${generateSubTotal(cartObj)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Taxes</span>
                                        <span>$1.99</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Shipping</span>
                                        <span>$16.77</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-semibold">${generateTotal}</span>
                                    </div>
                                    <Button className="bg-gray-950 p-6" onClick={() => router.push("/checkout")}>Checkout</Button>
                                </div>
                            </div>
                        </div>
                    </div>}
                <div className="w-full h-full flex justify-center">
                    <div className="w-[88%] h-[23vh] bg-gray-200 mt-20 flex flex-col lg:flex-row items-center justify-evenly p-2 lg:p-0">
                        <div className="flex flex-col gap-3 mb-5 items-start lg:flex-none xl:mb-0">
                            <h3 className="text-2xl">Continue shopping</h3>
                            <p className="mt-3">Discover more products that are prefect for gift, for your wardrobe, or a unique addition to your collection.</p>
                        </div>
                        <Button className="xl:ml-5 p-5 bg-gray-950 hover:bg-gray-900 place-self-start lg:place-self-center" onClick={() => router.push("/shop")}>Continue shopping</Button>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Page

