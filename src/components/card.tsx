import { Products } from '@/interfaces/product.interface'
import Image from 'next/image'
const card = ({ product }: { product: Products}) => {
  const { id, name, description, price, stock, imgUrl } = product
  return (
    <div>
      <div>
          <Image src={imgUrl} alt={name} width={200} height={300} ></Image>
      </div>

      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
      </div>
    </div>
  )
}

export default card
