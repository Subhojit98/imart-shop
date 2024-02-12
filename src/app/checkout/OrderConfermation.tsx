
const OrderConfermation = () => {
    const orderIdGenerator = crypto.randomUUID()
    return (
        <>
            <div className="w-full h-full flex justify-center items-center">

                <div className="w-full h-[60%] flex justify-center items-center flex-col gap-3">
                    <h1 className="text-2xl">Thank You For Your Order!</h1>
                    <p className="text-sm text-center p-3">Your order has been confirmed. You will receive an email shortly. Your order ID is {orderIdGenerator.split('-').join("")}</p>
                </div>
            </div>
        </>
    )
}

export default OrderConfermation
