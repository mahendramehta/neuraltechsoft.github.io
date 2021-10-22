import React from "react"
import BackgroundImage from "gatsby-background-image"
import algotrading from "../../pdfs/AlgoTrading Brochure.pdf"
import boursegame from "../../pdfs/Bourse Game Brochure .pdf"
import dataanalytics from "../../pdfs/Data Analytics.pdf"
import profesionalTraining from "../../pdfs/Professional Program .pdf"
import consulting from "../../pdfs/Consulting Brochure.pdf"
import { Parallax } from "react-parallax"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import b1 from "../../images/background/Our expertise.jpg"
import { graphql} from "gatsby"
import globalStyles from "../../styles/global"
import { Grid, Paper } from "@material-ui/core"
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

  console.log({ data })
  const con = data.con.childImageSharp.fluid
  const pp = data.pp.childImageSharp.fluid
  const da = data.da.childImageSharp.fluid
  const at = data.at.childImageSharp.fluid

  const bg = data.bg.childImageSharp.fluid

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={b1} strength={1000}>
        <div className={gclasses.parallax}>
          <div style={insideStyles}>OUR EXPERTISE</div>
        </div>
      </Parallax>

      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={8} sm={11} xs={11}>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <a target="_blank" href={consulting} rel="noreferrer">
                <Paper className={gclasses.paper} elevation={10}>
                  <BackgroundImage fluid={con}>
                    {" "}
                    <div className={gclasses.imagebox}>
                      <div className={gclasses.boxtitle}>Consulting</div>
                    </div>
                  </BackgroundImage>
                </Paper>
              </a>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <a target="_blank" href={profesionalTraining}  rel="noreferrer">
                <BackgroundImage fluid={pp}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>
                      Professional Programs
                    </div>
                  </div>
                  {/* <div style={{color:"#1A237E"}} className={gclasses.boxtitle}> </div> */}
                </BackgroundImage>
              </a>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <a href={dataanalytics} target="_blank"  rel="noreferrer">
                <BackgroundImage fluid={da}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>Data Analytics</div>
                  </div>
                  {/* <div className={gclasses.boxtitle}></div> */}
                </BackgroundImage>
              </a>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <a href={boursegame} target="_blank"  rel="noreferrer">
                <BackgroundImage fluid={bg}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>Bourse Game</div>
                  </div>
                  {/* <div style={{color:"#1A237E"}} className={gclasses.boxtitle}> </div> */}
                </BackgroundImage>
              </a>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <a  href={algotrading} target="_blank"  rel="noreferrer">
                <BackgroundImage fluid={at}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>Algo-Trading</div>
                  </div>
                  {/* <div style={{color:"#1A237E"}}className={gclasses.boxtitle}></div> */}
                </BackgroundImage>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query Expertise {
    at: file(relativePath: { eq: "expertise/Algo Trading.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg: file(relativePath: { eq: "expertise/Bourse Game.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    con: file(relativePath: { eq: "expertise/Consulting.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    da: file(relativePath: { eq: "expertise/Data Analytics.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pp: file(relativePath: { eq: "expertise/Professional programs.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
