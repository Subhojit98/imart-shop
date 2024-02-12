"use client"
import ShopSideBar from "./components/ShopSideBar"
import ShowProducts from "./components/AllProducts"
import AllProducts from "./components/AllProducts"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Rubik, Raleway } from "next/font/google"

const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import filterImg from '@/app/assets/filter.svg'
import Image from "next/image"
import { useEffect, useState } from "react"
import pageLoader from '@/app/assets/images/Captivating Geometric GIFs by Florian de Looij — Colossal.gif'
import { Manrope } from "next/font/google"

const mamrope = Manrope({ weight: '400', subsets: ['cyrillic'] })
const facts = [
    "Over 78 % of online retail traffic comes from mobile devices, and mobile apps boast 3x higher conversion rates than mobile websites.",
    "Nearly 94 % of internet users worldwide have made an online purchase, translating to 2.77 billion e - commerce shoppers globally.",
    "Over 22 % of consumers have bought products directly through social media platforms like Instagram and Pinterest.",
    "Despite its popularity,e-commerce experiences a high cart abandonment rate of around 70 %, emphasizing the need for smooth user experience.",
    "Nearly half of small businesses believe free shipping increases their profitability, highlighting its importance for conversions.",
    "93 % of millennials use their mobile devices to compare deals before buying, showcasing their price - conscious and tech - savvy nature.",
    "While 71 % of Gen Z and 68 % of millennials shop online weekly, only 43 % of baby boomers do the same.",
    "Fashion and apparel reign supreme in the e-commerce world, followed closely by electronics and media.",
    "The e-commerce giant, Amazon, boasts the largest market share, with net sales exceeding $386 billion in 2019.",
    "The Chinese e-commerce market is the largest globally, valued at over $1.9 trillion in 2019.",
    "The average e-commerce website conversion rate sits between 2 - 3 %, highlighting the constant need for optimization.",
    "40 % of all e-commerce sales during the holiday season come from mobile phones, emphasizing their crucial role in peak periods.",
    " While the average online shopper spends only 2.74 USD per visit, this varies greatly across categories and individual behavior.",
    "Subscription services are gaining traction, with consumers spending an average of $265 per year on them.",
    "High-quality product images and videos significantly improve conversion rates, showcasing their importance in product presentation.",
    "Personalized product recommendations and marketing campaigns lead to higher engagement and conversion rates.",
    " Eco-friendly packaging and responsible sourcing are becoming increasingly important for consumers, impacting purchasing decisions.",
    "Customer reviews and testimonials significantly influence buying decisions, making them a valuable marketing tool.",
    "Voice-activated shopping through devices like Alexa and Google Assistant is projected to grow significantly in the coming years.",
    "Blending physical and digital experiences, like click - and - collect options, can enhance the customer journey and offer a competitive edge."
]

const selectFact = (max: number, min: number) => {
    const postId = Math.floor(Math.random() * (max - min) + min)

    return facts[postId]
}
const Shop = () => {

    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <>
            <Navbar />

            <div className="w-full h-full flex flex-col pattern3">
                <div className="flex">
                    <ShopSideBar />
                    <AllProducts />

                    <Sheet>
                        <SheetTrigger className=" right-10 bottom-20 bg-slate-400 p-4 rounded-xl md:hidden fixed">
                            <Image src={filterImg} alt="filter" />
                        </SheetTrigger>
                        <SheetContent>
                            <aside id="sidebar-multi-level-sidebar" className=" z-40 w-80 h-screen md:hidden " aria-label="Sidebar">
                                <div className="h-full py-10 px-2 overflow-y-auto" style={raleway.style}>

                                    <div className="flex flex-col items-start px-5">
                                        <h4 className="font-bold text-lg" style={rubik.style}>Product Catagories</h4>
                                        <div className="flex flex-col gap-2 mt-4 pl-2">
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Waches</label>
                                            </div>
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Tv & Home</label>
                                            </div>

                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Ipads</label>
                                            </div>
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Accessories</label>
                                            </div>
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>laptos</label>
                                            </div>
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Phones</label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-3 h-[0.5px] border-t-0 bg-neutral-800" />

                                    <div className="flex flex-col items-start px-5">
                                        <h4 className="font-bold text-lg" style={rubik.style}>Price</h4>
                                        <div className="flex flex-col gap-2 mt-4 pl-2">
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label> Less than 100$ </label>
                                            </div>
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Less than 200$</label>
                                            </div>

                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Less than 500$</label>
                                            </div>
                                            <div className="items-center flex gap-3">
                                                <Checkbox />
                                                <label>Less than 1000$</label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-3 h-[0.5px] border-t-0 bg-neutral-800" />

                                    <div className="flex flex-col items-start px-7">
                                        <h4 className="font-bold text-lg" style={rubik.style}>Sort by</h4>
                                        <RadioGroup defaultValue="" className="mt-4">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="" id="r2" />
                                                <label htmlFor="r2">Latest</label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="compact" id="r3" />
                                                <label htmlFor="r3">Oldest</label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </aside>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Shop
