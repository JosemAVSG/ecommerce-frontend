import Card from "@/components/Card";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 relative ">
      {products.map((product: Products) => (
    
          <Card product={product} key={product.id} />
      
      ))}
      </div>
    </main>
  );
}
