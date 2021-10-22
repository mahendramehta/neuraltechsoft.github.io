import React from "react"
import clsx from "clsx"
import {
  makeStyles,
  SwipeableDrawer,
  Grid,
  IconButton,
  Hidden,
} from "@material-ui/core"
import VerticalTabs from "./VerticalTabs"
// import Searchbar from "./Searchbar"

import { MdMenu } from "react-icons/md"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const useStyles = makeStyles({
  logo:{
    width:'200px',
    // margin: "-35px 00px 0px",
  },
  list: {
    width: 250,
  },
  links:{   
    color:"black",
    textDecoration:'none',

  },
  fullList: {
    width: "auto",
  },
  icon: {
    margin: "-13px 00px 0px",
    color: "black",
  },
  container: {
    zIndex: 1300,
    background:'white',
    position: "fixed",
    width:"100%",
    paddingTop: "20px",
    top:0,
    // height:"300px"
  },
})

export default function SwipeableTemporaryDrawer() {
  const data=useStaticQuery(graphql`query Navbar {
    logo: file(relativePath: { eq: "Logo/logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  
}
  `)
  const f=data.logo.childImageSharp.fluid
  console.log({f})
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
  })
  // const [searchstate, setSearchState] = React.useState({
  //   top: false,
  // })
  const [horstate, setHorState] = React.useState({
    top: false,
  })
  const toggleHorDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setHorState({ ...state, [anchor]: open })
  }
  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  // const toggleSearch = (anchor, open) => event => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return
  //   }

  //   setSearchState({ ...state, [anchor]: open })
  // }
  const horlist = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      // style={{ paddingTop: "30px" }}
    >
      <VerticalTabs orientation="horizontal" toggleDrawer={toggleHorDrawer} />
    </div>
  )
  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      // style={{ paddingTop: "30px" }}
    >
      <VerticalTabs  orientation="vertical" toggleDrawer={toggleDrawer} />
    </div>
  )
  // const search = anchor => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === "top" || anchor === "bottom",
  //     })}
  //     role="presentation"
  //     //   onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //     style={{ paddingTop: "50px" }}
  //   >
  //     <Searchbar toggleDrawer={toggleDrawer} />
  //   </div>
  // )

  return (
    <div>
      <div className={classes.container}>
        <Grid container justifyContent="center" >
          <Grid item md={8} sm={11} xs={11}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link to="/">
                  <div className={classes.logo}><Img fluid={f}/></div>
                </Link>
              </Grid>
              <Grid item>
                {/* Laptop View */}
                <Hidden smDown>
                  <Grid container spacing={5}>
                    <Grid item>
                      <Link to="/expertise" className={classes.links}>
                        <div >OUR EXPERTISE</div>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/insights" className={classes.links}>
                        <div >OUR INSIGHTS</div>{" "}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/culture" className={classes.links}>
                        <div >OUR CULTURE</div>{" "}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="https://www.iset.co.in/" className={classes.links}>
                        <div > ISET</div>{" "}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/contact" className={classes.links}>
                        <div >CONTACT US</div>{" "}
                      </Link>
                    </Grid>
                    
                    {/* <Grid item>
                      <div>
                        <IconButton
                          className={classes.icon}
                          onClick={toggleSearch("top", true)}
                        >
                          <BsSearch style={{ fontSize: 20, color: "black" }} />
                        </IconButton>
                      </div>
                    </Grid> */}
                    <Grid item display="flex">
                      <div>
                        <IconButton
                          className={classes.icon}
                          onClick={toggleDrawer("top", true)}
                        >
                          <MdMenu />
                        </IconButton>
                       
                      </div>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid container>
                    <Grid item>
                      <div>
                        <IconButton
                          className={classes.icon}
                          onClick={toggleHorDrawer("top", true)}
                        >
                          <MdMenu />
                        </IconButton>
                       
                      </div>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* <VerticalTabs/> */}
      {/* Menu */}
      <SwipeableDrawer
     
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
        hysteresis={1.0}
        style={{ zIndex: 1350 }}
      >
        {list("top")}
      </SwipeableDrawer>
      <SwipeableDrawer
       
        anchor={"top"}
        open={horstate["top"]}
        onClose={toggleHorDrawer("top", false)}
        onOpen={toggleHorDrawer("top", true)}
        hysteresis={1.0}
        style={{ zIndex: 1350 }}
      >
        {horlist("top")}
      </SwipeableDrawer>
    </div>
  )
}
