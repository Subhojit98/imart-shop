import ShopSideBar from "./components/ShopSideBar"
import AllProducts from "./components/AllProducts"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import filterImg from '@/app/assets/filter.svg'
import Image from "next/image"

const Shop = () => {

    return (
        <>
            <Navbar />

            <div className="w-full h-full flex flex-col pattern3">
                <div className="flex">
                    <aside id="sidebar-multi-level-sidebar" className=" z-40 w-80 md:block h-screen hidden" aria-label="Sidebar">
                        <ShopSideBar />
                    </aside>
                    <AllProducts />

                    <Sheet>
                        <SheetTrigger className=" right-10 bottom-20 bg-slate-400 p-4 rounded-xl md:hidden fixed">
                            <Image src={filterImg} alt="filter" />
                        </SheetTrigger>
                        <SheetContent>
                            <ShopSideBar />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Shop
