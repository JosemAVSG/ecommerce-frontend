import Card from "@/components/Card";
import { Products } from '@/interfaces/product.interface'

const getProducts = async () => {
  const  res = await fetch('http://localhost:3000/products.json');
  const data = await res.json();
  console.log(data);
  
  return data
}


export default async function Home() {
  const products = await getProducts();
  return (
    <main className="grid  min-h-screen grid-cols-4 m-4   ">
      {products.map((product: Products) => (
        Card({ product })
      ))}
    </main>
  );
}
