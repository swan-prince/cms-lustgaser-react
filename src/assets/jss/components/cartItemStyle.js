const cartItemStyle = (theme) => ({
  cartItem: {
    borderTop: "1px solid rgba(255,255,255,0.12)",
    width: "100%",
    padding: "24px 0",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
      display: "block",
      padding: "1rem 0"
    }
  },
  product: {
    alignItems: "center",
    width: "32.66%",    
    "& img": {
      width: "64px",
      height: "64px",
      marginRight: "12px"
    },
    "& .MuiIconButton-root": {
      color: "#9AA5B1"
    },
    "& p": {
      color: "white",
      fontSize: "14px"
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginBottom: "18.5px"
    }
  },
  price: {
    width: "20.1%",
    "& p": {
      color: "rgba(255,255,255,0.64)",
      fontSize: "14px"
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginBottom: "1rem"
    }
  },
  quantity: {
    width: "18%",
    color: "white",    
    justifyContent: "space-between",
    "& div": {
      width: "100%"
    },
    "& .MuiButtonBase-root": {
      padding: "0",
      margin: "0",
      width: "32px",
      height: "32px"
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginBottom: "1rem",
      "& div": {
        width: "128px"
      },
    }
  },
  total: {
    width: "20.1%",
    "& p": {
      fontSize: "14px",
      color: theme.palette.green.main
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    }
  },
  disableBtn: {
    background: "transparent !important",
    boxShadow: "none !important",
    color: "#475A6B !important"
  },
  deleteBtn: {
    marginLeft: "auto"
  },
  fieldTitle: {
    color: "rgba(255,255,255,0.64) !important",
    fontSize: "14px !important"
  }
})

export default cartItemStyle
