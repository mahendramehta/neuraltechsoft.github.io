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
        <div className={gclasses.parallax}>
          <div style={insideStyles}>Our Values</div>
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
              <div className={gclasses.pagetitle}>Values</div>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                Neural Technologies & Software Pvt. Ltd. (NTS) is an independent
                training and consulting organization that was established in
                October 2000 by leaders in financial analytics and IT consulting
                from various prestigious financial, academic, and business
                institutions. Our business principles combine the best
                consulting capabilities to deliver high quality, high value, and
                cost-effective solutions that exceed clients’ needs and
                expectations, keeping in mind long-term relationships.
              </div>
            </Grid>{" "}
            <div style={{ padding: "20px" }}></div>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.pagetitle}>
                4 Pillars of NeuralTechSoft
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7} sm={11} xs={11}>
          <Grid container spacing ={5}>
            <Grid item md={6} sm={6} xs={12}>
              {/* <a href={project.publicURL} className={gclasses.link}> */}
              <Grid
                className={gclasses.nohoverbox}
                style={{ background: "#558B2F" }}
                container
                direction="column"
                justifyContent="center"
              >
                <Grid item>
                  {" "}
                  <div className={gclasses.boxcenter}>Trust</div>
                </Grid>
              </Grid>
              {/* </a> */}
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              {/* <a href={project.publicURL} className={gclasses.link}> */}
              <Grid
                className={gclasses.nohoverbox}
                style={{ background: "#FDD835" }}
                container
                direction="column"
                justifyContent="center"
              >
                <Grid item>
                  {" "}
                  <div className={gclasses.boxcenter}>Integrity</div>
                </Grid>
              </Grid>
              {/* </a> */}
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              {/* <a href={project.publicURL} className={gclasses.link}> */}
              <Grid
                className={gclasses.nohoverbox}
                style={{ background: "#1976D2" }}
                container
                direction="column"
                justifyContent="center"
              >
                <Grid item>
                  {" "}
                  <div className={gclasses.boxcenter}>Satisfaction</div>
                </Grid>
              </Grid>
              {/* </a> */}
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              {/* <a href={project.publicURL} className={gclasses.link}> */}
              <Grid
                className={gclasses.nohoverbox}
                style={{ background: "#D32F2F" }}
                container
                direction="column"
                justifyContent="center"
              >
                <Grid item>
                  {" "}
                  <div className={gclasses.boxcenter}>Reliability</div>
                </Grid>
              </Grid>
              {/* </a> */}
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

