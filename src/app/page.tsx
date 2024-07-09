import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { Products } from '@/interfaces/product.interface'
import styles from '@/styles/card.module.scss'

const getProducts = async () => {
  const  res = await fetch('https://nest-demo-latest-plw3.onrender.com/products');
  const data = await res.json();
  return data
}


export default async function Home() {
  const products = await getProducts();
  return (
    <main className="min-h-screen place-content-center ">
      <Hero />
    </main>
  );
}
