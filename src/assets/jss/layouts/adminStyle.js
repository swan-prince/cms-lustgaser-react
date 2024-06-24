import {
  drawerWidth,
  drawerMiniWidth,
  transition,
  containerFluid
} from "assets/jss/mainStyle"

const adminStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    background: "#0F1317",
    "&:after": {
      display: "table",
      clear: "both",
      content: '" "'
    }
  },
  mainPanel: {
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    background: "#0F1317"
  },
  content: {
    marginTop: "70px",
    padding: "30px 24px",
    minHeight: "calc(100vh - 123px)",
    [theme.breakpoints.down('xs')]: {
      padding: "30px 1rem",
      marginTop: "1.5rem"
    }
  },
  container: { ...containerFluid },
  map: {
    marginTop: "70px"
  },
  mainPanelSidebarMini: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerMiniWidth}px)`
    }
  },
  mainPanelWithPerfectScrollbar: {
    overflow: "hidden !important"
  }
})

export default adminStyle
