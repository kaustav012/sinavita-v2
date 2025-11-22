
"use client"
import HeroHeading from "../components/HeroHeading";
import VerticalScroll from "../components/VerticalScroll";
import CardsScroll from "../components/CardsScroll";
import MarqueeComponents from "../components/MarqueeComponents";
import Bottel from "../components/bottel/Bottel";
import Cursor from "../components/cursor/Cursor";

import Footer from "../../../components/footer";
import MigrainSupport from "../../../components/MigrainSupport";
import Image360Viewer from "../components/Image360Viewer";
import ProductSupportTwo from "../components/ProductSupportTwo";
import SinaVitaLanding from "./SinaVitaLanding";
import { useParams } from "next/navigation";
import { PRODUCT_DETAILS_BY_ID, PRODUCT_IMAGE_SEQUENCE_BY_ID, PRODUCT_ANIMATION_BY_ID, PRODUCT_CART_BY_ID } from "../../../services/product";
import { useEffect, useState } from "react";
import LoadingText from "../../../components/LoadingText";
import Header from "../../../components/header";

const ProductPage = () => {
  const { id } = useParams(); // Get the ID from the URL

  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([])
  const [imageSequence, setImageSequence] = useState([])
  const [animationData, setAnimationData] = useState({})
  const [productCartData, setProductCartData] = useState([])
  useEffect(() => {
    const fetchRideTypes = async () => {
      setLoading(true);

      try {
        const [detailsResult, imagesResult, animationResult, cartResult] = await Promise.allSettled([
          PRODUCT_DETAILS_BY_ID(id),
          PRODUCT_IMAGE_SEQUENCE_BY_ID(id),
          PRODUCT_ANIMATION_BY_ID(id),
          PRODUCT_CART_BY_ID(id)
        ]);

        if (detailsResult.status === "fulfilled") {
          setProductDetails(detailsResult.value || []);
        } else {
          console.error("Failed to fetch product details", detailsResult.reason);
        }

        if (imagesResult.status === "fulfilled") {
          setImageSequence(imagesResult.value || []);
        } else {
          console.error("Failed to fetch image sequence", imagesResult.reason);
        }

        if (animationResult.status === "fulfilled") {
          setAnimationData(animationResult.value || {});
        } else {
          console.error("Failed to fetch animation data", animationResult.reason);
        }

        if (cartResult.status === "fulfilled") {
          setProductCartData(cartResult.value || {});
        } else {
          console.error("Failed to fetch cart data", cartResult.reason);
        }

      } catch (err) {
        console.error("Unexpected error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRideTypes();
  }, [id]);


  return (
    loading ?
      <LoadingText /> :
      <div className="home-wrapper">
        <div className="hero-section">
          <Header productDetails={productDetails} id={productDetails?.id} />
          <Cursor />
          <SinaVitaLanding productCartData={productCartData} productDetails={productDetails} />
          <CardsScroll productDetails={productDetails} />
          <MarqueeComponents productDetails={productDetails} />
          <MigrainSupport id={productDetails?.id} />
          <Footer productDetails={productDetails} id={productDetails?.id} />
        </div>
      </div>
  );
};

export default ProductPage;
