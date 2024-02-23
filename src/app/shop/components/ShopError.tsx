import Image from 'next/image'
import React from 'react'
import notFound from '@/app/assets/images/icons8-empty-96.png'

const ShopError = () => {
    return (
        <div className='w-full flex flex-col gap-10 justify-center items-center'>
            <Image src={notFound} alt='' />
            <p className='text-2xl text-red-500'>Opps..Somthing went wrong.!!</p>
        </div>
    )
}

export default ShopError
