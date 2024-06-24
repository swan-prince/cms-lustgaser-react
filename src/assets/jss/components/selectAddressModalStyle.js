const selectAddressModalStyle = theme => ({
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
  header: {
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
  footer: {
    padding: "0 1.5rem",
    marginTop: "40px",
    [theme.breakpoints.down('xs')]: {
      marginTop: "28px",
      padding: "0 1rem"
    }
  },
  cancelBtn: {
    backgroundColor: "transparent !important",
    color: theme.palette.green.main,
    boxShadow: "none !important"
  },
  address: {
    [theme.breakpoints.down('sm')]: {
      border: "1px solid #323F4B",
      borderRadius: "4px",      
    }
  },
  addressWrapper: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: "12px"
    }
  },
  cotents: {
    [theme.breakpoints.down('sm')]: {
      height: "50vh",
      "& .MuiFormControl-root": {
        height: "100%",
        "& .MuiFormGroup-root": {
          height: "100%",
          "& .MuiContainer-root": {
            overflowY: "auto",
            padding: "0 1rem",
            "&::-webkit-scrollbar": {
              height: "4px",
              width: "4px"
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10px",
              background: "#151B20"
            }
          }
        }
      }
    }
  }
})

export default selectAddressModalStyle
