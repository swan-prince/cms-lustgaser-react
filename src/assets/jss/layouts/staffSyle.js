const staffStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    minHeight: "100vh",
    background: "#0F1317",
    "&:after": {
      display: "table",
      clear: "both",
      content: '" "'
    }
  },
  contentsWrapper: {
    padding: "40px 80px",
    [theme.breakpoints.down('sm')]: {
      padding: "1.5rem 1.5rem"
    }
  }
})

export default staffStyle
