import Hero from "./components/Hero";
import NewCollections from "./components/NewCollections";
import ProductCatagoty from "./components/ProductCatagoty";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <ProductCatagoty />
        <NewCollections />
      </div>

    </>
  );
}
