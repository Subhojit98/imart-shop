"use client"
import { ReactNode, createContext, useState } from "react"

export const ProductDetailsContext = createContext({})

const ProductContext = ({ children }: { children: ReactNode }) => {
    const [productDetails, setProductDetails] = useState<object | null>({})
    return (
        <ProductDetailsContext.Provider value={{ productDetails, setProductDetails }}>
            {children}
        </ProductDetailsContext.Provider>
    )
}

export default ProductContext
