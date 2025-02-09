import { Link } from "react-router-dom";
import { productData } from "../../Data/Data";
import CardPallete from "../../UI/Pallete/CardPallete";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa";

export default function ExploreProducts() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center p-4 mb-">
        <Link
          to="/products"
          className="text-2xl border rounded-full p-2 transition-colors duration-300 hover:bg-black hover:text-white transform hover:-rotate-25"
        ><CgSmartHomeRefrigerator />
        </Link>
        <h1 className="text-2xl font-bold flex items-center">Explore More <FaAngleRight /></h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {/* Section 01 - Display the first product */}
        <div className="col-span-1 row-span-3 flex justify-center items-center">
          {productData.slice(0, 1).map((product, ind) => (
            <CardPallete
              key={ind}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>

        {/* Section 02 - Explore More with Background Image and Button */}
        <div className="col-span-2 row-span-2 relative border rounded-2xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/stunning-long-exposure-photography-templates-kitchen-household-appliances-eyecatching-banners-flyers-posters-elevate-your-353781335.jpg')`,
            backgroundSize: 'cover', // Corrected to 'cover'
            backgroundPosition: 'center',
          }}>

          {/* Explore More Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="#"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-xl hover:bg-yellow-500 transition duration-300"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Section 03 - Animated Image as Background */}
        <div className="col-span-2 row-span-2 flex justify-center items-center relative overflow-hidden rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url('https://www.akeneo.com/wp-content/uploads/2021/11/Akeneo-PIM-banner-Twitter-Why_print_is_not_dead_1.gif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>

        </div>
      </div>
    </div>
  );
}
