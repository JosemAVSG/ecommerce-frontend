import card from "@/components/card";
import { Products } from '@/interfaces/product.interface'

const getProducts = async () => {
  const  res = await fetch('products.json');
  const data = await res.json();
  return data
}


export default async function Home() {
  const products = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.map((product: Products) => (
        card({ product })
      ))}
    </main>
  );
}
