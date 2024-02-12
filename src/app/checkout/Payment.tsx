import { Button } from "@/components/ui/button"


const Payment = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center sm:justify-start">
                <div className=" w-11/12 h-full mt-10 flex flex-col justify-center">
                    <div className="w-full flex justify-center items-center">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 max-lg:order-1">
                                <h2 className="text-3xl font-extrabold text-[#333]">Make a payment</h2>
                                <p className="text-[#333] text-base mt-6">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>
                                <form className="mt-12 max-w-lg">
                                    <div className="grid gap-6">
                                        <input type="text" placeholder="Cardholder's Name"
                                            className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                                        <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-3" viewBox="0 0 32 20">
                                                <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                                                <path fill="#fed049"
                                                    d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                                                    className="hovered-path" data-original="#fed049" />
                                            </svg>
                                            <input type="text" placeholder="Card Number"
                                                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm outline-none" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <input type="text" placeholder="EXP."
                                                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                                            <input type="text" placeholder="CVV"
                                                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button className="mt-6 w-36 p-5">Back to cart</Button>
                                        <Button variant={"ghost"} className="mt-6 w-36 p-5  border border-black">checkout</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Payment
