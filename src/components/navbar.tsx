import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full flex  gap-5 bg-slate-100'>
        <Link href='/dashboard'> Dashboard</Link>
        <Link href='/products'> Products</Link>
        <Link href='/cart'>Cart</Link>
        <Link href='/profile'> Profile</Link>
    </nav>
  )
}

export default Navbar
