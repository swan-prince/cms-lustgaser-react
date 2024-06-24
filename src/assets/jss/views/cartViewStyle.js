const cartViewStyle = (theme) => ({
  wrapper: {
    backgroundColor: "#0F1317"
  },
  contentSection: {
    padding: "56px 5.5vw",   
    [theme.breakpoints.down('xs')]: {
      padding: "100px 0 56px"
    }
  },
  titleSection: {
    marginBottom: "3rem",
    "& h3": {
      color: "#1DB954",
      fontSize: "24px",
      marginBottom: "1rem"
    },
    "& p": {
      color: 'white',
      fontSize: "1rem"
    }
  },
  productsSection: {
    backgroundColor: "#151B20",
    borderRadius: "8px",
    padding: "1.5rem 1.5rem 0",
    [theme.breakpoints.down('sm')]: {
      padding: "0 1rem",
      "& .cartItem:first-child": {
        borderTop: "0 !important"
      }
    }
  },
  productField: {
    width: "32.66%"
  },
  priceField: {
    width: "20.1%"
  },
  quantityField: {
    width: "18%"
  },
  totalField: {
    width: "20.1%"
  },
  fields: {
    "& p": {
      color: "rgba(255,255,255,0.64)",
      fontSize: "14px"
    }
  },
  summarySection: {
    backgroundColor: "#151B20",
    padding: "1.5rem",
    borderRadius: "8px",
    "& .MuiDivider-root": {
      backgroundColor: "rgba(255,255,255,0.12)",
      margin: "1.5rem 0",
      [theme.breakpoints.down('xs')]: {
        margin: "13px 24px"
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: "1rem"
    }
  },
  summaryTitle: {
    color: "white",
    fontSize: "1rem",
    marginBottom: "18.5px"
  },
  totalSection: {
    marginBottom: "27px",
    "& p": {
      fontSize: "14px",
      color: "rgba(255,255,255,0.64)"
    },
    "& p:last-child": {
      color: "white"
    }
  },
  subTotal: {
    color: "white",
    fontSize: "1rem",
    marginBottom: "1.5rem",
    "& p:last-child": {
      color: theme.palette.green.main
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: "14px"
    }    
  },
  note: {
    "& p": {
      color: "rgba(255,255,255,0.8)",
      fontSize: "14px",
      "& span": {
        color: theme.palette.green.main
      }
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.green.main,
      marginRight: "12px"
    }
  },
  discountSection: {
    backgroundColor: "#151B20",
    padding: "1rem",
    borderRadius: "8px",
    "& button": {
      marginTop: "12px"
    },
    "& .MuiInputBase-root": {
      color: "white",
      border: '1px solid #323F4B',
      "& input::placeholder": {
        color: "white"
      }
    }
  }
})

export default cartViewStyle
