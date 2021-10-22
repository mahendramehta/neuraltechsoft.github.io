import React from "react"

import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import { Parallax } from "react-parallax"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"
import globalStyles from "../../../styles/global"
import "bootstrap/dist/css/bootstrap.min.css"
import { Grid } from "@material-ui/core"
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
  // const p1 = data.mehta
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
        <Grid item md={6} sm={8} xs={11}>
          <Grid container className={gclasses.gridpad} spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div
                style={{ textAlign: "center" }}
                className={gclasses.pagetitle}
              >
                Suchi Gupta: (Chief Consultant)
              </div>
            </Grid>
            {/* <Grid item md={12} sm={6} xs={12}>
              <BackgroundImage
                fluid={p1.childImageSharp.fluid}
                className={gclasses.imagebox}
              >
                {" "}
                <div className={gclasses.boxtitle}>{p1.name}</div>
              </BackgroundImage>
            </Grid> */}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                Suchi Gupta has primarily worked in the fields of risk
                management, hedging and stress testing. She has an experience of
                over 10 years in consulting and Training.. She has also
                independently developed a hedging product for low cost housing
                developers for protection against fluctuations in input material
                prices.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                As a part of a team that worked on developing a stress test
                framework for a Saudi Arabian bank, she developed stress tests
                for testing credit portfolios. She has also built a foreign
                exchange hedging process for an Indian company.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                She has developed the hedge accounting policy and procedures
                framework for a Saudi bank. Suchi has worked on projects with
                clients in India, Singapore and Saudi Arabia. She has conducted
                corporate training as well as taken lectures in Institutes and
                colleges in the field of risk and finance. She has conducted
                training in credit risk, risk management, financial markets and
                portfolio management.
              </div>
            </Grid>{" "}
            <Grid item md={12} sm={12} xs={12}>
              {" "}
              <div className={gclasses.paragraph}>
                Suchi Gupta is an Associate Chartered Accountant from the
                Institute of Chartered Accountants of India and has cleared CFA
                level III.
              </div>
            </Grid>{" "}
            {/**/}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}
