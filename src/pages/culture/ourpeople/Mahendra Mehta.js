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
export default function Home({ data }) {
  const gclasses = globalStyles()
  const p1 = data.mehta
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
                Dr Mahendra Mehta: (CEO & MD)
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
                Dr. Mahendra Mehta is the managing director and CEO of
                NeuralTechSoft, a company based in Mumbai (India). For over two
                and half decades, he has been involved in financial consultancy,
                training and analytics & application of machine learning
                techniques in solving problems related to forecasting of
                financial variables. He has taught Treasury Business & Products,
                Risk Management, Basel Accord, Stress Testing and machine
                learning techniques in more than 25 countries around the world.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                Prior to starting NeuralTechSoft, he worked with Citibank for
                over 14 years in several countries as head of analytics and head
                of derivatives. Before joining Citibank, he worked with
                Hindustan Aeronautics Limited, Hyderabad, India where he was
                involved in the development of Avionics systems for fighter
                aircrafts.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                He was a guest faculty at Swiss Federal Institute of Technology,
                Zurich, Switzerland and at London Business School. He has
                contributed to the book entitled “Neural Networks in the Capital
                Markets” published by Wiley & sons in 1995.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                He designed and delivered a Data science program for S P Jain
                School of Global management. He studied Electrical Engineering
                specializing in Control and Estimation theory. He completed his
                Ph.D. in “Tracking of Multiple targets using Airborne Radar”
                from Indian Institute of Technology, Mumbai, India
              </div>
            </Grid>{" "}
            {/**/}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}
export const query = graphql`
  query Mehta {
    mehta: file(
      relativePath: {
        eq: "Team/Main/Dr. Mahendra Mehta/Dr. Mahendra Mehta.jpeg"
      }
    ) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
