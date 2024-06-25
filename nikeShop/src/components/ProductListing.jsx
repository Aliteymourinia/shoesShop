import React from "react";
const ProductListing = ({ products }) => {
  const productsArray = Object.values(products[0]);
  return productsArray.map((product) => {
    return (
      <div className="bg-gray-400 m-2 w-1/4 flex flex-col" key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.brand}</p>
        <img src={product.imageURL} alt={product.name} />
      </div>
    );
  });
};
export default ProductListing;
