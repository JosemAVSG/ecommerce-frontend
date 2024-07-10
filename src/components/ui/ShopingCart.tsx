import Badge from "./Badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/shopingcart.module.scss";
const ShopingCart = () => {
  return (
    <div className="flex hover:bg-gray-500 rounded-3xl p-2">
      <Badge color="red" count={5}>
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
      </Badge>
    </div>
  )
}

export default ShopingCart
