import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Product from "@/components/Product";

interface ProductType {
  id: number;
  title: string;
  description: string;
}

const FeatureProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [displayCount, setDisplayCount] = useState<number>(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const loadMoreProducts = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="features-products-main">
      <div className="d-flex flex-column align-items-center">
        <span className="feature-heading">Featured Products</span>
        <span className="bestseller-txt">BESTSELLER PRODUCTS</span>
        <span className="desc-txt-feature">
          Problems trying to resolve the conflict between
        </span>
      </div>
      <div className="products-list-div">
        {products.slice(0, displayCount).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center load-more-btn">
        {displayCount < products.length ? (
          <Button variant="outlined" onClick={loadMoreProducts}>
            LOAD MORE PRODUCTS
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default FeatureProducts;
