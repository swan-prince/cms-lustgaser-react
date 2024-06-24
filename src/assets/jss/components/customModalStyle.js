const customModalStyle = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#0F1317",
    width: "800px",
    padding: "1.5rem 0",
    [theme.breakpoints.down('sm')]: {
      width: "90vw"
    }
  },
  smallPaper: {    
    [theme.breakpoints.up('sm')]: {
      width: "500px"
    }
  },
  modalHeader: {
    position: "relative",
    "& h5": {
      color: theme.palette.green.main,
      fontSize: "1.5rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "20px"
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: "1.5rem 0"
    }
  },
  closeBtn: {
    position: "absolute",
    top: "0",    
    color: "white",
    right: "24px"
  },
  modalContents: {
    maxHeight: "70vh",
    [theme.breakpoints.down('sm')]: {
      maxHeight: "50vh",      
      "& .MuiContainer-root": {
        padding: "0 1rem"
      }       
    },
    overflowY: "auto",    
    "&::-webkit-scrollbar": {
      height: "4px",
      width: "4px"
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      background: "#151B20"
    }
  },
  cancelBtn: {
    background: "transparent !important",
    color: "white",
    boxShadow: "none !important",
    marginRight: "4px"
  },
  roseBtn: {
    background: "#FF4B4B !important",
    color: "white",
    marginLeft: "4px",
    boxShadow: "none !important"
  },
  confirmText: {
    color: "white",
    fontSize: '14px',
    "& span": {
      color: "#1DB954"
    }
  },
  subTitle: {
    color: "white",   
    [theme.breakpoints.down('xs')]: {
      marginTop: "-1rem",
    }
  },
  customSelect: {
    color: "white",
    marginBottom: '8px',
    "& .MuiSvgIcon-root": {
      color: "white"
    },
    "&:before": {
      borderBottom: "0 !important"
    },
    "&:after": {
      borderBottom: "0 !important"
    }
  },
  selectWrapper: {
    marginLeft: "auto",
    marginRight: "auto"
  }
})

export default customModalStyle
