import { makeStyles } from "@material-ui/core/styles"
const globalStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
  parallax: {
    "@media (min-width: 0px)": {
      height: 350,
    },
    "@media (min-width: 768px)": {
      height: 500,
    },
  },
  nohoverbox:{
    height: "250px",
  },
  box: {
    height: "250px",
    borderRadius: "25px",
    color: "#FFF5FD",
    background: "#E65100",
    transitionDuration:"0.5s",
    "@media (min-width: 768px)": {
      height: "270px",
    },
    "&:hover": {
      background: "black",
      color:"green",
    },  
    position: "relative",
  },
  boxtitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 30,
    // color: "white",
    
    fontWeight: "bold",
  },
  boxcenter: {
    textAlign: "center",
    fontSize: 30,
    // color: "white",
    fontWeight: "bold",
  },
  imagebox: {
    height: "250px",
    color: "#FFF5FD",
    transitionDuration:"0.5s",
    "@media (min-width: 768px)": {
      height: "270px",
    },
    "&:hover": {
      background: "black",
      color:"green"
    },
    position: "relative",
  },
  paragraph: {
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "justify",
  },
  
  navspace:{
    padding:"30px"
  },
 
  gridpad: {
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  
  pagetitle: {
    fontSize: 30,
    color: "#004d40",
    fontWeight: "bold",
  },
  viewmore: {
   
    fontWeight: "bold",
    color: "#004d40", 
    "&:hover": {
      textDecoration: "underline",
    },
   
  },
}))

export default globalStyles
