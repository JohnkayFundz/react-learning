import { memo } from "react";

const ProductList = memo(({ products }) => {
  console.log("ProductList Rendered");

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
});

export default ProductList;