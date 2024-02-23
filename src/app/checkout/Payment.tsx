"use client"
import { useContext, useState } from "react"
import paymentCard from '@/app/assets/credit-card.svg'
import street from '@/app/assets/estate.svg'
import Image from "next/image"
import { Context } from "@apollo/client"
import { GlobalProviderContext } from "@/providers/GlobalProvider"
import { CartObjType } from '@/app/interface/product'


const Payment = ({ cartItems }: { cartItems: [CartObjType] | [] }) => {
    const taxCharges = 2.99
    const shippingCharges = 16.77
    const [cardNumber, setCardNumber] = useState<string>("")
    const [cardCvv, setCardCvv] = useState<string>("")
    const [cardExpiry, setCardExpiry] = useState<string>("")
    const { setIsOrderConfermed, setCartObj } = useContext<Context>(GlobalProviderContext)


    const countSubTotal = (cart: [CartObjType] | []) => {

        return cart.reduce((acc: number, item: any) => {
            return item.price * item.quantity + acc
        }, 0)
    }

    const generatTotal = (cartValues: any) => {

        return (cartValues.reduce((acc: number, item: any) => {
            return item.price * item.quantity + acc
        }, 0) + taxCharges + shippingCharges)

    }

    const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target
        const isNumber = /^[0-9]*$/.test(value)
        isNumber && setCardNumber(value)

    }

    const handleCardCvv = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target
        const isNumber = /^[0-9]*$/.test(value)
        isNumber && setCardCvv(value)

    }

    const handleCardExpiry = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;

        // Remove any non-numeric characters ->
        const numericValue = value.replace(/\D/g, '');

        // Format the value
        let formattedValue = '';
        for (let i = 0; i < numericValue.length; i++) {
            // Add '/' after the first two characters ->
            if (i === 2) {
                formattedValue += '/';
            }
            formattedValue += numericValue[i];
        }
        setCardExpiry(formattedValue)
    }


    const handlePlaceOrder = (): void => {

        if (cardNumber.length === 16 && cardCvv.length === 3 && cardExpiry.length === 5) {
            setIsOrderConfermed(true)
        }

        setCartObj([])
        sessionStorage.setItem("cartObj", JSON.stringify([]))
    }
    return (
        <>

            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">Complete your order by providing your payment details.</p>
                <div >

                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
                    <div className="relative">
                        <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>
                    </div>
                    <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
                    <div className="flex">
                        <div className="relative w-7/12 flex-shrink-0">
                            <input type="tel" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" maxLength={16} aria-placeholder="Card Number" onChange={handleCardNumber} value={cardNumber} />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <Image src={paymentCard} alt="credit card" className="h-4 w-4" />

                            </div>
                        </div>
                        <input type="tel" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" onChange={handleCardExpiry} value={cardExpiry} maxLength={5} />

                        <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" maxLength={3} onChange={handleCardCvv} value={cardCvv} />
                    </div>
                    <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                    <div className="flex flex-col sm:flex-row">
                        <div className="relative flex-shrink-0 sm:w-7/12">
                            <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <Image src={street} alt="address" className="h-4 w-4" />

                            </div>
                        </div>
                        <select typeof="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                            <option value="State">State</option>
                            <option value="State">West Bengal</option>
                            <option value="State">Odisa</option>
                            <option value="State">Uttar Paradesh</option>
                            <option value="State">Delhi</option>
                            <option value="State">Panjab</option>
                            <option value="State">Karnataka</option>
                            <option value="State">Tamilnadu</option>
                            <option value="State">kerala</option>
                        </select>
                        <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
                    </div>

                    {/* <!-- Total --> */}
                    <div className="mt-6 border-t border-b py-3">
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm font-medium text-gray-900">Subtotal</p>
                            <p className="font-semibold text-gray-900">${countSubTotal(cartItems)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm font-medium text-gray-900">Shipping</p>
                            <p className="font-semibold text-gray-900">${shippingCharges}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm font-medium text-gray-900">Taxes</p>
                            <p className="font-semibold text-gray-900">${taxCharges}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900">${(generatTotal(cartItems)).toFixed(2)}</p>
                    </div>
                </div>
                <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePlaceOrder}>Place Order</button>
            </div>


        </>
    )
}

export default Payment

