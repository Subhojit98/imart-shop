import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import testImg from "@/app/assets/images/catagory ipads.webp"

const ProductImages = () => {
    return (
        <>

            <div className="w-11/12 xl:w-[60%] h-full">

                <div className="w-[75%] flex justify-center mt-8 mx-auto">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <Image src={testImg} alt="" className="object-contain w-full h-full" />
                            </CarouselItem>
                            <CarouselItem>2</CarouselItem>
                            <CarouselItem>3</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel >
                </div >

                <div className="flex w-full h-full mt-3 gap-2">
                    <div className="w-[25%] h-[10vh] sm:h-[13vh] xl:h-[20vh] border border-black"></div>
                    <div className="w-[25%] h-[10vh] sm:h-[13vh] xl:h-[20vh] border border-black"></div>
                    <div className="w-[25%] h-[10vh] sm:h-[13vh] xl:h-[20vh] border border-black"></div>
                    <div className="w-[25%] h-[10vh] sm:h-[13vh] xl:h-[20vh] border border-black"></div>
                </div>

            </div >

        </>
    )
}

export default ProductImages
