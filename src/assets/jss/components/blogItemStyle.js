const blogItemStyle = theme => ({
  blogItem: {
    [theme.breakpoints.down('xs')]: {
      display: "flex"
    }
  },
  contents: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {      
      width: "65.3%",
      padding: "12px",
      marginTop: "auto",
      marginBottom: "auto"
    },
    "& h6": {
      color: theme.palette.green.main,
      fontSize: "20px",
      marginBottom: "12px",
      cursor: "pointer",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px",
        marginBottom: "8px"
      }
    },
    "& p": {
      color: 'white',
      fontSize: "14px",
      [theme.breakpoints.down('xs')]: {
        fontSize: "12px"
      }
    }
  },
  image: {
    [theme.breakpoints.down('xs')]: {
      width: "34.7%",
      height: "auto",
      '& img': {
        height: "100%"
      }
    }
  }
})

export default blogItemStyle
