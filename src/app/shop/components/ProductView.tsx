import { Button } from "@/components/ui/button"
import ProductImages from "./ProductImages"
import { Rubik, Chakra_Petch, Raleway } from "next/font/google"

const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })

const ProductView = () => {
    return (
        <>

            <div className="w-full h-ful flex flex-col lg:flex-row items-start mt-8">
                <ProductImages />
                <div className="w-11/12 xl:w-1/2 h-full flex flex-col items-center">

                    <div className="w-11/12 h-full mt-8 text-center md:text-start" style={rubik.style}>
                        <h1 className="text-3xl font-semibold text-start">Product Name Is My bfsrt </h1>

                        <div className="flex items-center mt-3 text-lg text-start " style={chakra.style}>
                            <p className="">Ipad</p>
                            <div className="inline-block h-4 w-[1.3px] bg-neutral-800 mx-2"></div>
                            <p className="">in stock</p>
                        </div>

                        <h2 className="text-xl font-bold mt-3 text-start">$ 2999</h2>

                        <h3 className="font-semibold mt-8 text-xl text-start">Description</h3>
                        <p className="mt-3 text-lg font-thin text-start" style={raleway.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum, molestiae vero earum repellendus, asperiores quasi, autem magni neque maiores aliquid sint quis tenetur amet dicta eos! Sapiente, laboriosam minima!</p>


                        <Button variant={"default"} className="w-[75%] mt-10 text-lg h-10">Buy Now</Button>

                    </div>

                </div>


            </div>
        </>
    )
}

export default ProductView
