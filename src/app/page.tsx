
import Carousel from "@/components/ui/Carousel";
import CategoriesCard from "@/components/ui/CategoriesCard";
import Hero from "@/components/Hero";

const getProducts = async () => {
  const  res = await fetch('https://nest-demo-latest-plw3.onrender.com/products');
  const data = await res.json();
  return data
}


export default async function Home() {
  const products = await getProducts();
  return (
    <main className="min-h-screen  ">
      <Carousel />
      <CategoriesCard />
      {/* <CarouselProducts /> */}
      
      <Hero />
    </main>
  );
}
