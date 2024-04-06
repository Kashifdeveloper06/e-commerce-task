import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Rating from "@mui/material/Rating";
import { CirclePicker } from "react-color";
import Product from "@/components/Product";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "@/features/wishlist/wishlistSlice";
import Snackbar from "@mui/material/Snackbar";
const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [images, setimages] = useState<any[]>([]);
  const [productDetails, setproductDetails] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;
  const [opensnackbar, setopensnackbar] = React.useState(false);
  const [snackbarMessage, setsnackbarMessage] = React.useState("");

  const handleSnackbar = () => {
    setopensnackbar(true);
    setTimeout(() => {
      setopensnackbar(false);
    }, 3000);
  };
  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setopensnackbar(false);
  };

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const slideImages: { original: string; thumbnail: string }[] = [];
          const response = await fetch(
            `https://api.escuelajs.co/api/v1/products/${id}`
          );
          const data = await response.json();
          setproductDetails(data);
          data?.images?.forEach((imageUrl: any) => {
            slideImages.push({
              original: imageUrl,
              thumbnail: imageUrl,
            });
          });
          setimages(slideImages);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      }
    };

    fetchProduct();
  }, [id]);

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

  const breadcrumbs = [<span key={1}>Home</span>, <span key={2}>Shop</span>];

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={opensnackbar}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        key={"bottom" + "right"}
      />
      <div className="product-top-details">
        <div className="breadcrumbs-div">
          <Breadcrumbs
            separator={
              <Image
                height="14"
                width="8"
                alt="phone"
                className="ms-2 me-2"
                unoptimized
                src={"/assets/arrow-grey.png"}
              />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div className="product-details-div">
          <div>
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              items={images}
            />
          </div>
          <div className="product-specs-div">
            <span className="specific-product-title">
              {productDetails.title}
            </span>
            <div className="product-rating-div mt-3 mb-4">
              <Rating name="read-only" value={4} readOnly />
              <span className="specific-product-reviews ms-2">10 Reviews</span>
            </div>
            <span className="specific-product-price">
              ${productDetails.price}
            </span>
            <div>
              <span className="specific-product-availablity">
                Availability :
              </span>
              <span className="specific-product-status ms-2">In Stock </span>
            </div>
            <div className="specific-product-attrs">
              <hr />

              <CirclePicker
                color={"#23A6F0"}
                colors={["#23A6F0", "#2DC071", "#E77C40", "#252B42"]}
              />

              <div>
                <div className="specific-product-features">
                  <div
                    onClick={() => {
                      dispatch(addToCart(productDetails));
                      setsnackbarMessage("Item added to cart");
                      handleSnackbar();
                    }}
                    className="product-badge"
                  >
                    <Image
                      alt="poster"
                      width={20}
                      height={20}
                      unoptimized
                      src={"/assets/cart-black.png"}
                    />
                  </div>
                  <div
                    onClick={() => {
                      dispatch(addToWishlist(productDetails));
                      setsnackbarMessage("Item added to wishlist");
                      handleSnackbar();
                    }}
                    className="product-badge ms-3"
                  >
                    <Image
                      alt="poster"
                      width={17}
                      height={15}
                      unoptimized
                      src={"/assets/heart-black.png"}
                    />
                  </div>

                  <div className="product-badge ms-3">
                    <Image
                      alt="poster"
                      width={16}
                      height={11}
                      unoptimized
                      src={"/assets/eye-black.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-mid-details">
        <div className="product-desc-tabs">
          <span className="tab-name">Description</span>
          <span className="tab-name">Additional Information</span>
          <span className="tab-name">Reviews (0)</span>
        </div>
        <hr />
        <div className="specific-product-main-div">
          <div className="specific-product-summary-div">
            <span className="specific-product-desc-details">Description </span>
            <span className="specific-product-desc-summary">
              {productDetails.description}
            </span>
            <span
              style={{ borderLeft: "3px solid #23856D", paddingLeft: "24px" }}
              className="specific-product-desc-summary"
            >
              {productDetails.description}
            </span>
            <span className="specific-product-desc-summary">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.{" "}
            </span>
          </div>
          <div>
            <Image
              width="427"
              height="392"
              alt="phone"
              className="ms-2 me-2"
              unoptimized
              src={"/assets/product-detail-img.png"}
            />
          </div>
        </div>
      </div>
      <div className="best-seller-products-sections">
        <span className="best-seller-products-section-heading">
          BESTSELLER PRODUCTS
        </span>
        <div className="best-products-list-div">
          {products.slice(0, 8).map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="specific-products-clients">
        <Image
          alt="poster"
          width={103}
          height={35}
          unoptimized
          src={"/assets/hooli.png"}
        />
        <Image
          alt="poster"
          width={83}
          height={59}
          unoptimized
          src={"/assets/lyat.png"}
        />
        <Image
          alt="poster"
          width={102}
          height={75}
          unoptimized
          src={"/assets/ship.png"}
        />
        <Image
          alt="poster"
          width={103}
          height={42}
          unoptimized
          src={"/assets/stripe.png"}
        />
        <Image
          alt="poster"
          width={104}
          height={62}
          unoptimized
          src={"/assets/aws.png"}
        />
        <Image
          alt="poster"
          width={76}
          height={72}
          unoptimized
          src={"/assets/discord.png"}
        />
      </div>
    </div>
  );
};

export default ProductPage;
