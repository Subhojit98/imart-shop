import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import fallbackImage from "@/app/assets/images/catagory ipads.webp"

const ProductImages = ({ images }) => {
    return (
        <>

            <div className="w-11/12 xl:w-[60%] h-full">

                <div className="w-[55%] h-[20%] flex justify-center mt-8 mx-auto">
                    <Carousel className="w-full h-full">
                        <CarouselContent>

                            {
                                images?.data.map((ProductImage, i: number) => {
                                    const imageUrlToUse = ProductImage.attributes.url
                                    return <CarouselItem key={i}>
                                        <Image src={`http://localhost:1337${imageUrlToUse}` || fallbackImage} alt="product image" className="object-cover object-center w-full h-full" width={100} height={100} />
                                    </CarouselItem>

                                })
                            }

                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel >
                </div >

                <div className="flex w-full h-full mt-3 gap-2">

                    {
                        images?.data.map((ProductImage: any, i: number) => {
                            return <div key={i} className="w-[25%] h-[10vh] sm:h-[13vh] xl:h-[20vh] border border-black">
                                <Image src={`http://localhost:1337${ProductImage.attributes.url}` || fallbackImage} alt="product image" className="object-contain w-full h-full" width={100} height={100} />
                            </div>
                        })
                    }
                </div>

            </div >

        </>
    )
}

export default ProductImages
