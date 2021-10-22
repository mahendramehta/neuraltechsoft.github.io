import React from "react"
// import classNames from "classnames";
import { Parallax } from "react-parallax"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Link,graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import b1 from "../../images/background/Human Resources.jpg"
import globalStyles from "../../styles/global"
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

  const gclasses=globalStyles()
  console.log({ data })

  const mvo = data.mvo.childImageSharp.fluid
  const values = data.values.childImageSharp.fluid
  const people = data.people.childImageSharp.fluid
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={b1} strength={500}>
        <div  className={gclasses.parallax}>
          <div style={insideStyles}>OUR CULTURE</div>
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
            <Grid item md={6} sm={12} xs={12}>
            <Link to="ourpeople"style={{ textDecoration: 'none' }}>
              <BackgroundImage fluid={people} >
              <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>Our People</div>
                  </div>
              </BackgroundImage>
            </Link>
            </Grid>
            <Grid item  md={6} sm={12} xs={12}>
            <Link to="values"style={{ textDecoration: 'none' }}>
              <BackgroundImage fluid={values} >
              <div className={gclasses.imagebox}>
                    <div className={gclasses.boxtitle}>Our Values</div>
                  </div>
              </BackgroundImage></Link>
            </Grid>
            <Grid item  md={6} sm={12} xs={12}>
            <Link to="mvo"style={{ textDecoration: 'none' }}>
              <BackgroundImage
                fluid={mvo}
                className={gclasses.imagebox}
              ><div className={gclasses.imagebox}>
              <div className={gclasses.boxtitle}>Mission, Vision and Objective
</div>
            </div></BackgroundImage></Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query Culture {
    mvo: file(relativePath: { eq: "culture/Mission, Vision & Objective.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    people: file(relativePath: { eq: "culture/Our Team.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    values: file(relativePath: { eq: "culture/Values.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
