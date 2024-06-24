const notificationViewStyle = (theme) => ({
  contentSection: {
    background: "#151B20",
    borderRadius: "8px",
    padding: "40px",
    [theme.breakpoints.down('xs')]: {
      padding: "1.5rem"
    }
  },
  markBtn: {
    [theme.breakpoints.up('md')]: {
      color: "#1DB954 !important",
      textAlign: "right",
      marginLeft: "auto",
      display: "flex"
    }    
  },
  notificationItem: {
    marginTop: "2rem",
    "& .MuiSvgIcon-root": {
      color: theme.palette.green.main
    }
  },
  contents: {
    margin: "0 1rem",
    "& p": {
      fontSize: '1rem',
      color: "rgba(255,255,255,0.64)",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px"
      }
    },
    "& p:first-child": {
      color: "white",
      marginBottom: "0.5rem"
    },
    "& p:last-child": {
      marginTop: "0.5rem",
      fontSize: "14px",
      [theme.breakpoints.down('xs')]: {
        fontSize: "12px"
      }
    }
  }
})

export default  notificationViewStyle
