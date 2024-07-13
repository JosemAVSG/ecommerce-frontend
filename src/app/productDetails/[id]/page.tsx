import ButtonCard from "@/components/ui/ButtonCard";
import { Products } from "@/interfaces/product.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/card.module.scss";
const getproduct = async (id: string) => {
  const  res = await fetch(`https://nest-demo-latest-plw3.onrender.com/products/${id}`);
  const data = await res.json();
  console.log(data);
  
  return data
}

const page = async ({params}: {params: {id: string}}) => {
  const id = params.id
  const product: Products = await getproduct(id)
  console.log(product)
  return (
    <section className="w-full min-h-screen flex place-content-center items-center">
      <div className="flex w-full h-[80vh] justify-between border-2 border-slate-400">

      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 flex justify-center py-2 shadow-sm ">
      <div className="m-auto">

        <img className="rounded-xl" alt="hero" src={product.imgUrl} width={300} height={300} />
      </div>

      </div>
      
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2  flex flex-col justify-center  py-2 shadow-sm  ">
        <div className="m-auto">

        <h2 className="text-slate-950text-2xl font-bold">{product.name}</h2>

        <p className="text-slate-950 text-2xl font-bold">{product.description}</p>

        <p className="text-slate-950 text-2xl font-bold">${product.price}</p>

        <span className="text-slate-950 text-2xl font-bold">Quantity:{product.stock}</span>
    

        <ButtonCard><FontAwesomeIcon icon={faCartPlus} className={styles.icon} /> Comprar</ButtonCard>
      
        </div>


      </div>


      </div>




    </section>
  )
}

export default page
