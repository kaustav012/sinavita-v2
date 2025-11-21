'use client'
import { Button, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import ProductSupport from "./ProductSupport";
import Link from "next/link";
const HeroHeading = ({ productDetails }) => {


  return (
    <>
      <div container className="hero-container bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <Typography variant="h1" className="hero-heading">
          <div dangerouslySetInnerHTML={{ __html: productDetails?.section1_title }} />
        </Typography>
        <Typography variant="subtitle1" className="hero-subtitle hidden md:block">
          {/* EXPERIENCE THE
          POWER OF
          <br />
          SINAVITA® MIGRAINE SUPPORT */}
          <div dangerouslySetInnerHTML={{ __html: productDetails?.section1_desc }} />
        </Typography>
      </div>

      <div className="sick_container bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <ProductSupport productDetails={productDetails} />
        <div container className="sick-wrapper">
          <div item className="left-content">
            <Typography variant="h1" className="border-heading">
              <div dangerouslySetInnerHTML={{ __html: productDetails?.section3_name }} />
            </Typography>
          </div>

          <div item className="center-content">
            <Typography className="downword-arrow">
              <SouthIcon sx={{ fontSize: "8vw" }} />
              {/* arrow_downward */}
            </Typography>
          </div>
          <div item className="right-content">
            <Typography className="right-first-heading" variant="h6">
              {productDetails?.section3_tagline}
            </Typography>
            <Typography variant="h4" className="right-secound-heading">
              {productDetails?.section3_title}
            </Typography>
            <Typography variant="h5" className="right-third-heading">
              {productDetails?.section3_desc}
            </Typography>
            <Link href="/product-cart">
              <Button className="buy-boost-button">buy Now</Button>
            </Link>
          </div>
        </div>

        <div container className="ingrediant-wrapper">
          <Typography variant="h1" className="ingrediant-heading">
            {productDetails?.section4_title}
          </Typography>
          {/* <Typography variant="subtitle1" className="ingrediant-subtitle">
            And you,
            <br />
            of course.
          </Typography> */}
        </div>
      </div>
    </>
  );
};

export default HeroHeading;
