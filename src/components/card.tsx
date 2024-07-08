import { Products } from '@/interfaces/product.interface'
import Image from 'next/image'
import styles from '@/styles/card.module.scss'
import ButtonCard from './ui/ButtonCard'
const Card= ({ product }: { product: Products}) => {
  const { id, name, description, price, stock, imgUrl } = product

  return (
    <>
    <div  className={styles.card}>

      <div className={styles.card_img}>
          <Image src={imgUrl} alt={name} width={200} height={300} ></Image> 
      </div>

      <div className={styles.card_body}>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
        <p>{description}</p>
        </div>
        <div className={styles.price}>
        <h2>${price}</h2>
        </div>
        <p>Stock:{stock}</p>
        <ButtonCard>Add to Cart</ButtonCard>
      </div>
    </div>
  
    </>
  )
}

export default Card;
