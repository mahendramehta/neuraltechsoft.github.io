import React, { useState,} from "react"
// import BackgroundImage from "gatsby-background-image"
import emailjs from "emailjs-com"
import { Parallax } from "react-parallax"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import b1 from "../images/background/Contact Us.jpg"
import globalStyles from "../styles/global"
import { Grid, TextField, Button } from "@material-ui/core"

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}

const reasons = [
  {
    value: "Alumni Inquiries",
    label: "Alumni Inquiries",
  },
  {
    value: "Career/Recruitment",
    label: "Career/Recruitment",
  },
  {
    value: "Media Reltions",
    label: "Media Reltions",
  },
  {
    value: "Request for Proporsal",
    label: "Request for Proporsal",
  },
]
export default function Home() {
  // const logos = data.logos.nodes
  const [searchParameters, setSearchParameters] = useState({})
  const gclasses = globalStyles()
  const handleSearchParameterChange = e => {
    setSearchParameters({
      ...searchParameters,
      [e.target.name]: e.target.value,
    })
    console.log(searchParameters)
  }
  function sendEmail() {

    emailjs
    
      .send("service_woy976w", "template_v25uirb", searchParameters, "user_kQnBf97XX0mJQXIuZpsrL")
      .then(
        result => {
          console.log(result.txt)
          
        },
        error => {
          console.log(error.txt)
        }
      )
      setSearchParameters({})
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div style={{ padding: "60px" }}></div>
      <Parallax bgImage={b1} strength={500}>
        <div className={gclasses.parallax}>
          <div style={insideStyles}>CONTACT US</div>
        </div>
      </Parallax>
      <Grid
        className={gclasses.gridpad}
        container
        justifyContent="center"
        spacing={5}
      >
        <Grid item md={8} sm={11} xs={11}>
          <Grid item md={6}>
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <div className={gclasses.pagetitle}>Reach out to us</div>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  required
                  label="Name"
                  name="name"
                  onChange={handleSearchParameterChange}
                  value={searchParameters.name}
                ></TextField>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  required
                  label="Email id"
                  name="email"
                  onChange={handleSearchParameterChange}
                  value={searchParameters.email}
                ></TextField>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  select
                  fullWidth
                  required
                  label="Reason"
                  name="reason"
                  value={searchParameters.reason}
                  onChange={handleSearchParameterChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your reason"
                  variant="filled"
                >
                  {reasons.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  multiline
                  fullWidth
                  required
                  label="Subject"
                  name="subject"
                  value={searchParameters.subject}
                  onChange={handleSearchParameterChange}
                  variant="filled"
                ></TextField>
              </Grid>{" "}
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  multiline
                  fullWidth
                  required
                  label="Message"
                  name="message"
                  value={searchParameters.message}
                  onChange={handleSearchParameterChange}
                  variant="filled"
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} justifyContent="center">
                <div align="center">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={sendEmail}
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}
