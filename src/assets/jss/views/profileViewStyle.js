const profileViewStyle = (theme) => ({
  wrapper: {
    background: "#0F1317"
  },
  contentSection: {
    padding: "56px 5.5vw",    
    "& h3": {
      color: "white",
      fontSize: "24px"     
    },
    [theme.breakpoints.down('sm')]: {
      padding: "100px 0"
    }
  },
  appBar: {
    background: "#151B20",
    borderRadius: "8px",
    boxShadow: "none !important",
    "& .MuiTabs-flexContainer": {
      paddingLeft: "28px",
      paddingRight: "28px",
      [theme.breakpoints.down('xs')]: {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }
    },
    "& .MuiTab-root": { 
      marginRight: "2rem",
      textTransform: "none",
      fontSize: "1rem",
      color: "rgba(255,255,255,0.32)",
      minWidth: "unset",
      padding: "19px 0 14px",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px",
        padding: "15px 0",
        marginRight: "24px"
      }
    },
    "& .Mui-selected": {
      color: theme.palette.green.main
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.green.main
    }
  },
  profileDataSection: {
    background: "#151B20",
    padding: theme.spacing(3),
    borderRadius: "8px",
    [theme.breakpoints.down('sm')]: {
      flexWrap: "wrap"
    }
  },
  avatar: {
    width: "96px",
    marginRight: "2rem",
    "& .MuiIconButton-root": {
      position: "absolute",
      top: "64px",
      right: "0px"
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      height: "96px",
      marginRight: "0",
      marginBottom: "29px",
      textAlign: "center",
      "& img": {
        width: "96px"
      },
      "& .MuiIconButton-root": {
        bottom: "0",
        right: "calc(50% - 49px)"
      }
    }
  },
  profileDivider: {
    backgroundColor: "rgba(255,255,255,0.12)",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      margin: "18px 0 20px"
    }
  }, 
  profileDataFieldRow: {
    "& p": {
      color: "white",
      fontSize: "1rem"
    },
    "& .MuiButtonBase-root": {
      color: theme.palette.green.main,
      fontSize: "14px",
      textTransform: "none"
    },
    marginBottom: theme.spacing(1)
  },
  profileDataCol: {
    width: "calc((100% - 96px - 120px) / 3)",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    }
  },
  profileDataRow: {
    "& p": {
      fontSize: "14px",
      color: "white"
    },
    "& p:first-child": {
      color: "rgba(255,255,255,0.64)",
      fontSize: "14px"
    },
    marginTop: "1rem"
  },
  editProfile: {
    width: "32px",
    height: "32px",
    backgroundColor: theme.palette.green.main
  },
  billingInfoSection: {
    backgroundColor: "#151B20",
    padding: "24px 0px",
    borderRadius: "8px",
    [theme.breakpoints.down('xs')]: {
      padding: "1.5rem 0"
    },    
  },
  searchForm: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: "1.5rem"
    },
    "& .MuiInputBase-root": {
      color: "white",
      fontSize: "14px",
      minWidth: "250px",
      [theme.breakpoints.down('sm')]: {
        width: "100%"
      }
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important"
    }
  },
  billingInfoField: {
    "& p": {
      color: "white",
      fontSize: '1rem'
    },    
    marginBottom: "1.5rem"
  },
  badge: {
    background: "#1F2933",
    padding: "3px 6px",
    borderRadius: "1rem",
    "& p": {
      fontSize: "12px",
      color: theme.palette.green.main
    }
  },
  billingInfoCol: {
    "& > p": {
      fontSize: "14px",
      color: "rgba(255,255,255,0.64)"
    },
    "& > p:first-child": {
      color: "white",
      fontSize: "14px"
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: "1rem"
    }
  },
  textWhite: {
    color: "white !important"
  },
  billingDeleteBtn: {
    color: "#323F4B",
    textTransform: "none",
    fontSize: "1rem"
  },
  billingUpdateBtn: {
    color: theme.palette.green.main,
    textTransform: "none",
    fontSize: "1rem"
  },
  billingActions: {
    marginTop: "2rem"
  },
  dateField: {
    "& .MuiFormLabel-root": {
      color: 'white',
      position: "relative",
      fontSize: "14px",
      marginBottom: "4px",
      "& span": {
        color: "#FF4B4B"
      }
    },
    "& .MuiFormControl-root": {
      marginTop: "0"
    },
    "& .MuiInputBase-root": {
      height: "53px",
      color: "white"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important"
    },
    "& .MuiButtonBase-root": {
      color: "white"
    }
  },
  modalFooter: {
    padding: "0 1.5rem",
    marginTop: "3rem",
    [theme.breakpoints.down('xs')]: {
      padding: "0 1rem",
      "& .MuiButtonBase-root": {
        width: "50%",
        margin: "0"
      }
    }
  },
  cancelBtn: {
    background: "transparent !important",
    boxShadow: "none !important",
    color: theme.palette.green.main
  }
})

export default profileViewStyle
