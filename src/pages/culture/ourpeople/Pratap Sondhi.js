import React from "react"

import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import { Parallax } from "react-parallax"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"
import globalStyles from "../../../styles/global"
import "bootstrap/dist/css/bootstrap.min.css"
import { Grid } from "@material-ui/core"
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}
export default function Home() {
  const gclasses = globalStyles()
  // const p1 = data.mehta
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>

      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={6} sm={8} xs={11}>
          <Grid container className={gclasses.gridpad} spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div
                style={{ textAlign: "center" }}
                className={gclasses.pagetitle}
              >
                Dr. Pratap Sondhi: (Chief Consultant)
              </div>
            </Grid>
            {/* <Grid item md={12} sm={6} xs={12}>
              <BackgroundImage
                fluid={p1.childImageSharp.fluid}
                className={gclasses.imagebox}
              >
                {" "}
                <div className={gclasses.boxtitle}>{p1.name}</div>
              </BackgroundImage>
            </Grid> */}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                Dr. Pratap Sondhi has over 30 years of extensive experience in
                investment banking, treasury management, exposure management,
                managing the development and implementation of innovative Price
                & Credit Risk Management techniques, and other related areas.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                He has worked at Citibank's various offices across the globe
                winning laurels for his unparalleled work in the Risk Management
                & Derivatives arena. He was the man behind Citibank's first
                integrated risk management system. He remained as Global Head
                for Derivative Analytics at Citibank and Senior Manager at
                Citibank, London.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                He is the Founder and CEO of Riskhints ltd., Hong Kong.
              </div>
            </Grid>{" "}
            {/**/}
          </Grid>
        </Grid>
      </Grid>
      <div style={{padding:"100px"}}/>
      <Footer />
    </div>
  )
}
