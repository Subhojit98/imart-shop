"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { GlobalProviderContext } from "@/providers/GlobalProvider"
import { Rubik, Raleway } from "next/font/google"
import React, { useContext, useEffect, useState } from "react"
import { Context } from "vm"

const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })


const ShopSideBar = () => {
    const { filters, setFilters, setPriceFilter, setSortType } = useContext<Context>(GlobalProviderContext)
    const [selectedCheckbox, setSelectedCheckbox] = useState<null | string>(null)
    const handleCatagoryFilters = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, checked } = e.target

        if (checked) {
            setFilters([...filters, value])
        }

        else setFilters((prev: string[]) => prev.filter((item) => item !== value))
    }


    const hanldePriceFilters = (checkboxName: string, e: React.ChangeEvent<HTMLInputElement>): void => {

        const { value, checked } = e.target
        setSelectedCheckbox(checkboxName === selectedCheckbox ? null : checkboxName)

        if (checked) {
            setPriceFilter(parseInt(value))
        }
        else setPriceFilter(null)
    }

    const handleSortBy = (e: React.MouseEvent<HTMLElement>): void => {
        const { value } = e.target as any
        setSortType(value)
    }
    return (
        <>

            <div className="h-full py-10 px-2 overflow-y-auto md:border-r md:border-black" style={raleway.style}>

                <div className="flex flex-col items-start px-5">
                    <h4 className="font-bold text-lg" style={rubik.style}>Product Catagories</h4>
                    <div className="flex flex-col gap-2 mt-4 pl-2">
                        <div className="items-center flex gap-3">
                            <input type="checkbox" value="Watches" onChange={handleCatagoryFilters} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="watch-checkbox">Watchs</label>
                        </div>
                        <div className="items-center flex gap-3">
                            <input type="checkbox" value="TV&Home" onChange={handleCatagoryFilters} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="Tv&home-checkbox">Tv & Home</label>
                        </div>

                        <div className="items-center flex gap-3">
                            <input type="checkbox" value="Ipads" onChange={handleCatagoryFilters} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="ipads-checkbox">Ipads</label>
                        </div>
                        <div className="items-center flex gap-3">
                            <input type="checkbox" value="Accessories" onChange={handleCatagoryFilters} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="Accessories-checkbox">Accessories</label>
                        </div>
                        <div className="items-center flex gap-3">
                            <input type="checkbox" value="Laptops" onChange={handleCatagoryFilters} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="laptops-checkbox">laptos</label>
                        </div>
                        <div className="items-center flex gap-3">
                            <input type="checkbox" value="Phones" onChange={handleCatagoryFilters} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="phones-checkbox">Phones</label>
                        </div>
                    </div>
                </div>

                <hr className="my-3 h-[0.5px] border-t-0 bg-neutral-800" />

                <div className="flex flex-col items-start px-5">
                    <h4 className="font-bold text-lg" style={rubik.style}>Price</h4>
                    <div className="flex flex-col gap-2 mt-4 pl-2">
                        <div className="items-center flex gap-3">
                            <input type="checkbox" name="50" value="50" className="w-4 h-4 cursor-pointer"
                                checked={selectedCheckbox === "checkbox-1"} onChange={(e) => hanldePriceFilters("checkbox-1", e)} />

                            <label htmlFor="50-checkbox"> Less than 50$ </label>
                        </div>
                        <div className="items-center flex gap-3">
                            <input type="checkbox" name="75" value="75" className="w-4 h-4 cursor-pointer"
                                checked={selectedCheckbox === "checkbox-2"} onChange={(e) => hanldePriceFilters("checkbox-2", e)} />
                            <label htmlFor="75-checkbox">Less than 75$</label>
                        </div>

                        <div className="items-center flex gap-3">
                            <input type="checkbox" name="100" value="100" className="w-4 h-4 cursor-pointer"
                                checked={selectedCheckbox === "checkbox-3"} onChange={(e) => hanldePriceFilters("checkbox-3", e)} />
                            <label htmlFor="100-checkbox">Less than 100$</label>
                        </div>
                        <div className="items-center flex gap-3">
                            <input type="checkbox" name="500" value="500" className="w-4 h-4 cursor-pointer"
                                checked={selectedCheckbox === "checkbox-4"} onChange={(e) => hanldePriceFilters("checkbox-4", e)} />
                            <label htmlFor="500-checkbox">Less than 500$</label>
                        </div>
                        <div className="items-center flex gap-3">
                            <input type="checkbox" name="1000" value="1000" className="w-4 h-4 cursor-pointer"
                                checked={selectedCheckbox === "checkbox-5"} onChange={(e) => hanldePriceFilters("checkbox-5", e)} />
                            <label htmlFor="1000-checkbox">Grater than 1000$</label>
                        </div>
                    </div>
                </div>

                <hr className="my-3 h-[0.5px] border-t-0 bg-neutral-800" />

                <div className="flex flex-col items-start px-7">
                    <h4 className="font-bold text-lg" style={rubik.style}>Sort by</h4>
                    <RadioGroup defaultValue="" className="mt-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Latest" onClick={(e) => handleSortBy(e)} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="radio-option-1">Latest</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Oldest" onClick={(e) => handleSortBy(e)} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="radio-option-2">Oldest</label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </>
    )
}

export default ShopSideBar