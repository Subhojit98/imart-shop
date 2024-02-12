import Image from "next/image"
import ContinueShopping from "./components/ContinueShopping"
import deleteBtn from '@/app/assets/trash-alt.svg'
import { Button } from "@/components/ui/button"
import Payment from "../checkout/Payment"
import EmptyCart from "./components/EmptyCart"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const page = () => {
    return (
        <>
            <Navbar />


            <div className="w-full mt-10">
                {/* <EmptyCart /> */}

                <div className="w-full h-[60vh] overflow-y-auto flex flex-col items-center">

                    <div className="w-[88%] overflow-x-auto h-full flex flex-col xl:flex-row gap-2 justify-between">
                        <div className="w-full h-full">
                            <h1 className="text-2xl font-bold">Cart</h1>
                            <ul className="flex justify-between gap-10 w-full xl:px-10 mt-5">
                                <li className="">Products</li>
                                <li className="">Quantity</li>
                                <li className="mr-6">Subtotal</li>
                            </ul>

                            <div className="w-full overflow-y-auto mt-6">
                                <div className="flex h-[80%] gap-5 md:gap-16 xl:justify-between items-center">
                                    <div className="flex gap-3 items-center mt-3">
                                        <div className="w-40 lg:w-32 xl:w-20 xl:h-20 h-24 bg-black"></div>
                                        <div>
                                            <h4>Lorem ipsum dolor sit amet</h4>
                                            <p>$ 1000</p>
                                        </div>
                                    </div>

                                    <div className="py-2 px-3 inline-block border border-gray-900 rounded-lg h-10">
                                        <div className="flex items-center gap-x-1.5">
                                            <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-decrement>
                                                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                            </button>
                                            <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" placeholder="0" data-hs-input-number-input />

                                            <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment>
                                                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="ml-52 flex gap-5">
                                        <p> 1000$</p>
                                        <button className=""><Image src={deleteBtn} alt="" className="w-6 h-6 mr-10" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-10 xl:mt-0 xl:w-[30%] h-full bg-slate-100">
                            <div className="p-6 flex flex-col gap-y-3">
                                <h2 className="text-lg font-semibold mb-4 text-center my-5">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>$19.99</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>$1.99</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>$0.00</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">$21.98</span>
                                </div>
                                <Button className="bg-gray-950 p-6">Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <ContinueShopping />
            </div>
            <Footer />

        </>
    )
}

export default page
