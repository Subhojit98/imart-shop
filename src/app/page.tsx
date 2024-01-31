import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewCollections from "./components/NewCollections";
import ProductCatagoty from "./components/ProductCatagoty";
import SaleTimer from "./components/SaleTimer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCatagoty />
      <NewCollections />
      <SaleTimer />
      <Footer />

    </>
  );
}
