import OrderConfermation from "./OrderConfermation"
import Payment from "./Payment"

const page = () => {
    return (
        <>
            <div className="w-full mt-16">

                <div className="w-full h-[60vh] overflow-y-auto flex flex-col items-center">

                    <div className="w-[88%] h-full flex justify-between">
                        <div className="w-full h-full">
                            <h1 className="text-2xl font-bold">Cart</h1>
                            <ul className="flex w-full justify-between mr-5 ml-3 mt-5">
                                <li className="">Products</li>
                                <li className="">Quantity</li>
                                <li className="mr-6">Subtotal</li>
                            </ul>

                            <div className="w-full overflow-y-auto flex items-center lg:justify-between mt-6 overflow-x-auto">
                                <div className="flex gap-3 items-center mt-3 mr-20">
                                    <div className="w-40 lg:w-32 xl:w-20 xl:h-20 h-24 bg-black"></div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <p>₦ 1000</p>
                                    </div>
                                </div>
                                <span>1X</span>

                                <div className="ml-64 flex gap-5 mr-14 lg:mr-5">
                                    <p> 1000$</p>
                                </div>
                            </div>
                            <div className="w-full  overflow-y-auto flex items-center lg:justify-between mt-6 overflow-x-auto">
                                {/* we have to add this h-[80%] */}
                                <div className="flex gap-3 items-center mt-3 mr-20">
                                    <div className="w-40 lg:w-32 xl:w-20 xl:h-20 h-24 bg-black"></div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <p>₦ 1000</p>
                                    </div>
                                </div>
                                <span>1X</span>

                                <div className="ml-64 flex gap-5 mr-14 lg:mr-5">
                                    <p> 1000$</p>
                                </div>
                            </div>
                            <div className="w-full  overflow-y-auto flex items-center lg:justify-between mt-6 overflow-x-auto">
                                {/* we have to add this h-[80%] */}
                                <div className="flex gap-3 items-center mt-3 mr-20">
                                    <div className="w-40 lg:w-32 xl:w-20 xl:h-20 h-24 bg-black"></div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <p>₦ 1000</p>
                                    </div>
                                </div>
                                <span>1X</span>

                                <div className="ml-64 flex gap-5 mr-14 lg:mr-5">
                                    <p> 1000$</p>
                                </div>
                            </div>
                            <div className="w-full  overflow-y-auto flex items-center lg:justify-between mt-6 overflow-x-auto">
                                {/* we have to add this h-[80%] */}
                                <div className="flex gap-3 items-center mt-3 mr-20">
                                    <div className="w-40 lg:w-32 xl:w-20 xl:h-20 h-24 bg-black"></div>
                                    <div>
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <p>₦ 1000</p>
                                    </div>
                                </div>
                                <span>1X</span>

                                <div className="ml-64 flex gap-5 mr-14 lg:mr-5">
                                    <p> 1000$</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-[88%] m-auto mt-5 h-full p-10 bg-gray-300 flex justify-between">
                    <h4 className="">
                        Order Total
                    </h4>
                    <h5 className="">
                        1000$
                    </h5>
                </div>
                <Payment />
                {/* <OrderConfermation /> */}

            </div>

        </>
    )
}

export default page
