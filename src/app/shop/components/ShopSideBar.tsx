import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Rubik, Raleway } from "next/font/google"

const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })

const ShopSideBar = () => {
    return (
        <>
            <aside id="sidebar-multi-level-sidebar" className=" z-40 w-80 md:block h-screen hidden" aria-label="Sidebar">
                <div className="h-full py-10 px-2 overflow-y-auto border-r border-black" style={raleway.style}>

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
        </>
    )
}

export default ShopSideBar