import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface ProductProps {
  product: any;
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  console.log(product);
  return (
    <div>
      <div
        onClick={() => router.push(`/product/${product.id}`)}
        className="product-main d-flex flex-column align-items-center justify-content-between"
      >
        <Image
          alt="poster"
          width={0}
          height={238}
          style={{ width: "100%" }}
          unoptimized
          src={product.images[0]}
        />
        <span className="product-title">{product.title}</span>
        <span className="product-desc">{product.category.name} </span>
        <div className="d-flex mt-3">
          {/* <span className="product-discount-price">
            ${(product.discountPercentage / product.price).toFixed(2)}{" "}
          </span> */}
          <span className="product-price  mb-4">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
