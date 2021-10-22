import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles, IconButton } from "@material-ui/core"

import YouTubeIcon from "@material-ui/icons/YouTube"
// import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from "@material-ui/icons/Facebook"
// import TwitterIcon from "@material-ui/icons/Twitter"
import EmailIcon from '@material-ui/icons/Email';
export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Grid container justifyContent="center">
        <Grid item md={6}>
          <Grid container justifyContent='center'>
            <Grid item md={12} sm={12} xs={12}>
              <div className={classes.head}>Contacts</div>
            </Grid>
            <Grid item md={8} sm={8} xs={8}>
              <div>
                OFFICE ADDRESS : NEURAL TECHNOLOGIES AND SOFTWARE PVT. LTD.
                605-606, VAKRATUNDA CORPORATE PARK, OFF AAREY ROAD(VISHWESHWAR
                ROAD), GOREGAON (E), MUMBAI – 400063, INDIA OPEN HOURS: 9AM –
                6PM
              </div>
            </Grid>
            <Grid item md={8} sm={8} xs={8}>
              <div className={classes.email_and_phone}>
                Call us at  +91 22 3511 3372/73 
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container  direction='column' justifyContent='center' md={6} sm={12} xs={12}>
          <Grid  container  >
            <Grid item md={12} sm={12} xs={12}>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open("https://www.youtube.com/channel/UCuSHXeTlI_Cqn4TiL_JObXA")
                    }
                  >
                    <YouTubeIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open("https://www.linkedin.com/company/neuraltechsoft/")
                    }
                  >
                    <LinkedInIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open("https://www.facebook.com/Neural-Technologies-and-Softwares-101111415582613")
                    }
                  >
                    <FacebookIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                
                <Grid item>
                  <IconButton>
                    <EmailIcon
                      className={classes.icon}
                      onClick={() =>
                        window.open("mailto:helpdesk@neuraltechsoft.com")
                      }
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
const useStyles = makeStyles({
  head: {
    padding: "25px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    background: "#558B2F",
    color: "#FFF5FD",
    // paddingTop2550px",
  },
  email_and_phone: {
    fontWeight: "bold",
    // textAlign: "center",
    paddingTop: "25px",
    paddingBottom: "25px",
  },
  icon: {
    fill: "white",
    height: "50px",
    width: "50px",
  },
})
