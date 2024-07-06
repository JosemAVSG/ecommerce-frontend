import { Products } from '@/interfaces/product.interface'
import Image from 'next/image'
import styles from '@/styles/card.module.scss'
const card = ({ product }: { product: Products}) => {
  const { id, name, description, price, stock, image } = product
  console.log(image)
  return (
    <>
    <div key={id}>
      <div className={styles.card__img}>
          <Image src={image} alt={name} width={200} height={300} ></Image>
      </div>

      <div className={styles.card__body}>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
      </div>
    </div>
    
    
    </>
  )
}

export default card
