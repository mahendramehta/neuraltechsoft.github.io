import * as React from "react"
import { Link, graphql } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { makeStyles, Grid } from "@material-ui/core"
const BlogPostTemplate = ({ data, location }) => {
  console.log({ data })
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <Grid
        className={classes.pad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={8} sm={11} xs={11}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item md={12} sm={6} xs={12}>
              <div className={classes.head}>{post.frontmatter.title}</div>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <div className={classes.date}>{post.frontmatter.date}</div>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <div className={classes.author}>{post.frontmatter.author}</div>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
              {/* <div>{post.frontmatter.date}</div> */}
            </Grid>
          </Grid>{" "}
          <Grid container  justifyContent='space-between'>
            <Grid item md={6} sm={6} xs={6}>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              {next && (
                <Link to={next.fields.slug}  rel="next">
                 <div className={classes.right}> {next.frontmatter.title} →</div>
                </Link>
              )}
            </Grid>
          </Grid>{" "}
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}
const useStyles = makeStyles({
  head: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#7CB342",
    textAlign: "center",
  },
  pad: {
    paddingTop: "150px",
  },
  date:{
    textAlign:'right'
  },
 
  right:{
    textAlign:'right',

  },
})
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
