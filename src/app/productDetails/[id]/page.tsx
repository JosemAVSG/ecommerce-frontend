
const getproduct = async (id: string) => {
  const  res = await fetch(`https://nest-demo-latest-plw3.onrender.com/products/${id}`);
  const data = await res.json();
  console.log(data);
  
  return data
}

const page = async ({params}: {params: {id: string}}) => {
  const id = params.id
  const product = await getproduct(id)
  console.log(product)
  return (
    <div>
        pagina de producto
    </div>
  )
}

export default page
