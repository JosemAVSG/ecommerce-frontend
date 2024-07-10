import Link from "next/link";
import styles from "@/styles/navbar.module.scss";
import ShopingCart from "./ui/ShopingCart";
const Navbar: React.FC = () => {
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>Ecommerce Logo</h1>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/dashboard"> Dashboard</Link>
          <Link href="/productDetails"> Products</Link>
        </nav>

        <div className={styles.cartlogin}>
          <Link href="/shopingCart">
            <ShopingCart></ShopingCart>
          </Link>
          <div className={styles.login}>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
