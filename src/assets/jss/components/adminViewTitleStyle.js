const adminViewTitleStyle = (theme) => ({
  titleWrapper: {
    marginBottom: "20px",
    "& h3": {
      color: theme.palette.green.main,
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "1rem"
      }
    },
    "& p": {
      color: "white",
      fontSize: "1rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px"
      }
    }
  }
})

export default adminViewTitleStyle
