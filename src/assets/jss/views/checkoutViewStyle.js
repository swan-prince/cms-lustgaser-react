const checkoutViewStyle = (theme) => ({
  wrapper: {
    background: "#0F1317"
  },
  contentSection: {
    padding: "56px 5.5vw",
    "& h3": {
      color: "#1DB954",
      fontSize: "24px"     
    },
    [theme.breakpoints.down('sm')]: {
      padding: "100px 0"
    }
  },
  shippingSection: {
    backgroundColor: "#151B20",
    borderRadius: "8px",
    padding: "1.5rem",
    "& .MuiContainer-root": {
      padding: "0"
    },
    [theme.breakpoints.down('sm')]: {
      background: "transparent",
      padding: "1rem 0",
      "& fieldset": {
        width: '100%'
      }
    }
  },
  shippingFooter: {
    marginTop: "1.5rem",
    "& p": {
      color: "rgba(255,255,255,0.64)",
      fontSize: "1rem"
    },
    "& p:last-child": {
      color: theme.palette.green.main
    }
  },
  methodItem: {
    [theme.breakpoints.down('sm')]: {
      flex: "none",
      width: "220px",
      marginRight: "12px"
    }
  },
  methodContainer: {
    [theme.breakpoints.down('sm')]: {
      flexWrap: "nowrap",
      overflowX: "auto",
      paddingBottom: "1rem",
      "&::-webkit-scrollbar": {
        height: "4px"
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        background: "#1DB954"
      }
    }
  },
  billingSection: {
    marginTop: "40px"
  },
  billingForm: {
    marginTop: "12px",
    background: "#151B20",
    borderRadius: "8px",
    padding: "1.5rem 0"
  },
  orderList: {
    background: "#151B20",
    borderRadius: "8px",
    padding: "1.5rem",
    "& h6": {
      color: "white",
      fontSize: "1rem",
      marginBottom: "1rem"
    },
    "& .MuiDivider-root": {
      background: "rgba(255,255,255,0.12)",
      marginBottom: "28px",
      [theme.breakpoints.down('sm')]: {
        marginBottom: "20px"
      }
    },
    [theme.breakpoints.down('sm')]: {
      "& .MuiFormControl-root": {
        width: "100%"
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: "1rem"
    }
  },
  orderItem: {
    marginBottom: "20px",
    [theme.breakpoints.down('xs')]: {
      marginBottom: "1rem"
    },
    "& p": {
      color: "white",
      fontSize: "14px"
    },
    "& div p:first-child": {
      color: "rgba(255,255,255,0.64)"
    },
    "& div p:last-child": {
      color: "#1DB954"
    }
  },
  discount: {
    marginBottom: "28px",
    "& .MuiInputBase-root": {
      width: "67.2%",
      background: "#1C2126",
      color: "white",
      border: "1px solid #323F4B",
      borderRadius: "4px",
      height: "50px"
    },
    "& button": {
      width: "29.4%",
      whiteSpace: "break-spaces",
      height: "50px",
      padding: "0",
      minHeight: "unset",
      margin: "0"
    }
  },
  paymentMethod: {
    border: "1px solid #323F4B",
    borderRadius: "4px",
    marginBottom: "1rem",
    "& p": {
      color: "white",
      fontSize: "14px",
      marginLeft: "4px"
    },
    "& .MuiFormControlLabel-root": {
      width: "100%",
      "& .MuiFormControlLabel-label": {
        width: "100%",
        "& .MuiSvgIcon-root": {
          marginLeft: "auto",
          color: "#1DB954"
        }
      }
    },
    "& .MuiRadio-root": {
      color: "rgba(255,255,255,0.64)"
    },
    [theme.breakpoints.down('xs')]: {
      "& img": {
        width: "100%"
      }
    }
  },
  paymentMethodContainer: {
    padding: "0.5rem",
    [theme.breakpoints.down('sm')]: {
      "& .MuiGrid-root": {
        justifyContent: "space-between"
      }      
    }
  },
  activePayment: {
    borderColor: "#1DB954",
    background: "#031208",
    "& .MuiRadio-root": {
      color: "#1DB954 !important"
    },
    [theme.breakpoints.down('sm')]: {      
      width: "calc(50% - 8px)",
      flex: "none"
    }    
  },
  sumaryLine: {
    marginBottom: "1rem",
    "& p:first-child": {
      color: "rgba(255,255,255,0.64)",
      fontSize: "14px"
    },
    "& p:last-child": {
      color: "white",
      fontSize: "14px"
    }
  },
  setMargin: {
    marginBottom: "0 !important"
  },
  totalPayment: {
    fontSize: "1rem",
    color: "white",
    margin: "1rem 0",
    "& p:last-child": {
      color: theme.palette.green.main
    }
  },
  checkBox: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
    margin: "1rem 0 36px",
    marginRight: "0 !important",
    "& a": {
      color: theme.palette.green.main
    },
    "& .Mui-checked": {
      color: theme.palette.green.main
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: "28px"
    }
  },
  footerText: {
    fontSize: "1rem",
    color: theme.palette.green.main,
    marginBottom: "36px",
    [theme.breakpoints.down('xs')]: {
      marginBottom: "28px"
    }
  },
  userBillingInfo: {
    padding: "46.5px 40px",
    background: "#151B20",
    borderRadius: "8px",
    marginTop: "1rem",
    "& h5": {
      color: "white",
      fontSize: "1rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px"
      }
    },
    "& button": {
      color: theme.palette.green.main,
      fontSize: "14px",
      textTransform: "none"
    },
    "& p": {
      color: "rgba(255,255,255,0.64)",
      fontSize: "14px",
      marginTop: "1rem",
      [theme.breakpoints.down('xs')]: {
        marginTop: "0.5rem"
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: "1rem"
    }
  }
})

export default checkoutViewStyle
