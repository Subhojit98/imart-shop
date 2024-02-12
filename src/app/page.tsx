import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewCollections from "./components/NewCollections";
import ProductCatagoty from "./components/ProductCatagoty";
import SaleTimer from "./components/SaleTimer";

export default function Home() {


  return (
    <>
      <Navbar />
      <Hero />
      <ProductCatagoty />
      <NewCollections />
      <SaleTimer />
      <Footer />

    </>
  );
}
