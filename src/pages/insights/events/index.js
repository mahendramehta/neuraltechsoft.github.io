import React from "react"
// import classNames from "classnames";
import { Parallax } from "react-parallax"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import b1 from "../../../images/background/Our Insights.jpg"
import globalStyles from "../../../styles/global"
import {Grid } from "@material-ui/core"
// import { Link } from "gatsby"
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}
export default function Home() {
  
const gclasses = globalStyles()
  return (
    <div>
      <Navbar />
      <div className={gclasses.navspace}></div>
      <Parallax bgImage={b1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>EVENTS</div>
        </div>
      </Parallax>
      <Grid className={gclasses.gridpad} container justifyContent="center">
        <Grid item md={8} sm={11} xs={11}>
          <Grid container spacing={5} justifyContent="center">
            {/* 1 */}
            <Grid  item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
              
                src="https://www.youtube.com/embed/_2Y-DIDL60s" 
                title="Concept of Forward Rate"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            {/* 2 */}
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
              
                src="https://www.youtube.com/embed/vjOyiOckams" 
                title="Concept of Perpetuity"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
              
                src="https://www.youtube.com/embed/DXv824SuIBY" 
                title="Concept of Present Value"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            {/* 4 */}
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
                src="https://www.youtube.com/embed/fU6MO9SlN4o" 
                title="Discount Rate vs Interest Rate"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
                src="https://www.youtube.com/embed/oJshR0fvrmA" 
                title="Fixed Income Bonds & Elements of Bonds"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            {/* 6 */}
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
                src="https://www.youtube.com/embed/ZyD-edDY7a4" 
                title="Term Structure of Interest Rates"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
                src="https://www.youtube.com/embed/FBoV2BeDGcQ" 
                title="The World of Big Data Bloomberg TV Interview"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            {/* 8 */}
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
                src="https://www.youtube.com/embed/E7dNyaGuKj8" 
                title="Time Value of Money"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <iframe
              className={gclasses.imagebox}
                src="https://www.youtube.com/embed/_BABNEPuhlA" 
                title="What is Annuity"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Grid>
            {/* 10 */}
            

          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}
