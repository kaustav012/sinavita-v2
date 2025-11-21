"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const VerticalScroll = () => {
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
    const [elderberryDiv, setElderberryDiv] = useState(true);
    const [lemmonDiv, setLemmonDiv] = useState(false);
    const [diamondDiv, setDiamondDiv] = useState(false);

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
    const elderberryRef = useRef(null);
    const lemmonRef = useRef(null);
    const diamondRef = useRef(null);

    useLayoutEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (scrollPos >= 4200 && scrollPos <= 6545) {
                setElderberryDiv(true);
                setLemmonDiv(false);
                setDiamondDiv(false);
                setImage1(true);
                setImage2(true);
                setImage3(true);
                setImage4(true);
                setImage5(false);
                setImage6(false);
                setImage7(false);
                setImage8(false);
                setImage9(false);
                setImage10(false);
                setImage11(false);
                setImage12(false);
            }
            if (scrollPos >= 6545 && scrollPos <= 10260) {
                // console.log("scrollPos: ", scrollPos);
                // console.log("lemmonRef: ", lemmonRef);

                // if (scrollPos > 6645 && scrollPos < 10045) {
                //   lemmonRef.current.style.opacity = "1";
                //   lemmonRef.current.style.transition = "opacity 1s ease-out";
                // }
                setElderberryDiv(false);
                setLemmonDiv(true);
                setDiamondDiv(false);
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
                setImage5(true);
                setImage6(true);
                setImage7(true);
                setImage8(true);
                setImage9(false);
                setImage10(false);
                setImage11(false);
                setImage12(false);
            }
            if (scrollPos >= 10260 && scrollPos <= 13120) {
                setElderberryDiv(false);
                setLemmonDiv(false);
                setDiamondDiv(true);
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
                setImage5(false);
                setImage6(false);
                setImage7(false);
                setImage8(false);
                setImage9(true);
                setImage10(true);
                setImage11(true);
                setImage12(true);
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
                    // ref.current.style.transition = "transform 0.3s, opacity 0.5s ease-out";
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
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    // useLayoutEffect(() => {
    //   const onScroll = () => {
    //     const scrollPos = window.scrollY + window.innerHeight;
    //     if (scrollPos >= 4200 && scrollPos <= 7270) {

    //       setElderberryDiv(true);
    //       setLemmonDiv(false);
    //       setDiamondDiv(false);
    //       setImage1(true);
    //       setImage2(true);
    //       setImage3(true);
    //       setImage4(true);
    //       setImage5(false);
    //       setImage6(false);
    //       setImage7(false);
    //       setImage8(false);
    //       setImage9(false);
    //       setImage10(false);
    //       setImage11(false);
    //       setImage12(false);
    //     }
    //     if (scrollPos >= 7140 && scrollPos <= 10200) {
    //       setElderberryDiv(false);
    //       setLemmonDiv(true);
    //       setDiamondDiv(false);
    //       setImage1(false);
    //       setImage2(false);
    //       setImage3(false);
    //       setImage4(false);
    //       setImage5(true);
    //       setImage6(true);
    //       setImage7(true);
    //       setImage8(true);
    //       setImage9(false);
    //       setImage10(false);
    //       setImage11(false);
    //       setImage12(false);
    //     }
    //     if (scrollPos >= 10790 && scrollPos <= 13120) {
    //       setElderberryDiv(false);
    //       setLemmonDiv(false);
    //       setDiamondDiv(true);
    //       setImage1(false);
    //       setImage2(false);
    //       setImage3(false);
    //       setImage4(false);
    //       setImage5(false);
    //       setImage6(false);
    //       setImage7(false);
    //       setImage8(false);
    //       setImage9(true);
    //       setImage10(true);
    //       setImage11(true);
    //       setImage12(true);
    //     }
    //   };

    //   window.addEventListener("scroll", onScroll);
    //   return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    // useEffect(() => {
    //   window.addEventListener("scroll", (event) => {
    //     const scrollPos = window.scrollY + window.innerHeight;

    //     if (scrollPos >= 4200 && scrollPos <= 5130) {
    //       Image01Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 2 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 4900
    //           ? (Image01Ref.current.style.opacity = "1")
    //           : (Image01Ref.current.style.opacity = "0")
    //       }
    //       Image01Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 4930 && scrollPos <= 5860) {
    //       Image02Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3.5 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 5630
    //           ? (Image02Ref.current.style.opacity = "1")
    //           : (Image02Ref.current.style.opacity = "0");
    //       }
    //       Image02Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 5660 && scrollPos <= 6590) {
    //       Image03Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 6370
    //           ? (Image03Ref.current.style.opacity = "1")
    //           : (Image03Ref.current.style.opacity = "0");
    //       }
    //       Image03Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 6400 && scrollPos <= 7330) {
    //       Image04Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 7110
    //           ? (Image04Ref.current.style.opacity = "1")
    //           : (Image04Ref.current.style.opacity = "0");
    //       }
    //       Image04Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 7140 && scrollPos <= 8070) {
    //       Image05Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 7840
    //           ? (Image05Ref.current.style.opacity = "1")
    //           : (Image05Ref.current.style.opacity = "0");
    //       }
    //       Image05Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 7870 && scrollPos <= 8800) {
    //       Image06Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 8570
    //           ? (Image06Ref.current.style.opacity = "1")
    //           : (Image06Ref.current.style.opacity = "0");
    //       }
    //       Image06Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 8600 && scrollPos <= 9530) {
    //       Image07Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 9300
    //           ? (Image07Ref.current.style.opacity = "1")
    //           : (Image07Ref.current.style.opacity = "0");
    //       }
    //       Image07Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 9330 && scrollPos <= 10260) {
    //       Image08Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 10030
    //           ? (Image08Ref.current.style.opacity = "1")
    //           : (Image08Ref.current.style.opacity = "0");
    //       }
    //       Image08Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 10060 && scrollPos <= 10990) {
    //       Image09Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 10760
    //           ? (Image09Ref.current.style.opacity = "1")
    //           : (Image09Ref.current.style.opacity = "0");
    //       }
    //       Image09Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 10790 && scrollPos <= 11720) {
    //       Image10Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 11490
    //           ? (Image10Ref.current.style.opacity = "1")
    //           : (Image10Ref.current.style.opacity = "0");
    //       }
    //       Image10Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 11520 && scrollPos <= 12450) {
    //       Image11Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 3 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 12220
    //           ? (Image11Ref.current.style.opacity = "1")
    //           : (Image11Ref.current.style.opacity = "0");
    //       }
    //       Image11Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //     if (scrollPos >= 12250 && scrollPos <= 13180) {
    //       Image12Ref.current.style.transform =
    //         "rotate(" + window.scrollY / 5 + "deg) scale(1.3)";
    //       {
    //         scrollPos < 12950
    //           ? (Image12Ref.current.style.opacity = "1")
    //           : (Image12Ref.current.style.opacity = "0");
    //       }
    //       Image12Ref.current.style.transition = "opacity 1s ease-out";
    //     }

    //   });
    // }, []);

    return (
        <Grid className="slides_container" ref={mainRef}>
            {elderberryDiv && <Grid
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
                            Echium amoenum <br />
                            <span className="outline-span">
                                Matricaria chamomilla <br />
                                Eucalyptus globulus
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item className="right-block">
                        <Typography className="heading-06" variant="h6">
                            Benefits
                        </Typography>
                        <Grid container className="right-block-content">
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    01. Analgesic Properties
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    02. Neuroprotective Effects
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    03. Anti-inflammatory Properties
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    04. Vasodilatory Effects
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    05. Holds Antioxidant Properties
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* <Typography className="paragraph" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography> */}
                    </Grid>
                    <img
                        ref={Image01Ref}
                        // src="/image/elderberries.png"
                        src="/molecules/Echium amoenum/Rosmarinic_acid_Cart.png"
                        alt="elderberry"
                        className={image1 === false ? "image_01" : "image_01_active"}
                    />

                    <img
                        ref={Image02Ref}
                        // src="/image/elderberries.png"
                        src="/molecules/Echium amoenum/Rosmarinic_acid_Cart.png"
                        alt="elderberry"
                        className={image2 === false ? "image_02" : "image_02_active"}
                    />
                    <img
                        ref={Image03Ref}
                        // src="/image/elderberries.png"
                        src="/molecules/Echium amoenum/Rosmarinic_acid_Cart.png"
                        alt="elderberry"
                        className={image3 === false ? "image_03" : "image_03_active"}
                    />
                    <img
                        ref={Image04Ref}
                        // src="/image/elderberries.png"
                        src="/molecules/Echium amoenum/Rosmarinic_acid_Cart.png"
                        alt="elderberry"
                        className={image4 === false ? "image_04" : "image_04_active"}
                    />
                </Grid>
            </Grid>}

            {lemmonDiv && <Grid
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
                            <span className="outline-span">Echium amoenum</span> <br />
                            <span>
                                Matricaria chamomilla <br />
                                <span className="outline-span">Eucalyptus globulus</span>
                            </span>
                        </Typography>
                    </Grid>

                    <Grid item className="right-block">
                        <Typography className="heading-06" variant="h6">
                            Benefits
                        </Typography>
                        <Grid container className="right-block-content">
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    01. Support Pain Relief
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    02. Muscle Relaxation Effects
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    03. Anti-inflammatory Properties
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    04. Stress Reduction Effects
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05" variant="h5">
                                    05. Improves Sleep Quality
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* <Typography className="paragraph" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography> */}
                    </Grid>
                    <img
                        ref={Image05Ref}
                        // src="/image/orange.png"
                        src="/molecules/Matricaria chamomilla/Matricaria_chamomilla.png"
                        alt="orange"
                        className={image5 === false ? "image_01" : "image_01_active"}
                    />
                    <img
                        ref={Image06Ref}
                        // src="/image/orange.png"
                        src="/molecules/Matricaria chamomilla/Matricaria_chamomilla.png"
                        alt="orange"
                        className={image6 === false ? "image_02" : "image_02_active"}
                    />
                    <img
                        ref={Image07Ref}
                        // src="/image/orange.png"
                        src="/molecules/Matricaria chamomilla/Matricaria_chamomilla.png"
                        alt="orange"
                        className={image7 === false ? "image_03" : "image_03_active"}
                    />
                    <img
                        ref={Image08Ref}
                        // src="/image/orange.png"
                        src="/molecules/Matricaria chamomilla/Matricaria_chamomilla.png"
                        alt="orange"
                        className={image8 === false ? "image_04" : "image_04_active"}
                    />
                </Grid>
            </Grid>}

            {diamondDiv && <Grid
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
                                Echium amoenum <br />
                                Matricaria chamomilla <br />
                            </span>
                            Eucalyptus globulus
                        </Typography>
                    </Grid>

                    <Grid item className="right-block">
                        <Typography className="heading-06-black" variant="h6">
                            Benefits
                        </Typography>
                        <Grid container className="right-block-content">
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05-black" variant="h5">
                                    01. Support Pain Relief
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05-black" variant="h5">
                                    02.Promote Mental Clarity and Relaxation
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05-black" variant="h5">
                                    03. Anti-inflammatory Properties
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05-black" variant="h5">
                                    04. Vasodilatory Effects
                                </Typography>
                            </Grid>
                            <Grid item className="right-block-bottom-border">
                                <Typography className="heading-05-black" variant="h5">
                                    05. Sinus Relief
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* <Typography className="paragraph-black" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography> */}
                    </Grid>
                    <img
                        ref={Image09Ref}
                        // src="/image/zinc.png"
                        src="/molecules/Eucalyptus Globulus/Eucalyptol.png"
                        alt="zink"
                        className={image9 === false ? "image_01" : "image_01_active"}
                    />
                    <img
                        ref={Image10Ref}
                        // src="/image/zinc.png"
                        src="/molecules/Eucalyptus Globulus/Eucalyptol.png"
                        alt="zink"
                        className={image10 === false ? "image_02" : "image_02_active"}
                    />
                    <img
                        ref={Image11Ref}
                        // src="/image/zinc.png"
                        src="/molecules/Eucalyptus Globulus/Eucalyptol.png"
                        alt="zink"
                        className={image11 === false ? "image_03" : "image_03_active"}
                    />
                    <img
                        ref={Image12Ref}
                        // src="/image/zinc.png"
                        src="/molecules/Eucalyptus Globulus/Eucalyptol.png"
                        alt="zink"
                        className={image12 === false ? "image_04" : "image_04_active"}
                    />
                </Grid>
            </Grid>}
        </Grid>
    );
};

export default VerticalScroll;
