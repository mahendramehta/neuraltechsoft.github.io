import React from "react"
import BackgroundImage from "gatsby-background-image"
// import classNames from "classnames";
import { Parallax } from "react-parallax"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import b1 from "../images/background/Projects.jpg"
import globalStyles from "../styles/global"
import { Grid } from "@material-ui/core"
import { graphql } from "gatsby"
import testing from "../pdfs/Projects/Analytics Program.pdf"
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}
export default function Home({ data }) {
  console.log({ data })
  console.log({ testing })
 var dict={}
 data.projectImages.nodes.map(pi => {
   dict[pi.name]=pi.childImageSharp.fluid
 })
 dict['Risk Management Policy Review'] = dict["Risk Management"]
 dict['Risk Management Framework'] = dict["Risk Management"]
 dict['Pillar II Implementation'] = dict["ICAAP"]
 dict['Treasury Process Reengineering'] = dict["Treasury Risk Audit"]
 
 console.log(dict)
  const gclasses = globalStyles()

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={b1} strength={500}>
        <div className={gclasses.parallax}>
          <div style={insideStyles}>OUR PROJECTS</div>
        </div>
      </Parallax>
      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={8} sm={11} xs={11}>
          <Grid container spacing={2} justifyContent="center">
            {data.projects.nodes.map(project => (
              <Grid item key={project.id} md={4} sm={6} xs={12}>
                <a href={project.publicURL} className={gclasses.link}>
                {/* {project.name} */}
                <BackgroundImage fluid={dict[project.name]}>
                  <div className={gclasses.imagebox}>
                    <div  className={gclasses.boxtitle}>
                      {project.name}
                    </div>{" "}
                  </div>
                </BackgroundImage>
                  {/* <Grid
                    className={gclasses.box}
                    container
                    direction="column"
                    justifyContent="center"
                  >
                    <Grid item>
                      {" "}
                      <div className={gclasses.boxcenter}>{project.name}</div>
                    </Grid>
                  </Grid> */}
                </a>
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
  query Projects {
    projects: allFile(
      filter: {
        extension: { eq: "pdf" }
        relativeDirectory: { eq: "Projects" }
      }
    ) {
      nodes {
        name
        id
        publicURL
      }
    }
    projectImages: allFile(filter: { relativeDirectory: { eq: "projects/projects" } }) {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
