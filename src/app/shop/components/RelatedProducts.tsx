"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import fallbackImage from '@/app/assets/images/catagory accessories.webp'
import Image from "next/image"
import { Rubik, Manrope, Raleway } from "next/font/google"
import { useFetchRelatedProducts } from "@/app/hooks/useFetchRelatedProducts"
import { useContext, useEffect, useState } from "react"
import { Context } from "@apollo/client"
import { ProductDetailsContext } from "@/providers/ProductContext"
import { useRouter } from "next/navigation"
const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
type ProductViewProps = {
    productInfoObj: {
        name: string,
        id: number,
        relation: string
    }
}

const RelatedProducts = () => {

    const router = useRouter()
    const { productDetails, setProductDetails } = useContext<Context>(ProductDetailsContext)

    const { data: relatedProducts } = useFetchRelatedProducts(productDetails?.relation)

    const handleClickProduct = (data: any) => {
        const itemDetails = {
            name: data.name,
            id: data.id,
            relation: productDetails?.relation,
            quantity: data.quantity
        }
        sessionStorage.setItem("productDetails", JSON.stringify(itemDetails))
        router.push(`/shop/${data.name}-product-id-${data.id}`)
    }

    useEffect(() => {

        const sessionProductDetails = sessionStorage.getItem("productDetails")

        if (sessionProductDetails) {
            setProductDetails(JSON.parse(sessionProductDetails))
        }
    }, [])

    return (
        <>

            <div className="w-full h-full mt-16 flex mb-40 justify-center">
                <div className="w-11/12 h-full" style={manrope.style}>

                    <div className="flex flex-col gap-y-8">
                        <h1 className="text-2xl font-semibold mt-8">Related Products</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-3">

                            {
                                relatedProducts?.products?.data?.slice(0, 3).filter((item: any) => item.attributes.name !== productDetails?.name).map((product: any, i: number) => {
                                    const { name, price, images } = product?.attributes
                                    const imageUrlToUse = images?.data[0]?.attributes?.url

                                    return < Card key={i} className=" w-11/12 h-[38vh] bg- cursor-pointer border-none rounded-md flex flex-col justify-between gap-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 duration-200 ease-out" onClick={() => handleClickProduct(product.attributes)}>

                                        <CardContent className="w-full h-full p-0 relative rounded-md flex justify-center">
                                            <Image src={`http://localhost:1337${imageUrlToUse}` || fallbackImage} alt="product image" className="w-11/12 h-full object-contain object-center absolute rounded-md " width={100} height={100} />
                                        </CardContent>

                                        <div className="px-3">
                                            <CardHeader className="font-semibold" style={raleway.style}>{name.length < 35 ? name : `${name.split('').splice(0, 35).join("")}...`}</CardHeader>
                                            <CardFooter className="text-lg text-start p-0 mt-1 font-bold pb-2" style={rubik.style}>{price}$</CardFooter>
                                        </div>
                                    </Card>
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default RelatedProducts

