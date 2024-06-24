const profileViewStyle = (theme) => ({
  contents: {
    padding: "1.5rem",
    background: "#151B20",
    borderRadius: "8px"
  },
  info: {
    "& p:first-child": {
      fontSize: "14px",
      color: "rgba(255,255,255,0.64)"
    },
    "& p:last-child": {
      color: "white",
      fontSize: "1rem",
      marginTop: "4px"
    }
  },
  avatar: {
    width: "96px",
    height: "96px",
    marginRight: "1.5rem",
    [theme.breakpoints.down('xs')]: {
      width: "60px",
      height: "60px"
    },
    "& .MuiButtonBase-root": {
      background: "#1DB954",
      bottom: "0",
      right: "0",
      position: "absolute",
      [theme.breakpoints.down('xs')]: {
        width: "20px",
        height: "20px"
      }
    }
  },
  infoColumn: {
    width: "calc((100% - 96px - 24px) / 3)",
    paddingTop: '80px',
    position: "relative",  
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      paddingTop: "1.5rem"
    }
  },
  userName: {
    position: "absolute",
    top: '0',
    "& p:first-child": {
      color: 'white',
      fontSize: "1.5rem"
    },
    "& p:last-child": {
      fontSize: "14px",
      color: "rgba(255,255,255,0.64)"
    }
  },  
  avatarSection: {
    [theme.breakpoints.down('sm')]: {
      alignItems: "center",
      height: "fit-content",
      width: "100%"      
    }
  },
  userNameMb: {
    "& p:first-child": {
      fontSize: "1rem",
      color: "white"
    },
    "& p:last-child": {
      fontSize: '14px',
      color: "rgba(255,255,255,0.64)",
      marginTop: "0.5rem"
    }
  },
  editAvatar: {
    "& input": {
      display: "none"
    },
    "& .MuiButtonBase-root": {
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      paddingLeft: "0",
      paddingRight: "0",
      position: "absolute",
      bottom: "0",
      margin: "0",
      right: "0"
    }
  },
  radioLabel: {
    color: "white",
    fontSize: "14px",
    marginBottom: "4px",
    "& span": {
      color: "#FF4B4B"
    }
  },
})

export default profileViewStyle
