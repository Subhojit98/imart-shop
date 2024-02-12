import Navbar from "@/app/components/Navbar"
import ProductView from "../components/ProductView"
import RelatedProducts from "../components/RelatedProducts"
import Footer from "@/app/components/Footer"
const Product = () => {
    return (
        <>
            <Navbar />
            <ProductView />
            <RelatedProducts />
            <Footer />
        </>
    )
}

export default Product
