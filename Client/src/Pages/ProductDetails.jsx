import React from 'react';
import { productData } from '../Data/Data.js';
import ProductDetailPallete from '../UI/Pallete/ProductDetailPallete.jsx';

export default function ProductDetails() {
  return (
    <div>
      {productData.slice(0, 1).map((product, ind) => (
        <ProductDetailPallete
          key={ind}
          title={product.title}
          image={product.image}
          category={product.category}
          description={product.description}
          price={product.price}
          totalBuy={product.totalBuy}
          discountedPrice={product.discountedPrice}
          rating={product.rating}
          reviews={product.reviews}
        />
      ))}
    </div>
  );
}
