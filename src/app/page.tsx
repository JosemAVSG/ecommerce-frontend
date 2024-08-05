
import Carousel from "@/components/ui/Carousel";
import CategoriesCard from "@/components/ui/CategoriesCard";
import CarouselProducts from "@/components/ui/CarouselProducts";
import Hero from "@/components/Hero";

const getProducts = async () => {
  const  res = await fetch('https://nest-demo-latest-plw3.onrender.com/products');
  const data = await res.json();
  return data
}


export default async function Home() {
  const products = await getProducts();
  return (
    <main className="min-h-screen grid grid-row-3 ">
      <Carousel />
      <CategoriesCard />
      <div className="relative flex justify-center mb-10">

      <CarouselProducts />
      </div>
      
      {/* <Hero /> */}
    </main>
  );
}
