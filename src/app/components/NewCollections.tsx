"use client"
import { Rubik, Manrope } from "next/font/google"
const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import pattern from '@/app/assets/wave-haikei.svg'
import pattern2 from '@/app/assets/wave-haikei2.svg'
import fallbackImage from '@/app/assets/bgBanner.webp'
import Loader from "./Loader"
import { useFetchNewCollection } from "../hooks/useFetchNewCollection"
import { useState } from "react"
import { useRouter } from "next/navigation"

const NewCollections = () => {

    const [pageCount, setPageCount] = useState(1)
    const router = useRouter()
    const { data: productsData, error, loading } = useFetchNewCollection(pageCount, 3)
    return (

        <>
            <div className="w-full h-dvh flex justify-center items-center mt-40 pattern2 mb-20" style={manrope.style}>

                <div className=" w-[95%] xl:w-[85%] h-[65%] mt-10 bg-white flex flex-col items-center justify-around relative">
                    <h1 className="text-center text-2xl z-50">New collections</h1>
                    <p className="z-50 text-lg place-self-start px-10">Showing <span className="font-bold">{pageCount} - 5</span> of <span className="font-bold">15</span></p>
                    <Image src={pattern} alt="" className="absolute left-0 z-10" />
                    <Image src={pattern2} alt="" className="absolute right-0 z-10" />
                    <div className="flex w-full gap-3 px-5 overflow-x-auto overflow-y-hidden" >

                        {loading && <Loader />}
                        {
                            error ?
                                <Loader />
                                :
                                !loading && productsData?.products.data.map((items: any, i: number) => {
                                    const { name, description, price, images } = items.attributes
                                    const imageUrlToUse = images?.data[0]?.attributes.url

                                    return <Card key={i} className=" w-full z-20 h-[30vh] xl:h-[35vh] bg-white cursor-pointer border-none relative group flex justify-start items-end shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-3" >
                                        <Image src={imageUrlToUse} alt="" className="absolute w-full h-full object-covr object-scale-down rounded-xl z-40" width={100} height={100} />
                                        <div className="w-full h-full opacity-0 duration-300 ease-out bg-white group-hover:opacity-80 rounded-xl absolute" >

                                            <div className="sm:text-start translate-y-40 translate-x-2 group-hover:translate-y-0 duration-300 ease-out flex flex-col justify-center items-start gap-2 p-2 sm:p-2 xl:p-4 ">
                                                <div className=" flex flex-col items-start gap-1" style={rubik.style}>
                                                    <CardHeader className="text-sm xl:text-lg font-bold text-start z-50">{name.length < 34 ? name : `${name.split('').splice(0, 35).join("")}...`}</CardHeader>

                                                    <CardTitle className="font-semibold hidden group-hover:block mt-2 text-lg z-50">{price}$</CardTitle>
                                                </div>

                                                <CardDescription className="hidden group-hover:block text-xs xl:text-sm mt-2 sm:p-4 md:p-0 z-50" style={manrope.style}>{description.length < 130 ? description : `${description.split('').splice(0, 80).join("")}...`}</CardDescription>

                                                <button className="relative mt-2 items-center justify-center p-2 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group-hover:inline-flex group opacity-0 xl:opacity-100"
                                                    onClick={() => router.push("/shop")}>
                                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease-out">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

                                                        <p className="ml-2 text-sm">Shop now</p>
                                                    </span>
                                                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
                                                    <span className="relative invisible">Button Text</span>
                                                </button>
                                            </div>

                                        </div>
                                        <CardFooter className="group-hover:-translate-y-40 group-hover:opacity-0 translate-y-0 duration-500 ease-out text-base xl:text-lg font-bold" style={rubik.style}>
                                            <p>{name.length < 35 ? name : `${name.split('').splice(0, 35).join("")}...`}</p>
                                            {/* <h4>{price}</h4> */}
                                        </CardFooter>
                                    </Card >
                                })
                        }
                    </div >

                    <Pagination className="z-10">
                        <PaginationContent>
                            <PaginationItem>

                                {pageCount == 1 ? <PaginationPrevious className="cursor-pointer bg-gray-950 opacity-80 text-white duration-300 ease-in-out" />
                                    : <PaginationPrevious className="cursor-pointer bg-gray-950  text-white duration-300 ease-in-out" onClick={() => setPageCount(pageCount - 1)} />}
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink>{pageCount}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                {pageCount == 5 ? <PaginationNext className="cursor-pointer bg-gray-950 opacity-80 text-white duration-300 ease-in-out" />
                                    : <PaginationNext className="cursor-pointer bg-gray-950  text-white duration-300 ease-in-out" onClick={() => setPageCount(pageCount + 1)} />}
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>
            </div>
        </>
    )
}

export default NewCollections

