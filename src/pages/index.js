import React from "react"
import { Parallax } from "react-parallax"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import v1 from "../images/background/v3.gif"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import globalStyles from "../styles/global"
import "bootstrap/dist/css/bootstrap.min.css"
import { Grid } from "@material-ui/core"

const insideStyles = {
  fontWeight:"bold",
  padding: 20,
  // background: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize:35,
  color:"green"
  
}
export default function Home({ data }) {
  const gclasses = globalStyles()
  const p1 = data.person1
  // const p2 = data.person2
  const p3 = data.person3
  const p4 = data.person4
  const p5 = data.person5
  const algo = data.algo.childImageSharp.fluid
  const ac = data.ac.childImageSharp.fluid
  const dt = data.dt.childImageSharp.fluid
  const ndp = data.ndp.childImageSharp.fluid
  const pcb = data.pcb.childImageSharp.fluid
  const logos = data.logos.nodes
  console.log({ logos })

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={v1} strength={500}>
        <div className={gclasses.parallax}>
          <Link className={gclasses.link} to="The nine-dot puzzle">
            {" "}
            <div style={insideStyles}>The Nine Dot Puzzle</div>
          </Link>
        </div>
      </Parallax>

      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item md={8} sm={11} xs={11}>
          <Grid container spacing={2}>
            <Grid item md={8} sm={6} xs={12}>
              {" "}
              <Link to="/Algorithmic Trading">
                <BackgroundImage fluid={algo}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>
                      Algorithmic Trading{" "}
                    </div>{" "}
                  </div>
                </BackgroundImage>
              </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              {" "}
              <Link to="/ANALYTICS CONSULTING & STATISTICAL COMPUTING">
                <BackgroundImage fluid={ac}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>
                      Analytical Consulting & Statistical Computing
                    </div>{" "}
                  </div>
                </BackgroundImage>
              </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              {" "}
              <Link to="/Digital transformation of Enterprise Architecture">
                <BackgroundImage fluid={dt}>
                  <div className={gclasses.imagebox}>
                    <div
                      className={gclasses.boxtitle}
                    >
                      Digital Transformation{" "}
                    </div>{" "}
                  </div>
                </BackgroundImage>
              </Link>
            </Grid>
            <Grid item md={8} sm={6} xs={12}>
              {" "}
              <Link to="/Present’s condition of Banks and NBFCs">
                <BackgroundImage fluid={pcb}>
                  <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>
                      Present condition of Banks & NBFCs
                    </div>{" "}
                  </div>
                </BackgroundImage>
              </Link>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              {" "}
              <Link to="The nine-dot puzzle">
                <BackgroundImage fluid={ndp}>
                  <div className={gclasses.imagebox}>
                    <div
                    
                      className={gclasses.boxtitle}
                    >
                      The Nine Dot Puzzle
                    </div>{" "}
                  </div>
                </BackgroundImage>
              </Link>
            </Grid>

            <Grid item md={8} sm={12} xs={12}>
              <Link className={gclasses.link} to="projects">
                <Grid
                  container
                  className={gclasses.box}
                  direction="column"
                  justifyContent="center"
                >
                  <Grid item>
                    {/* <div className={gclasses.imagebox}> */}
                      <div className={gclasses.boxcenter}>
                        PROJECTS
                      </div>{" "}
                    {/* </div> */}
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
          <div className={gclasses.gridpad}></div>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item>
              <div className={gclasses.pagetitle}>Meet the Team</div>
            </Grid>
            <Grid item>
              <Link to="/culture/ourpeople/">
                <div className={gclasses.viewmore}>Our people</div>{" "}
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3} sm={6} xs={12}>
              {" "}
              <BackgroundImage className={gclasses.imagebox} fluid={p1.childImageSharp.fluid}>
              <div className={gclasses.boxtitle}>{p1.name}</div>{" "}      
              </BackgroundImage>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <BackgroundImage className={gclasses.imagebox} fluid={p3.childImageSharp.fluid}>
                  <div className={gclasses.boxtitle}>{p3.name}</div>{" "}         
              </BackgroundImage>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <BackgroundImage className={gclasses.imagebox} fluid={p4.childImageSharp.fluid}>
              <div className={gclasses.boxtitle}>{p4.name}</div>
                   
                 
                {/* </div> */}
              </BackgroundImage>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <BackgroundImage className={gclasses.imagebox} fluid={p5.childImageSharp.fluid}>
                {/* <div className={gclasses.peoplebox}> */}
                  <div className={gclasses.boxtitle}>{p5.name}</div>{" "}
                {/* </div> */}
              </BackgroundImage>
            </Grid>
          </Grid>
          <div className={gclasses.gridpad}></div>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item>
              <div className={gclasses.pagetitle}>Our Clients</div>
            </Grid>
            <Grid item>
              <Link to="/clients">
                <div className={gclasses.viewmore}>View All</div>{" "}
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={5} justifyContent="center">
            {logos.map(logo => (
              //
              <Grid item key={logo.id} md={2} sm={2} xs={3}>
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
  query HomePage {
    person1: file(
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
    person2: file(
      relativePath: { eq: "Team/Main/Dr. Satish Shinde/Dr. Satish Shinde.jpeg" }
    ) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person3: file(
      relativePath: {
        eq: "Team/Main/Dr. Vikram Kuriyan/Dr. Vikram Kuriyan.jpeg"
      }
    ) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person4: file(
      relativePath: { eq: "Team/Main/Rajat Bhatia/Rajat Bhatia.jpeg" }
    ) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    person5: file(
      relativePath: { eq: "Team/Main/Suchi Gupta/Suchi Gupta.jpeg" }
    ) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    algo: file(relativePath: { eq: "projects/front page/Algorithmic Trading.jpg" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ac: file(
      relativePath: {
        eq: "projects/front page/Analytical Consulting Statistical Computing.jpg"
      }
    ) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dt: file(relativePath: { eq: "projects/front page/Digital Transformation.jpg" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pcb: file(
      relativePath: { eq: "projects/front page/Present condition of Banks NBFCs.jpg" }
    ) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ndp: file(relativePath: { eq: "projects/front page/The nine dot puzzle.jpg" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logos: allFile(filter: { relativeDirectory: { eq: "companies/Main" } }) {
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
