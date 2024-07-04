import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="w-full flex  gap-5 bg-slate-100 p-4">
          <Link href="/dashboard"> Dashboard</Link>
          <Link href="/productsDeteails"> Products</Link>
          <Link href="/shopingCart">Cart</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
