import { Link } from 'react-router-dom';
import CardPallete from '../UI/Pallete/CardPallete';
import { FaAngleRight } from 'react-icons/fa';

export default function ProductSection() {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center p-4 mb-">
        <h1 className="text-2xl font-bold">Pick Your Product</h1>
        <Link
          to="/products"
          className="text-2xl border rounded-full p-2 transition-colors duration-300 hover:bg-black hover:text-white transform hover:-rotate-25"
        >
          <FaAngleRight />
        </Link>
      </div>
      <CardPallete />
    </div>
  );
}
