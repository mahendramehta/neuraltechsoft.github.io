import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-parallax"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import b1 from "../../images/background/Our Insights.jpg"
import globalStyles from "../../styles/global"
import { Grid } from "@material-ui/core"
import { graphql, Link } from "gatsby"
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
  const hub = data.hub.childImageSharp.fluid
  const events = data.events.childImageSharp.fluid
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={b1} strength={500}>
        <div className={gclasses.parallax}>
          <div style={insideStyles}>OUR INSIGHTS</div>
        </div>
      </Parallax>
      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={8} sm={11} xs={11}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item md={6} sm={12} xs={12}>
              {" "}
              <Link to="/insights/events">
                <BackgroundImage fluid={events} className={gclasses.imagebox}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>Events </div>
                  </div>
                  {/* <div className={gclasses.boxtitle}></div> */}
                </BackgroundImage>
              </Link>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              {" "}
              <Link to="/insights/hubs">
                <BackgroundImage fluid={hub} className={gclasses.imagebox}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>Hubs</div>
                  </div>
                  {/* <div className={gclasses.boxtitle}> </div> */}
                </BackgroundImage>
              </Link>
            </Grid>
          </Grid>
          <div className={gclasses.gridpad}/>
          <Grid container spacing={5} >
            <Grid item md={12} sm={12} xs={12} className={gclasses.gridpad}>
              <div className={gclasses.pagetitle}> Upcoming events</div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Grid
                className={gclasses.box}
                container
                direction="column"
                justifyContent="center"
              >
                <Grid item>
                  {" "}
                  <div className={gclasses.boxcenter}>Event 1</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Grid
                className={gclasses.box}
                container
                direction="column"
                justifyContent="center"
              >
                <Grid item>
                  {" "}
                  <div className={gclasses.boxcenter}>Event 2</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query Insights {
    events: file(relativePath: { eq: "insights/Events.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hub: file(relativePath: { eq: "insights/Hub.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
