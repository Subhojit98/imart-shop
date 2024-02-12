import emptycart from '@/app/assets/images/icons8-empty-cart-96.png'
import Image from 'next/image'
const EmptyCart = () => {
    return (
        <>

            <div className="w-full h-full flex justify-center mt-16">

                <div className="w-[82%] h-full">
                    <h1 className="text-2xl font-bold lg:mx-10">Cart</h1>

                    <div className="flex justify-center flex-col items-center">
                        <p className="text-lg mt-10 mb-5">Your cart is empty.</p>
                        <Image src={emptycart} alt="empty cart" width={96} height={96} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmptyCart
