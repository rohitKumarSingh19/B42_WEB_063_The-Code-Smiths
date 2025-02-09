import CardPallete from '../../UI/Pallete/CardPallete'
import { productData } from '../../Data/Data.js'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SuggestionPallete from '../../UI/Pallete/suggestionPallete.jsx'

export default function CategoryParoducts() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 mb-">
        <h1 className="text-2xl font-bold">Top Electronices</h1>
        <Link
          to="/products"
          className="text-2xl border rounded-full p-2 transition-colors duration-300 hover:bg-black hover:text-white transform hover:-rotate-25"
        >
          <FaAngleRight />
        </Link>
      </div>

      <div className="flex justify-center items-center flex-wrap p-4 gap-4">
        {productData.slice(0, 3).map((product, ind) => (
          <CardPallete
            key={ind}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}

        <div>
          {productData.slice(0, 1).map((product, ind) => (
            <SuggestionPallete
              key={ind}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price} />
          ))}
        </div>
      </div>
    </div>)
}

