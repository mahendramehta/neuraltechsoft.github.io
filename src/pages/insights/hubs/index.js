import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-parallax"
import { graphql, Link } from "gatsby"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import b1 from "../../../images/background/Our Insights.jpg"
import globalstyle from "../../../styles/global"
import {Grid } from "@material-ui/core"
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}

export default function Home({ data }) {

  const gclasses = globalstyle()
  const blogs = data.blogs.edges
  console.log({ blogs })
  const temp = blogs[0]
  const t2 = temp.node.frontmatter.thumb.childImageSharp.fluid
  console.log({ t2 })

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={b1} strength={500}>
        <div className={gclasses.parallax}>
          <div style={insideStyles}>Hub</div>
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
            {blogs.map(blog => (
              <Grid key={blog.id} item md={6} sm={6} xs={12}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={blog.node.fields.slug}
                >
                  {" "}
                  <BackgroundImage
                    fluid={blog.node.frontmatter.thumb.childImageSharp.fluid}
                  >
                    <div className={gclasses.imagebox}>
                      <div className={gclasses.boxtitle}>
                      {blog.node.frontmatter.title}
                      </div>{" "}
                    </div>
                  </BackgroundImage>
                  {/* <div>
                    <Grid
                      container
                      className={gclasses.box}
                      direction="column"
                      justifyContent="space-evenly"
                    >
                      <Grid item className={classes.boxtitle}>
                        {blog.node.frontmatter.title}
                      </Grid>
                      <Grid item className={classes.boxauthor}>
                        {blog.node.frontmatter.author}
                      </Grid>
                      <Grid item className={classes.boxdate}>
                        {blog.node.frontmatter.date}
                      </Grid>
                    </Grid>
                  </div> */}
                </Link>
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
  query Blogs {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {}
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            author
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
