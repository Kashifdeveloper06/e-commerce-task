import "@/styles/globals.css";
import "@/styles/Header.css";
import "@/styles/Home.css";
import "@/styles/FeatureProducts.css";
import "@/styles/FeatureServices.css";
import "@/styles/FeatureTestimonials.css";
import "@/styles/Product.css";
import "@/styles/ProductPage.css";
import "@/styles/Footer.css";
import "@/styles/Post.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
