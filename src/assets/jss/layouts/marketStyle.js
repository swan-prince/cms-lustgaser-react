const marketStyle = (theme) => ({
  contentSection: {
    minHeight: "calc(100vh - 330px)",
    background: "#0F1317",
    [theme.breakpoints.down('sm')]: {
      minHeight: "calc(100vh - 200px)",
    }
  }
})

export default marketStyle

