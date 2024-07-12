const categories = [
  { name: "Electrónica", imgSrc: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Ropa", imgSrc: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200" },
  { name: "Juguetes", imgSrc: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200" },
  { name: "Accesorios", imgSrc: "https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200" },
];
const CategoryCard = ({ name, imgSrc }: { name: string; imgSrc: string }) => (
  <div className="w-60 bg-white shadow-md rounded-lg overflow-hidden m-2">
    <img className="w-full h-20 object-cover" src={imgSrc} alt={name} />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
    </div>
  </div>
);

const CategoriesCard = () => {
  return (
    <section className="relative flex justify-center">

    <div className="flex flex-wrap justify-center p-4 absolute  ">
      {categories.map((category, index) => (
        <CategoryCard key={index} name={category.name} imgSrc={category.imgSrc} />
      ))}
    </div>

    </section>
  );
};

export default CategoriesCard;