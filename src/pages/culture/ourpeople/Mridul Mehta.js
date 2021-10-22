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
        <Grid item md={4} sm={8} xs={11}>
          <Grid container className={gclasses.gridpad} spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div
                style={{ textAlign: "center" }}
                className={gclasses.pagetitle}
              >
                Dr. Mridul Mehta: (Director)
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
                Dr. Mridul Mehta has over 16 years of experience in managing
                global equities portfolio, designing an algorithmic trading
                system for equities and vol products, and worked on strategies
                in fixed income and FX markets.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                He was the Head of High-Frequency Trading in Citadel Investment
                Group, Chicago, USA & London. He was responsible for the entire
                business in Europe, trading 5-10% of the volume on all major
                European exchanges.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                He was the Managing Director of Acceletrade Corp & Girehban LLC,
                USA and Head of Machine Learning in Soteris Inc..
              </div>
            </Grid>{" "}
            {/**/}
          </Grid>
        </Grid>
      </Grid> <div style={{padding:"70px"}}/>
      <Footer />
    </div>
  )
}
