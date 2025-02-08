import React from 'react'
import WisePallete from '../../UI/Pallete/WisePallete'
import { productData } from '../../Data/Data.js'

export default function AddToCart() {
  return (
    <div>
      {
        productData.map((product, ind) =>
        (
          <WisePallete
            key={ind}
            title={product.title}
            title={product.desc}
          />
        )
    }
    </div>
  )
}
