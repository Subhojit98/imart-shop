"use client"
import { ReactNode, createContext, useState } from "react"

export const GlobalProviderContext = createContext({})

const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<string[]>([])
    const [priceFilter, setPriceFilter] = useState<null | null>(null)
    const [sortType, setSortType] = useState<string | null>(null)
    const [cartObj, setCartObj] = useState<[]>([])
    const [isOrderConfermed, setIsOrderConfermed] = useState<boolean>(false)
    return (
        <GlobalProviderContext.Provider value={{ filters, setFilters, priceFilter, setPriceFilter, sortType, setSortType, cartObj, setCartObj, isOrderConfermed, setIsOrderConfermed }}>
            {children}
        </GlobalProviderContext.Provider>
    )
}
export default GlobalProvider
