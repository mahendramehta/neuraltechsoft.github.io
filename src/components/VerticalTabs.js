import * as React from "react"
import PropTypes from "prop-types"
import { Tabs, Tab, Typography, Box, Grid, IconButton } from "@material-ui/core"
import { AiOutlineClose } from "react-icons/ai"
import globalStyles from "../styles/global"
import { Link } from "gatsby"
import FinancialIndustries from "../pdfs/Projects/Stress Testing.pdf"
import Education from "../pdfs/Projects/EDTUBE DECK FINAL STARTUPINDIA.pdf"
import HumanResources from "../pdfs/Projects/mPowerU.pdf"
import DataScience from "../pdfs/Projects/Analytics Program.pdf"
import Algotrading from "../pdfs/AlgoTrading Brochure.pdf"
// Education: Edtube, Human Resources: mPowerU, Data Science: Analytics Program.
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs({ orientation, toggleDrawer }) {
  const [value, setValue] = React.useState(0)
  const gclasses = globalStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // console.log({ logo})

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item md={8} sm={12} xs={12}>
          <Grid container justifyContent="space-between">
            <Grid item></Grid>
            <Grid item>
              <div>
                <IconButton onClick={toggleDrawer("top", false)}>
                  <AiOutlineClose />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={4}>
              <Tabs
                orientation={orientation}
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "black" }}
                centered
              >
                <Tab label="OUR EXPERTISE" {...a11yProps(0)} />
                <Tab label="OUR INSIGHTS" {...a11yProps(1)} />
                <Tab label="OUR CULTURE" {...a11yProps(2)} />
              </Tabs>
            </Grid>
            <Grid item md={8}>
              <TabPanel value={value} index={0}>
                {/* <Grid container justifyContent="flex-end" style={{background:'black'}}> */}
                {/* <Grid  item md={12} style={{background:'red'}}> */}
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} xs={12}>
                    <Link className={gclasses.link} to="/expertise">
                      <div style={{ fontWeight: "bold" }}>OUR EXPERTISE</div>
                    </Link>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <div style={{ fontWeight: "bold" }}>*Industries*</div>
                  </Grid>
                  <Grid item>
                    <a
                      href={FinancialIndustries}
                      className={gclasses.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>Financial Services</div>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href={Education}
                      className={gclasses.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>Education</div>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href={HumanResources}
                      className={gclasses.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>Human Resources</div>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href={DataScience}
                      className={gclasses.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>Data Science</div>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href={Algotrading}
                      className={gclasses.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>Algo-Trading</div>
                    </a>
                  </Grid>
                </Grid>
                {/* </Grid> */}
                {/* </Grid> */}
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} xs={12}>
                    <Link className={gclasses.link} to="/insights">
                      <div style={{ fontWeight: "bold" }}>OUR INSIGHTS</div>
                    </Link>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                   <Link to="/The nine-dot puzzle" className={gclasses.link}> <div>The Nine Dot Puzzle</div></Link>
                  </Grid>
                  <Grid item>
                    <Link className={gclasses.link} to="/insights/events">
                      <div>Events</div>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link className={gclasses.link} to="/insights/hubs">
                      <div>Hubs</div>{" "}
                    </Link>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} xs={12}>
                    <Link className={gclasses.link} to="/culture">
                      <div style={{ fontWeight: "bold" }}>OUR CULTURE</div>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link className={gclasses.link} to="/culture/ourpeople">
                      <div>Our people</div>{" "}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link className={gclasses.link} to="/culture/ourvalues">
                      <div>Our values</div>{" "}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link className={gclasses.link} to="/culture/mvo">
                      <div>Mission, Vision and Objective</div>{" "}
                    </Link>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
