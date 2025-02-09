import CardPallete from '../../UI/Pallete/CardPallete'
import { productData } from '../../Data/Data.js'

export default function RecentProduct() {
  return (
    <div className="flex justify-center items-center flex-wrap p-4 gap-4">
      {productData.map((product, ind) => (
        <CardPallete
          key={ind}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>)
}
