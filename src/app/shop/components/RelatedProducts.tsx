import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import testImg from '@/app/assets/images/catagory accessories.webp'
import Image from "next/image"
import { Rubik, Manrope, Raleway } from "next/font/google"

const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const manrope = Manrope({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })


const RelatedProducts = () => {
    return (
        <>

            <div className="w-full h-full mt-16 flex mb-40 justify-center">
                <div className="w-11/12 h-full" style={manrope.style}>

                    <div className="flex flex-col gap-y-8">
                        <h1 className="text-2xl font-semibold mt-8">Related Products</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-3">

                            <Card className=" w-11/12 h-[38vh] bg- cursor-pointer border-none rounded-md flex flex-col justify-between gap-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 duration-200 ease-out" >

                                <CardContent className="w-full h-full p-0 relative rounded-md flex justify-center">
                                    <Image src={testImg} alt="" className="w-11/12 h-full object-cover object-center absolute rounded-md " />
                                </CardContent>

                                <div className="px-3">
                                    <CardHeader className="font-semibold" style={raleway.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolor.</CardHeader>
                                    <CardFooter className="text-lg text-start p-0 mt-1 font-bold pb-2" style={rubik.style}>$ 100</CardFooter>
                                </div>

                            </Card >
                            <Card className=" w-11/12 h-[38vh] bg- cursor-pointer border-none rounded-md flex flex-col justify-between gap-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 duration-200 ease-out" >

                                <CardContent className="w-full h-full p-0 relative rounded-md flex justify-center">
                                    <Image src={testImg} alt="" className="w-11/12 h-full object-cover object-center absolute rounded-md " />
                                </CardContent>

                                <div className="px-3">
                                    <CardHeader className="font-semibold" style={raleway.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolor.</CardHeader>
                                    <CardFooter className="text-lg text-start p-0 mt-1 font-bold pb-2" style={rubik.style}>$ 100</CardFooter>
                                </div>

                            </Card >
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default RelatedProducts
