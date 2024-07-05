import Link from "next/link";
import styles from "@/styles/navbar.module.scss";
const Navbar: React.FC = () => {
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.logo}>
            <h1>Ecommerce Logo</h1>
        </div>

        <nav className={styles.nav}>
          <Link href="/dashboard"> Dashboard</Link>
          <Link href="/productsDeteails"> Products</Link>
          <Link href="/shopingCart">Cart</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>

        <div className={styles.cartlogin}>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <div>
            <h2>Cart</h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
