"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import fallbackImage from '@/app/assets/images/catagory accessories.webp'
import { Rubik, Manrope } from "next/font/google"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
import { useFetchAllProducts } from "@/app/hooks/useFetchAllProducts"
import { useRouter } from "next/navigation"
import { Context } from "vm"
import spinner from '@/app/assets/fidget-spinner.svg'
import ShopError from "./ShopError"
import { GlobalProviderContext } from "@/providers/GlobalProvider"

const AllProducts = () => {

    const [pageCount, setPageCount] = useState(1)
    const { filters, priceFilter, sortType } = useContext<Context>(GlobalProviderContext)
    const { data: allProducts, error, loading } = useFetchAllProducts(filters, priceFilter, sortType, 9, pageCount)
    const lastPage = allProducts?.products.meta.pagination.pageCount
    const router = useRouter()

    const handleProductClick = (name: string, id: number, relation: string, quantity: number) => {
        const itemDetails = {
            name,
            id,
            relation,
            quantity
        }
        sessionStorage.setItem("productDetails", JSON.stringify(itemDetails))

        router.push(`/shop/${name}-product-id-${id}`)
    }

    return (
        <>
            <div className="w-full h-full flex justify-center ">
                {
                    error ? <ShopError />

                        :

                        <div className="flex flex-col w-11/12 gap-6 ">

                            <h3 className="font-bold mt-10 text-xl" style={rubik.style}>Showing {pageCount}- 8 Products List</h3>

                            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" style={manrope.style}>


                                {
                                    allProducts?.products.data.map((items: any, i: number) => {
                                        const { name, price, images, quantity } = items.attributes
                                        const imageUrlToUse = images?.data[0]?.attributes.url
                                        const relation = items.attributes.catagory.data.attributes.name
                                        return <Card key={i} className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md flex flex-col justify-between gap-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 duration-200 ease-out"

                                            onClick={() => handleProductClick(name, i, relation, quantity)}
                                        >

                                            <CardContent className="w-full h-full p-0 relative rounded-md flex justify-center">
                                                <Image src={`http://localhost:1337${imageUrlToUse}` || fallbackImage} alt="product image" width={100} height={100} className="w-[55%] h-full object-cover object-center absolute rounded-md rounded-b-none" />
                                            </CardContent>

                                            <div className="px-3">
                                                <CardHeader className="font-semibold">{name.length < 35 ? name : `${name.split('').splice(0, 35).join("")}...`}</CardHeader>
                                                <CardFooter className="text-xl text-start p-0 mt-1 font-bold pb-2">{price} $</CardFooter>
                                            </div>
                                        </Card >

                                    })
                                }
                            </div>
                            {loading && <Image src={spinner} alt="loading spinner" className="animate-spin w-24 h-24 flex m-auto" />}
                            <Pagination className="z-10">
                                <PaginationContent>
                                    <PaginationItem>
                                        {pageCount == 1 ? <PaginationPrevious className="cursor-pointer opacity-80 bg-gray-950 text-white duration-300 ease-in-out" /> :
                                            <PaginationPrevious onClick={() => setPageCount(pageCount - 1)} className="cursor-pointer bg-gray-950 text-white duration-300 ease-in-out" />}
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink>{pageCount}</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        {
                                            pageCount == lastPage ? <PaginationNext className="cursor-pointer opacity-80 bg-gray-950 duration-300 ease-in-out text-white" /> : <PaginationNext onClick={() => setPageCount(pageCount + 1)} className="cursor-pointer bg-gray-950 duration-300 ease-in-out text-white" />
                                        }
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>

                        </div>
                }
            </div>
        </>
    )
}

export default AllProducts
