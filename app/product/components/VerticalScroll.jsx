"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VerticalScroll = ({ animationData }) => {

  // =================work with the hight======
  // .slides_container {
  //   position: relative;
  //   height: 1200vh;
  //   width: 100% !important;
  //   max-width: 100% !important;
  // }
  // ===========================================


  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);
  const [image7, setImage7] = useState(false);
  const [image8, setImage8] = useState(false);
  const [image9, setImage9] = useState(false);
  const [image10, setImage10] = useState(false);
  const [image11, setImage11] = useState(false);
  const [image12, setImage12] = useState(false);

  const [image13, setImage13] = useState(false);
  const [image14, setImage14] = useState(false);
  const [image15, setImage15] = useState(false);
  const [image16, setImage16] = useState(false);
  const [image17, setImage17] = useState(false);
  const [image18, setImage18] = useState(false);
  const [image19, setImage19] = useState(false);
  const [image20, setImage20] = useState(false);
  const [image21, setImage21] = useState(false);
  const [image22, setImage22] = useState(false);
  const [image23, setImage23] = useState(false);
  const [image24, setImage24] = useState(false);

  const [elderberryDiv, setElderberryDiv] = useState(true);
  const [lemmonDiv, setLemmonDiv] = useState(false);
  const [diamondDiv, setDiamondDiv] = useState(false);

  const [mintDiv, setMintDiv] = useState(false);
  const [lavenderDiv, setLavenderDiv] = useState(false);
  const [vanillaDiv, setVanillaDiv] = useState(false);

  const mainRef = useRef(null);
  const Image01Ref = useRef(null);
  const Image02Ref = useRef(null);
  const Image03Ref = useRef(null);
  const Image04Ref = useRef(null);
  const Image05Ref = useRef(null);
  const Image06Ref = useRef(null);
  const Image07Ref = useRef(null);
  const Image08Ref = useRef(null);
  const Image09Ref = useRef(null);
  const Image10Ref = useRef(null);
  const Image11Ref = useRef(null);
  const Image12Ref = useRef(null);
  const Image13Ref = useRef(null);
  const Image14Ref = useRef(null);
  const Image15Ref = useRef(null);
  const Image16Ref = useRef(null);
  const Image17Ref = useRef(null);
  const Image18Ref = useRef(null);
  const Image19Ref = useRef(null);
  const Image20Ref = useRef(null);
  const Image21Ref = useRef(null);
  const Image22Ref = useRef(null);
  const Image23Ref = useRef(null);
  const Image24Ref = useRef(null);

  const elderberryRef = useRef(null);
  const lemmonRef = useRef(null);
  const diamondRef = useRef(null);
  const mintyRef = useRef(null);
  const lavenderRef = useRef(null);
  const vanillaRef = useRef(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      // Condition 1
      if (animationData?.ingredient1_name && scrollPos >= 4200 && scrollPos <= 6545) {
        setElderberryDiv(true);
        setLemmonDiv(false);
        setDiamondDiv(false);
        setMintDiv(false);
        setLavenderDiv(false);
        setVanillaDiv(false);
        setImage1(true); setImage2(true); setImage3(true); setImage4(true);
        setImage5(false); setImage6(false); setImage7(false); setImage8(false);
        setImage9(false); setImage10(false); setImage11(false); setImage12(false);
        setImage13(false); setImage14(false); setImage15(false); setImage16(false);
        setImage17(false); setImage18(false); setImage19(false); setImage20(false);
        setImage21(false); setImage22(false); setImage23(false); setImage24(false);
      }

      // Condition 2
      if (animationData?.ingredient2_name && scrollPos >= 6545 && scrollPos <= 10260) {
        setElderberryDiv(false);
        setLemmonDiv(true);
        setDiamondDiv(false);
        setMintDiv(false);
        setLavenderDiv(false);
        setVanillaDiv(false);
        setImage1(false); setImage2(false); setImage3(false); setImage4(false);
        setImage5(true); setImage6(true); setImage7(true); setImage8(true);
        setImage9(false); setImage10(false); setImage11(false); setImage12(false);
        setImage13(false); setImage14(false); setImage15(false); setImage16(false);
        setImage17(false); setImage18(false); setImage19(false); setImage20(false);
        setImage21(false); setImage22(false); setImage23(false); setImage24(false);
      }

      // Condition 3
      if (animationData?.ingredient3_name && scrollPos >= 10260 && scrollPos <= 13120) {
        setElderberryDiv(false);
        setLemmonDiv(false);
        setDiamondDiv(true);
        setMintDiv(false);
        setLavenderDiv(false);
        setVanillaDiv(false);
        setImage1(false); setImage2(false); setImage3(false); setImage4(false);
        setImage5(false); setImage6(false); setImage7(false); setImage8(false);
        setImage9(true); setImage10(true); setImage11(true); setImage12(true);
        setImage13(false); setImage14(false); setImage15(false); setImage16(false);
        setImage17(false); setImage18(false); setImage19(false); setImage20(false);
        setImage21(false); setImage22(false); setImage23(false); setImage24(false);
      }

      // Condition 4
      if (animationData?.ingredient4_name && scrollPos >= 13120 && scrollPos <= 16000) {
        setElderberryDiv(false);
        setLemmonDiv(false);
        setDiamondDiv(false);
        setMintDiv(true);
        setLavenderDiv(false);
        setVanillaDiv(false);
        setImage1(false); setImage2(false); setImage3(false); setImage4(false);
        setImage5(false); setImage6(false); setImage7(false); setImage8(false);
        setImage9(false); setImage10(false); setImage11(false); setImage12(false);
        setImage13(true); setImage14(true); setImage15(true); setImage16(true);
        setImage17(false); setImage18(false); setImage19(false); setImage20(false);
        setImage21(false); setImage22(false); setImage23(false); setImage24(false);
      }

      // Condition 5
      if (animationData?.ingredient5_name && scrollPos >= 16000 && scrollPos <= 18500) {
        setElderberryDiv(false);
        setLemmonDiv(false);
        setDiamondDiv(false);
        setMintDiv(false);
        setLavenderDiv(true);
        setVanillaDiv(false);
        setImage1(false); setImage2(false); setImage3(false); setImage4(false);
        setImage5(false); setImage6(false); setImage7(false); setImage8(false);
        setImage9(false); setImage10(false); setImage11(false); setImage12(false);
        setImage13(false); setImage14(false); setImage15(false); setImage16(false);
        setImage17(true); setImage18(true); setImage19(true); setImage20(true);
        setImage21(false); setImage22(false); setImage23(false); setImage24(false);
      }

      // Condition 6
      if (animationData?.ingredient6_name && scrollPos >= 18500 && scrollPos <= 21000) {
        setElderberryDiv(false);
        setLemmonDiv(false);
        setDiamondDiv(false);
        setMintDiv(false);
        setLavenderDiv(false);
        setVanillaDiv(true);
        setImage1(false); setImage2(false); setImage3(false); setImage4(false);
        setImage5(false); setImage6(false); setImage7(false); setImage8(false);
        setImage9(false); setImage10(false); setImage11(false); setImage12(false);
        setImage13(false); setImage14(false); setImage15(false); setImage16(false);
        setImage17(false); setImage18(false); setImage19(false); setImage20(false);
        setImage21(true); setImage22(true); setImage23(true); setImage24(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      const updateImageAnimation = (ref, start, end, fadeOut) => {
        if (!ref.current) return;

        if (scrollPos >= start && scrollPos <= end) {
          let progress = (scrollPos - start) / (end - start);
          ref.current.style.transform = `rotate(${progress * 180}deg) scale(${3 * progress})`;
          ref.current.style.opacity = scrollPos < fadeOut ? "1" : "0";
          ref.current.style.transition = "opacity 1s ease-out";
        }
      };

      updateImageAnimation(Image01Ref, 4200, 5130, 4900);
      updateImageAnimation(Image02Ref, 4930, 5860, 5630);
      updateImageAnimation(Image03Ref, 5660, 6590, 6370);
      updateImageAnimation(Image04Ref, 6400, 7330, 7110);
      updateImageAnimation(Image05Ref, 7140, 8070, 7840);
      updateImageAnimation(Image06Ref, 7870, 8800, 8570);
      updateImageAnimation(Image07Ref, 8600, 9530, 9300);
      updateImageAnimation(Image08Ref, 9330, 10260, 10030);
      updateImageAnimation(Image09Ref, 10060, 10990, 10760);
      updateImageAnimation(Image10Ref, 10790, 11720, 11490);
      updateImageAnimation(Image11Ref, 11520, 12450, 12220);
      updateImageAnimation(Image12Ref, 12250, 13180, 12950);
      updateImageAnimation(Image13Ref, 13180, 14110, 13880);
      updateImageAnimation(Image14Ref, 14000, 14930, 14700);
      updateImageAnimation(Image15Ref, 14800, 15730, 15500);
      updateImageAnimation(Image16Ref, 15600, 16530, 16300);
      updateImageAnimation(Image17Ref, 16400, 17330, 17100);
      updateImageAnimation(Image18Ref, 17200, 18130, 17900);
      updateImageAnimation(Image19Ref, 18000, 18930, 18700);
      updateImageAnimation(Image20Ref, 18800, 19730, 19500);
      updateImageAnimation(Image21Ref, 19600, 20530, 20300);
      updateImageAnimation(Image22Ref, 20400, 21330, 21100);
      updateImageAnimation(Image23Ref, 21200, 22130, 21900);
      updateImageAnimation(Image24Ref, 22000, 22930, 22700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Grid className="slides_container" ref={mainRef}>
      {animationData?.ingredient1_name && elderberryDiv && <Grid
        ref={elderberryRef}
        container
        className={
          elderberryDiv !== false
            ? "elderberry_wrapper_active bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
            : "elderberry_wrapper bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
        }
      >
        <Grid container className="scroll-content1">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              {animationData?.ingredient1_name}<br />
              <span className="outline-span">
                {animationData?.ingredient2_name} <br />
                {animationData?.ingredient3_name} <br />
                {animationData?.ingredient4_name} <br />
                {animationData?.ingredient5_name} <br />
                {animationData?.ingredient6_name}
              </span>
            </Typography>
          </Grid>
          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              {animationData?.benefit1_a && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01. {animationData?.benefit1_a}
                </Typography>
              </Grid>}
              {animationData?.benefit2_a && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. {animationData?.benefit2_a}
                </Typography>
              </Grid>}
              {animationData?.benefit3_a && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. {animationData?.benefit3_a}
                </Typography>
              </Grid>}
              {animationData?.benefit4_a && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. {animationData?.benefit4_a}
                </Typography>
              </Grid>}
              {animationData?.benefit5_a && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  05. {animationData?.benefit5_a}
                </Typography>
              </Grid>}
            </Grid>
            {animationData?.ingredient1_short_note && <Typography className="paragraph" variant="subtitle1">
              {animationData?.ingredient1_short_note}
            </Typography>}
          </Grid>
          <img
            ref={Image01Ref}
            src={animationData?.ingredient1_image}
            alt="elderberry"
            className={image1 === false ? "image_01" : "image_01_active"}
          />

          <img
            ref={Image02Ref}
            src={animationData?.ingredient1_image}
            alt="elderberry"
            className={image2 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image03Ref}
            src={animationData?.ingredient1_image}
            alt="elderberry"
            className={image3 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image04Ref}
            src={animationData?.ingredient1_image}
            alt="elderberry"
            className={image4 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>}

      {animationData?.ingredient2_name && lemmonDiv && <Grid
        ref={lemmonRef}
        container
        className={
          lemmonDiv !== false ? "lemmon_wrapper_active" : "lemmon_wrapper"
        }
      >
        <Grid container className="scroll-content2">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              <span className="outline-span">{animationData?.ingredient1_name}</span><br />
              {animationData?.ingredient2_name} <br />
              <span className="outline-span">
                {animationData?.ingredient3_name} <br />
                {animationData?.ingredient4_name} <br />
                {animationData?.ingredient5_name} <br />
                {animationData?.ingredient6_name}
              </span>
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              {animationData?.benefit1_b && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01.   {animationData?.benefit1_b}
                </Typography>
              </Grid>}
              {animationData?.benefit2_b && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. {animationData?.benefit2_b}
                </Typography>
              </Grid>}
              {animationData?.benefit3_b && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. {animationData?.benefit3_b}
                </Typography>
              </Grid>}
              {animationData?.benefit4_b && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. {animationData?.benefit4_b}
                </Typography>
              </Grid>}
              {animationData?.benefit5_b && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  05. {animationData?.benefit5_b}
                </Typography>
              </Grid>}
            </Grid>
            {animationData?.ingredient2_short_note && <Typography className="paragraph" variant="subtitle1">
              {animationData?.ingredient2_short_note}
            </Typography>}
          </Grid>
          <img
            ref={Image05Ref}
            src={animationData?.ingredient2_image}
            alt="orange"
            className={image5 === false ? "image_01" : "image_01_active"}
          />
          <img
            ref={Image06Ref}
            src={animationData?.ingredient2_image}
            alt="orange"
            className={image6 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image07Ref}
            src={animationData?.ingredient2_image}
            alt="orange"
            className={image7 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image08Ref}
            src={animationData?.ingredient2_image}
            alt="orange"
            className={image8 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>}

      {animationData?.ingredient3_name && diamondDiv && <Grid
        ref={diamondRef}
        container
        className={
          diamondDiv !== false ? "diamond_wrapper_active" : "diamond_wrapper"
        }
      >
        <Grid container className="scroll-content3">
          <Grid item className="left-block">
            <Typography className="heading-06-black" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading-black" variant="h3">
              <span className="outline-span-black">
                {animationData?.ingredient1_name}<br />
                {animationData?.ingredient2_name} <br />
              </span>
              {animationData?.ingredient3_name} <br />
              <span className="outline-span-black">
                {animationData?.ingredient4_name} <br />
                {animationData?.ingredient5_name} <br />
                {animationData?.ingredient6_name}
              </span>
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06-black" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              {animationData?.benefit1_c && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  01. {animationData?.benefit1_c}
                </Typography>
              </Grid>}
              {animationData?.benefit2_c && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  02. {animationData?.benefit2_c}
                </Typography>
              </Grid>}
              {animationData?.benefit3_c && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  03. {animationData?.benefit3_c}
                </Typography>
              </Grid>}
              {animationData?.benefit4_c && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  04. {animationData?.benefit4_c}
                </Typography>
              </Grid>}
              {animationData?.benefit5_c && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  05. {animationData?.benefit5_c}
                </Typography>
              </Grid>}
            </Grid>
            {animationData?.ingredient3_short_note && <Typography className="paragraph-black" variant="subtitle1">
              {animationData?.ingredient3_short_note}
            </Typography>}
          </Grid>
          <img
            ref={Image09Ref}
            src={animationData?.ingredient3_image}
            alt="zink"
            className={image9 === false ? "image_01" : "image_01_active"}
          />
          <img
            ref={Image10Ref}
            src={animationData?.ingredient3_image}
            alt="zink"
            className={image10 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image11Ref}
            src={animationData?.ingredient3_image}
            alt="zink"
            className={image11 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image12Ref}
            src={animationData?.ingredient3_image}
            alt="zink"
            className={image12 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>}
      {/* ======================================================================================================= */}
      {animationData?.ingredient4_name && mintDiv && <Grid
        ref={mintyRef}
        container
        className={
          mintDiv !== false
            ? "mint_wrapper_active bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
            : "mint_wrapper bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
        }
      >
        <Grid container className="scroll-content1">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              <span className="outline-span">
                {animationData?.ingredient2_name}<br />
                {animationData?.ingredient2_name} <br />
                {animationData?.ingredient3_name} <br />
              </span>
              {animationData?.ingredient4_name} <br />
              <span className="outline-span">
                {animationData?.ingredient5_name} <br />
                {animationData?.ingredient6_name}
              </span>
            </Typography>
          </Grid>
          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              {animationData?.benefit1_d && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01. {animationData?.benefit1_d}
                </Typography>
              </Grid>}
              {animationData?.benefit2_d && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. {animationData?.benefit2_d}
                </Typography>
              </Grid>}
              {animationData?.benefit3_d && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. {animationData?.benefit3_d}
                </Typography>
              </Grid>}
              {animationData?.benefit4_d && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. {animationData?.benefit4_d}
                </Typography>
              </Grid>}
              {animationData?.benefit5_d && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  05. {animationData?.benefit5_d}
                </Typography>
              </Grid>}
            </Grid>
            {animationData?.ingredient4_short_note && <Typography className="paragraph" variant="subtitle1">
              {animationData?.ingredient4_short_note}
            </Typography>}
          </Grid>
          <img
            ref={Image13Ref}
            src={animationData?.ingredient4_image}
            alt="elderberry"
            className={image13 === false ? "image_01" : "image_01_active"}
          />

          <img
            ref={Image14Ref}
            src={animationData?.ingredient4_image}
            alt="elderberry"
            className={image14 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image15Ref}
            src={animationData?.ingredient4_image}
            alt="elderberry"
            className={image15 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image16Ref}
            src={animationData?.ingredient4_image}
            alt="elderberry"
            className={image16 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>}

      {animationData?.ingredient5_name && lavenderDiv && <Grid
        ref={lavenderRef}
        container
        className={
          lavenderDiv !== false ? "lavender_wrapper_active" : "lavender_wrapper"
        }
      >
        <Grid container className="scroll-content2">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              <span className="outline-span">
                {animationData?.ingredient2_name}<br />
                {animationData?.ingredient2_name} <br />
                {animationData?.ingredient3_name} <br />
                {animationData?.ingredient4_name} <br />
              </span>
              {animationData?.ingredient5_name} <br />
              <span className="outline-span">
                {animationData?.ingredient6_name}
              </span>
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              {animationData?.benefit1_e && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01. {animationData?.benefit1_e}
                </Typography>
              </Grid>}
              {animationData?.benefit2_e && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. {animationData?.benefit2_e}
                </Typography>
              </Grid>}
              {animationData?.benefit3_e && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. {animationData?.benefit3_e}
                </Typography>
              </Grid>}
              {animationData?.benefit4_e && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. {animationData?.benefit4_e}
                </Typography>
              </Grid>}
              {animationData?.benefit5_e && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  05. {animationData?.benefit5_e}
                </Typography>
              </Grid>}
            </Grid>
            {animationData?.ingredient5_short_note && <Typography className="paragraph" variant="subtitle1">
              {animationData?.ingredient5_short_note}
            </Typography>}
          </Grid>
          <img
            ref={Image17Ref}
            src={animationData?.ingredient5_image}
            alt="orange"
            className={image17 === false ? "image_01" : "image_01_active"}
          />
          <img
            ref={Image18Ref}
            src={animationData?.ingredient5_image}
            alt="orange"
            className={image18 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image19Ref}
            src={animationData?.ingredient5_image}
            alt="orange"
            className={image19 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image20Ref}
            src={animationData?.ingredient5_image}
            alt="orange"
            className={image20 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>}

      {animationData?.ingredient6_name && vanillaDiv && <Grid
        ref={vanillaRef}
        container
        className={
          vanillaDiv !== false ? "vanilla_wrapper_active" : "vanilla_wrapper"
        }
      >
        <Grid container className="scroll-content3">
          <Grid item className="left-block">
            <Typography className="heading-06-black" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading-black" variant="h3">
              <span className="outline-span-black">
                {animationData?.ingredient2_name}<br />
                {animationData?.ingredient2_name} <br />
                {animationData?.ingredient3_name} <br />
                {animationData?.ingredient4_name} <br />
                {animationData?.ingredient5_name} <br />
              </span>
              {animationData?.ingredient6_name}
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06-black" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              {animationData?.benefit1_f && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  01. {animationData?.benefit1_f}
                </Typography>
              </Grid>}
              {animationData?.benefit2_f && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  02. {animationData?.benefit2_f}
                </Typography>
              </Grid>}
              {animationData?.benefit3_f && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  03. {animationData?.benefit3_f}
                </Typography>
              </Grid>}
              {animationData?.benefit4_f && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  04. {animationData?.benefit4_f}
                </Typography>
              </Grid>}
              {animationData?.benefit5_f && <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  05. {animationData?.benefit5_f}
                </Typography>
              </Grid>}
            </Grid>
            <Typography className="paragraph-black" variant="subtitle1">
              {animationData?.ingredient6_short_note}
            </Typography>
          </Grid>
          <img
            ref={Image21Ref}
            src={animationData?.ingredient6_image}
            alt="zink"
            className={image21 === false ? "image_01" : "image_01_active"}
          />
          <img
            ref={Image22Ref}
            src={animationData?.ingredient6_image}
            alt="zink"
            className={image22 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image23Ref}
            src={animationData?.ingredient6_image}
            alt="zink"
            className={image23 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image24Ref}
            src={animationData?.ingredient6_image}
            alt="zink"
            className={image24 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>}
    </Grid>
  );
};

export default VerticalScroll;
