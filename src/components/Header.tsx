import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeToCart, emptyCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeToWishlist,
  emptyWishlist,
} from "@/features/wishlist/wishlistSlice";
import Snackbar from "@mui/material/Snackbar";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

const Header: React.FC = () => {
  const [cartmodalShow, setcartmodalShow] = React.useState(false);
  const [wishlistmodalShow, setwishlistmodalShow] = React.useState(false);
  const [showproductform, setshowproductform] = React.useState(false);
  const router = useRouter();
  const [categories, setCategories] = React.useState([]);
  const [mobilenav, setMobileNav] = React.useState<Boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.products);
  const wishlist = useSelector((state: RootState) => state.wishlist.products);
  const [opensnackbar, setopensnackbar] = React.useState(false);
  const [snackbarMessage, setsnackbarMessage] = React.useState("");
  const [product, setProduct] = React.useState<any>({
    title: "",
    price: "",
    category: "1",
    description: "",
  });
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
  const fetchCategories = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories/");
    const data = await response.json();
    return data;
  };
  useMemo(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);
  async function CreateProduct() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: product.title,
        price: product.price,
        categoryId: product.category,
        description: product.description,
        images: [
          "https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123",
        ],
      }),
    });
    const data = await response.json();
    setsnackbarMessage("Item created successfully!");
    handleSnackbar();
    setProduct({
      title: "",
      price: "",
      category: "",
      description: "",
    });
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={opensnackbar}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        key={"bottom" + "right"}
      />
      ;
      <Modal
        show={wishlistmodalShow}
        size="lg"
        onHide={() => setwishlistmodalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "20px" }}>
          <div className="cart-heading-div">
            <span className="shopping-cart-heading">Shopping Wishlist</span>
            <span
              onClick={() => dispatch(emptyWishlist())}
              className="remove-all-heading"
            >
              Remove all
            </span>
          </div>
          {wishlist.length > 0 ? (
            wishlist.map((data: any, index: any) => (
              <div key={index} className="cart-main-div">
                <Image
                  height="100"
                  width="100"
                  alt="phone"
                  className="ms-3"
                  unoptimized
                  src={data.images[0]}
                />
                <div className="cart-product-details">
                  <span className="product-title">{data.title}</span>
                  <span className="product-brand">{data.category.name}</span>
                </div>
                <div className="cart-actions-div">
                  <span className="product-title">${data.price}</span>
                  <span
                    onClick={() => dispatch(removeToWishlist(data.id))}
                    className="product-remove-txt"
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "10%", textAlign: "center" }}>
              Wishlist is Empty
            </div>
          )}
        </Modal.Body>
      </Modal>
      <Modal
        show={cartmodalShow}
        size="lg"
        onHide={() => setcartmodalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "20px" }}>
          <div className="cart-heading-div">
            <span className="shopping-cart-heading">Shopping Cart</span>
            <span
              onClick={() => dispatch(emptyCart())}
              className="remove-all-heading"
            >
              Remove all
            </span>
          </div>
          {cart.length > 0 ? (
            cart.map((data: any, index) => (
              <div key={index} className="cart-main-div">
                <Image
                  height="100"
                  width="100"
                  alt="phone"
                  className="ms-3"
                  unoptimized
                  src={data.images[0]}
                />
                <div className="cart-product-details">
                  <span className="product-title">{data.title}</span>
                  <span className="product-brand">{data.category.name}</span>
                </div>
                <div className="cart-actions-div">
                  <span className="product-title">${data.price}</span>
                  <span
                    onClick={() => dispatch(addToWishlist(data))}
                    className="product-save-txt"
                  >
                    save for later
                  </span>
                  <span
                    onClick={() => dispatch(removeToCart(data.id))}
                    className="product-remove-txt"
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "10%", textAlign: "center" }}>
              Cart is Empty
            </div>
          )}
        </Modal.Body>
      </Modal>
      <Modal
        centered
        show={showproductform}
        onHide={() => setshowproductform(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              CreateProduct();
              setshowproductform(false);
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                type="number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                required
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              >
                <option value={""}>Select Category</option>
                {categories.map((data: any, index: any) => (
                  <option key={index} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={() => setshowproductform(false)}
              >
                Close
              </Button>
              <Button className="ms-3" variant="primary" type="submit">
                Create Product
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <div className="header-main">
        <div className="d-flex">
          <div>
            <Image
              height="16"
              width="16"
              alt="phone"
              unoptimized
              src={"/assets/phone.png"}
            />
            <span className="header-txt ms-2">(225) 555-0118</span>
          </div>
          <div className="ms-4">
            <Image
              height="12"
              width="16"
              alt="phone"
              unoptimized
              src={"/assets/mail.png"}
            />
            <span className="header-txt ms-2">michelle.rivera@example.com</span>
          </div>
        </div>

        <span className="header-txt">
          Follow Us and get a chance to win 80% off
        </span>
        <div className="d-flex align-items-center">
          <span className="header-txt"> Follow Us : </span>
          <div>
            <Image
              height="16"
              width="16"
              alt="phone"
              className="ms-3"
              unoptimized
              src={"/assets/instagram.png"}
            />
            <Image
              height="16"
              width="16"
              alt="phone"
              unoptimized
              className="ms-3"
              src={"/assets/youtube.png"}
            />
            <Image
              height="16"
              width="16"
              alt="phone"
              unoptimized
              className="ms-3"
              src={"/assets/facebook.png"}
            />
            <Image
              height="16"
              width="16"
              alt="phone"
              className="ms-3"
              unoptimized
              src={"/assets/twitter.png"}
            />
          </div>
        </div>
      </div>
      <div className="header-secondary">
        <div className="d-flex align-items-center">
          <span onClick={() => router.push("/")} className="logo">
            Bandage
          </span>
          <div className="links-div">
            <span className="link">Home</span>
            <span className="link">Shop</span>
            <span className="link">About</span>
            <span className="link">Blog</span>
            <span className="link">Contact</span>
            <span className="link">Pages</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Image
            height="20"
            width="20"
            alt="phone"
            unoptimized
            onClick={() => setshowproductform(true)}
            style={{ cursor: "pointer" }}
            src={"/assets/plus.png"}
          />
          <span
            onClick={() => {
              setshowproductform(true);
            }}
            style={{ cursor: "pointer" }}
            className="secondary-header-txt ms-2"
          >
            Create Product
          </span>

          <div className="d-flex align-items-center ms-4">
            <div onClick={() => setcartmodalShow(true)} className="ms-3">
              <Image
                height="16"
                width="16"
                alt="phone"
                style={{ cursor: "pointer" }}
                unoptimized
                src={"/assets/cart.png"}
              />
              <span className="secondary-header-txt ms-1">{cart.length}</span>
            </div>
            <div onClick={() => setwishlistmodalShow(true)} className="ms-4">
              <Image
                height="16"
                width="16"
                style={{ cursor: "pointer" }}
                alt="phone"
                unoptimized
                src={"/assets/heart.png"}
              />
              <span className="secondary-header-txt ms-1">
                {wishlist.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile-nav">
          <div className="d-flex align-items-center">
            <span className="logo">Bandage</span>
          </div>
          <div>
            <Image
              height="24"
              width="24"
              alt="search"
              unoptimized
              src={"/assets/search-mobile.png"}
            />
            <Image
              height="24"
              width="24"
              style={{ marginLeft: "24px" }}
              alt="cart"
              unoptimized
              src={"/assets/cart-mobile.png"}
            />
            <Image
              height="13"
              width="24"
              style={{ marginLeft: "24px" }}
              alt="menu"
              unoptimized
              onClick={() => setMobileNav(!mobilenav)}
              src={"/assets/menu-mobile.png"}
            />
          </div>
        </div>
        {mobilenav ? (
          <div className="nav-links-mobile-div">
            <span className="nav-link-mobile">Home</span>
            <span className="nav-link-mobile">Product</span>
            <span className="nav-link-mobile">Pricing</span>
            <span className="nav-link-mobile">Contact</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
