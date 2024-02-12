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
import testImg from '@/app/assets/images/catagory accessories.webp'
import { Rubik, Manrope, Chakra_Petch, Raleway } from "next/font/google"

import Image from "next/image"
const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })



const AllProducts = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center ">

                <div className="flex flex-col w-11/12 gap-6 ">

                    <h3 className="font-bold mt-10 text-xl" style={rubik.style}>Showing 1 - 10 of 100 products</h3>

                    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" style={manrope.style}>

                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md flex flex-col justify-between gap-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 duration-200 ease-out" >

                            <CardContent className="w-full h-full p-0 relative rounded-md">
                                <Image src={testImg} alt="" className="w-full h-full object-cover object-center absolute rounded-md rounded-b-none" />
                            </CardContent>

                            <div className="px-3">
                                <CardHeader className="font-semibold">Lorem ipsum dolor sit amet, consectetur</CardHeader>
                                <CardFooter className="text-xl text-start p-0 mt-1 font-bold pb-2">$ 100</CardFooter>
                            </div>

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                        <Card className=" w-full h-[35vh] md:h-[38vh] bg-white cursor-pointer border-none rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" >

                        </Card >
                    </div>
                    <Pagination className="place-self-center py-4">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious className="cursor-pointer bg-gray-950 text-white duration-300 ease-in-out" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink >1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext className="cursor-pointer bg-gray-950 text-white duration-300 ease-in-out" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>

            </div>
        </>
    )
}

export default AllProducts
