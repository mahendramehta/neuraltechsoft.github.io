import * as React from "react"
import PropTypes from "prop-types"
import { Typography, Box, Grid, } from "@material-ui/core"
// import { AiOutlineClose } from "react-icons/ai"
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
          <Typography component={'span'} >{children}</Typography>
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

export default function Searchbar({ toggleDrawer }) {
  return (
    <>
      <Grid container style={{ paddingTop: "100px" }} justifyContent="center">
        <Grid item md={6} sm={12} xs={12}></Grid>
      </Grid>
    </>
  )
}
