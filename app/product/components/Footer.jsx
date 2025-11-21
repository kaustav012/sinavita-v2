"use client";
import { Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Grid className="footer_container">
        <Grid container className="horizontal-content-slider">
          <Grid item className="forward-slider">
            <Typography variant="h4" className="horizontal-slider-text">
              • AN IMMUNITY VITAMIN • IT&#x27;S LIKE A CONDOM FOR YOUR HEALTH •
              AN IMMUNITY VITAMIN • FOMO FOR YOUR HEALTH • BECAUSE BEING SICK
              SUCKS • N IMMUNITY VITAMIN • DON’T PANIC, TAKE BOOST • BOOST YOUR
              IMMUNITY
            </Typography>
          </Grid>
          <Grid item className="backward-slider">
            <Typography variant="h4" className="horizontal-slider-text2">
              • AN IMMUNITY VITAMIN • IT&#x27;S LIKE A CONDOM FOR YOUR HEALTH •
              AN IMMUNITY VITAMIN • FOMO FOR YOUR HEALTH • BECAUSE BEING SICK
              SUCKS • N IMMUNITY VITAMIN • DON’T PANIC, TAKE BOOST • BOOST YOUR
              IMMUNITY
            </Typography>
          </Grid>
        </Grid>

        <Grid container className="footer-content">
          <Typography className="footer-heading">
            get
            <br />
            boosted
          </Typography>
          <Typography className="arrow_outword">
            <ArrowOutwardIcon style={{ fontSize: "5.5vw" }} />
          </Typography>
        </Grid>

        <Grid container className="footer-links">
          <Grid className="logo-brand">
            <Typography variant="h1" className="logo-name logo_name">
              boost
            </Typography>
            <Typography variant="subtitle1" className="year">
              {"@" + year}
            </Typography>
          </Grid>
          <Grid className="footer-menu">
            <Grid className="footer-link-wrapper">
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  home
                </a>
              </Typography>
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  shop
                </a>
              </Typography>
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  about
                </a>
              </Typography>
            </Grid>

            <Grid className="footer-link-wrapper">
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  contact
                </a>
              </Typography>
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  terms
                </a>
              </Typography>
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  policy
                </a>
              </Typography>
            </Grid>

            <Grid className="footer-link-wrapper last">
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  instagram
                </a>
              </Typography>
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  tiktok
                </a>
              </Typography>
              <Typography variant="subtitle1" className="footer-link">
                <a
                  href="https://takeboost.netlify.app/"
                  className="footer-link"
                >
                  facebook
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid className="footer-tagline-wrapper">
            <Typography variant="subtitle1" className="footer-tagline">
              Text us - your 24/7 immunity consultants
            </Typography>
            <Typography variant="h2" className="contact">
              +1 (917) 540-8641
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
