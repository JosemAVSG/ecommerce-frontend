
import Image from "next/image"
const Hero = () => {

  return (
    <div className="w-full h-screen  bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex justify-between items-center ">

      <div className="text-white text-center">

        <h1 className="text-4xl font-bold mb-2">Ecommerce</h1>

        <p className="text-2xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

      </div>

      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2  flex justify-center py-2 shadow-sm">

        <Image className="rounded-xl" alt="hero" src="https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={300} height={300} />
      </div>
    </div>
  )

}

export default Hero
