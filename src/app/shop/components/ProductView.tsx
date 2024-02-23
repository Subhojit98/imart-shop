"use client"
import { Button } from "@/components/ui/button"
import ProductImages from "./ProductImages"
import { Rubik, Chakra_Petch, Raleway } from "next/font/google"
import { useRouter } from "next/navigation"
import { use, useContext, useEffect, useState } from "react"
import { Context } from "@apollo/client"
import { ProductDetailsContext } from "@/providers/ProductContext"
import Image from "next/image"
import spinner from '@/app/assets/fidget-spinner.svg'
const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
import back from '@/app/assets/arrow-left.svg'
import { useFetchSingeProduct } from "@/app/hooks/useFetchSingeProduct"
import RelatedProducts from "./RelatedProducts"
import { GlobalProviderContext } from "@/providers/GlobalProvider"

type ProductProps = {
    name: string,
    price: number,
    description: string,
    images: string[]
}
const ProductView = () => {

    const router = useRouter()
    const { productDetails, setProductDetails } = useContext<Context>(ProductDetailsContext)
    const { cartObj, setCartObj } = useContext<Context>(GlobalProviderContext)
    const { data: singleProductDetails, loading } = useFetchSingeProduct(productDetails?.name)
    const [isAddedToCart, setIsAddedTocart] = useState(false)

    const handleAddToCart = (productDetails: object) => {
        const updatedCartObj = [...cartObj, productDetails]
        setCartObj(updatedCartObj)
        sessionStorage.setItem("cartObj", JSON.stringify(updatedCartObj))
        setIsAddedTocart(true)
    }

    const handleBackToPreviousPage = () => {
        router.push("/shop")
    }

    useEffect(() => {

        const storedProductToGet = sessionStorage.getItem("cartObj")
        const sessionProductDetails = sessionStorage.getItem("productDetails")

        if (storedProductToGet) {
            setCartObj(JSON.parse(storedProductToGet))
        }

        if (sessionProductDetails) {
            setProductDetails(JSON.parse(sessionProductDetails))
        }
    }, [])


    useEffect(() => {
        const sessionObjToGet = sessionStorage.getItem("cartObj")

        if (sessionObjToGet) {
            const tempArr = JSON.parse(sessionObjToGet)

            tempArr.some((item: ProductProps) => item.name === singleProductDetails?.products?.data[0].attributes.name) ? setIsAddedTocart(true) : setIsAddedTocart(false)

        }
    }, [singleProductDetails, isAddedToCart])

    return (
        <>

            <div className="w-full h-ful flex flex-col lg:flex-row items-start mt-8">
                {/* Product Related Images -> */}
                {
                    loading ? <div className="w-full h-[50vh] flex justify-center items-center">< Image src={spinner} alt="loading spinner" className="animate-spin w-24 h-24 flex m-auto" />
                    </div>
                        :
                        <>
                            <ProductImages images={singleProductDetails?.products?.data[0].attributes.images} />
                            {/* Back to previos page arraow -> */}
                            <Image src={back} alt="previos page icon" className="absolute  left-5 w-10 hover:bg-slate-100 cursor-pointer rounded-full hover:scale-90 ease-out duration-150" onClick={handleBackToPreviousPage} />
                            <div className="w-11/12 xl:w-1/2 h-full flex flex-col items-center">

                                <div className="w-11/12 h-full mt-8 text-center md:text-start" style={rubik.style}>
                                    <h1 className="text-3xl font-semibold text-start">{singleProductDetails?.products?.data[0].attributes.name}</h1>

                                    <div className="flex items-center mt-3 text-lg text-start " style={chakra.style}>
                                        <p className="">Ipad</p>
                                        <div className="inline-block h-4 w-[1.3px] bg-neutral-800 mx-2"></div>
                                        <p className="">in stock</p>
                                    </div>

                                    <h2 className="text-xl font-bold mt-3 text-start">{singleProductDetails?.products?.data[0].attributes.price}$</h2>

                                    <h3 className="font-semibold mt-8 text-xl text-start">Description</h3>
                                    <p className="mt-3 text-lg font-thin text-start" style={raleway.style}>{singleProductDetails?.products?.data[0].attributes.description}</p>


                                    {
                                        isAddedToCart ? <Button variant={"default"} className="w-[75%] mt-10 text-lg h-10" onClick={() => router.push("/cart")}>Check cart</Button> :

                                            <Button variant={"default"} className="w-[75%] mt-10 text-lg h-10" onClick={() => handleAddToCart(singleProductDetails?.products?.data[0].attributes)}>Add to cart</Button>
                                    }


                                </div>

                            </div>
                        </>

                }

            </div>
            {
                !loading && <RelatedProducts />
            }
        </>
    )
}

export default ProductView
