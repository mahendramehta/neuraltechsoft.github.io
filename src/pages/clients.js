import React from "react"
// import BackgroundImage from "gatsby-background-image"
// import classNames from "classnames";
import { Parallax } from "react-parallax"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import b1 from "../images/background/Financial Services.jpg"
import globalStyles from "../styles/global"
import {  Grid } from "@material-ui/core"
import { graphql,} from "gatsby"
import Img from "gatsby-image"
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}
export default function Home({ data }) {
    const logos = data.logos.nodes
  const gclasses = globalStyles()

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div style={{ padding: "60px" }}></div>
      <Parallax bgImage={b1} strength={500}>
        <div className={gclasses.parallax}>
          <div style={insideStyles}>OUR CLIENTS</div>
        </div>
      </Parallax>
      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={8} sm={11} xs={11}>
          <Grid container spacing={10} justifyContent="center">
          {logos.map(logo => (
              //
              <Grid item key={logo.id} md={2} sm={4} xs={6}>
                <Img fluid={logo.childrenImageSharp[0].fluid} />{" "}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query Clients {
    logos: allFile(filter: {relativeDirectory: {eq: "companies"}}) {
        nodes {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
  }
`
