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
      <div className="flex w-[95vw] h-[80vh] justify-between shadow-3-strong">

      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-full  flex justify-center py-2 shadow-sm ">
      <div className="m-auto">

        <img className="rounded-xl" alt="hero" src={product.imgUrl} width={600} height={600} />
      </div>

      </div>
      
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2   flex  justify-center  items-center  shadow-sm  ">
        <div className="flex flex-col border-2 border-opacity-30 rounded-2xl h-[50%] w-[90%] p-4  gap-4">

        <h2 className="text-slate-950 text-2xl font-bold">{product.name}</h2>

        <p className="text-slate-950  text-xl font-bold">{product.description}</p>

        <p className="text-slate-950 text-xl font-bold">${product.price}</p>

        <span className="text-slate-950 text-2xl font-bold">Quantity:{product.stock}</span>
    

        <ButtonCard><FontAwesomeIcon icon={faCartPlus} className={styles.icon} /> Comprar</ButtonCard>
      
        </div>


      </div>


      </div>




    </section>
  )
}

export default page
