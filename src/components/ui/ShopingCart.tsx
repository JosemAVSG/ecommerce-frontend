import Badge from "./Badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/shopingcart.module.scss";
const ShopingCart = () => {
  return (
    <div>
      <Badge color="red" count={5}>
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
      </Badge>
    </div>
  )
}

export default ShopingCart
