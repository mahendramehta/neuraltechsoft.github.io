import React from "react"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Parallax } from "react-parallax"
// import BackgroundImage from "gatsby-background-image"
import b1 from "../../images/background/Education.jpg"
// import { graphql } from "gatsby"
import globalStyles from "../../styles/global"
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
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={b1} strength={500}>
        <div  className={gclasses.parallax}>
          <div style={insideStyles}>Mission, Vision & Objective</div>
        </div>
      </Parallax>

      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={8} sm={11} xs={11}>
          {/* <div className={classes.pad}></div> */}
          <Grid container className={gclasses.gridpad}>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.pagetitle}>Mission</div>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                NTS’s Mission is to help the financial industry is functioning
                efficiently by training the individuals working in the industry
                and improve business productivity by providing superior and
                cutting edge technology.
              </div>
            </Grid> <div style={{ padding: "20px" }}></div>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.pagetitle}>Vision</div>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                NTS’s Vision is to create elegant & workable analytics to enable
                business functions and risk management to attain higher
                competencies through advisory and cutting edge technological
                solutions built on extensive domain expertise.
              </div>
            </Grid> <div style={{ padding: "20px" }}></div>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.pagetitle}>Objective</div>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                NTS is propelled by the belief that rapid and fascinating
                developments in engineering, information technology, science,
                and analytics can be applied to find groundbreaking solutions in
                several key areas of banking and financial services. These
                solutions create competitive advantage & strengths through
                enhanced knowledge, better risk management, and a clearer vision
                of the dynamics that rule the financial service business.
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}
