import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center h-screen flex items-center justify-center">
      <div className='flex flex-col gap-5' >

      <h1 className='text-4xl text-blue-800W'>404 - Página no encontrada</h1>
      <p className='text-xl' >Lo sentimos, la página que buscas no existe.</p>
      <Link href="/" className='text-white rounded-xl text-xl bg-blue-800 px-4 py-2'>
      volver a la pagina principal
      </Link>

      </div>
    </div>
  );
}
