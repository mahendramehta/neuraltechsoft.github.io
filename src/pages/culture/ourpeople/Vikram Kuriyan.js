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
                Dr. Vikram Kuriyan: (Senior Consultant)
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
                Dr. Vikram Kuriyan has over 25 years of experience in The
                Investment and Risk & Governance Laboratory. He was the Managing
                Director of Bank of America (USA), Simplex Group (Tokyo), Vice
                President of Merrill Lynch & Co. (USA).
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                He was an Advisor of CFA Institute research foundation, TVS
                Capital, Abu Dhabi Investment Authority, SEBI, and many other
                institutes.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                Currently he is an Executive Chairman at Global Wealth
                Allocation (USA), CIO of K3 Advisors (USA) & Clinical Professor
                of Finance at Indian School of Business (India).
              </div>
            </Grid>{" "}
            {/**/}
          </Grid>
        </Grid>
      </Grid>{" "}
      <div style={{ padding: "70px" }} />
      <Footer />
    </div>
  )
}
