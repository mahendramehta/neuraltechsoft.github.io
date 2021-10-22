import React from "react"

import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"

import BackgroundImage from "gatsby-background-image"

import { graphql,Link } from "gatsby"
import globalStyles from "../../../styles/global"
import "bootstrap/dist/css/bootstrap.min.css"
import { Grid } from "@material-ui/core"

export default function Home({ data }) {
  const p1 = data.person1
  const p2 = data.person2
  const p3 = data.person3
  const p4 = data.person4
  const p5 = data.person5
  const interns = data.interns.nodes
  console.log({ interns })
  // const classes = useStyles()
  const gclasses = globalStyles()
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
        <Grid item md={8} sm={11} xs={11}>
          {/* <div className={classes.pad}></div> */}
          <Grid container justifyContent="space-between" spacing={5}>
            <Grid item>
              <div className={gclasses.pagetitle}>Meet the Team</div>
            </Grid>
            <Grid item>
              <div></div>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item md={3} sm={6} xs={12}>
              {" "}
              <Link to="Mahendra Mehta">
              <BackgroundImage
                fluid={p1.childImageSharp.fluid}
                className={gclasses.imagebox}
              >
                {" "}
                <div className={gclasses.boxtitle}>{p1.name}</div>
              </BackgroundImage>
              </Link>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
            <Link to="Satish Shinde">
              <BackgroundImage
                fluid={p2.childImageSharp.fluid}
                className={gclasses.imagebox}
              >
                {" "}
                <div className={gclasses.boxtitle}>{p2.name}</div>
              </BackgroundImage></Link>
            </Grid>
            <Grid item md={3} sm={6} xs={12}><Link to="Vikram Kuriyan">
              <BackgroundImage
                fluid={p3.childImageSharp.fluid}
                className={gclasses.imagebox}
              >
                {" "}
                <div className={gclasses.boxtitle}>{p3.name}</div>
              </BackgroundImage></Link>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
            
              <BackgroundImage
                fluid={p4.childImageSharp.fluid}
                className={gclasses.imagebox}
              >
                {" "}
                <div className={gclasses.boxtitle}>{p4.name}</div>
              </BackgroundImage>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
            <Link to="Suchi Gupta">
              <BackgroundImage
                fluid={p5.childImageSharp.fluid}
                className={gclasses.imagebox}
              >
                {" "}
                <div className={gclasses.boxtitle}>{p5.name}</div>
              </BackgroundImage></Link>
            </Grid>
          </Grid>
          <div className={gclasses.gridpad}></div>
          <Grid container spacing={5} >
            <Grid item md={12} sm={12} xs={12}>
              <div className={gclasses.pagetitle}>Our Interns</div>
            </Grid>
            {interns.map(intern => (
              //
              <Grid key={intern.id} item md={3} sm={6} xs={12}>
                <BackgroundImage
                  fluid={intern.childrenImageSharp[0].fluid}
                  className={gclasses.imagebox}
                >
                  {" "}
                  <div className={gclasses.boxtitle}>{intern.name}</div>
                </BackgroundImage>
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
  query OurPeople {
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

    interns:  allFile(filter: {relativeDirectory: {eq: "Team/Interns"}}) {
      nodes {
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          id
        }
        name
      }
    }
  }
`
