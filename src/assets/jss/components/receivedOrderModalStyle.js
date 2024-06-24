const receivedOrderModalStyle = theme => ({
  contentBlock: {
    background: "#151B20",
    padding: "1.5rem",
    borderRadius: "8px",
    marginBottom: "1.5rem",
    [theme.breakpoints.down('sm')]: {
      background: "transparent",
      padding: "0"
    }
  },
  invoiceSection: {
    color: "white",
    "& .MuiBox-root": {
      "& p:first-child": {
        fontSize: "12px"
      },
      "& p:last-child": {
        fontSize: "14px"
      }
    },
    "& .MuiGrid-item": {
      borderRight: "1px solid rgba(255,255,255,0.12)",
      [theme.breakpoints.down('sm')]: {
        borderRight: "none"
      }
    },
    "& .MuiGrid-item:last-child": {
      borderRight: "none"
    },
    [theme.breakpoints.down('sm')]: {
      order: "1",
      borderRadius: "0",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      paddingBottom: "1rem"
    }
  },
  blockTitle: {
    color: "white",
    fontSize: "1rem",
    marginBottom: "1.5rem",
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.green.main
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: "1rem"
    }
  },
  orderListSection: {
    [theme.breakpoints.down('sm')]: {
      order: "3"
    }
  },
  orderLine: {   
    "& p": {
      color: theme.palette.green.main,
      fontSize: "14px"
    },
    "& div p:first-child": {
      fontSize: "14px",
      color: "white"
    },
    "& div p:last-child": {
      fontSize: "14px",
      color: "rgba(255,255,255,0.64)"
    }
  },
  divider: {
    background: "rgba(255,255,255,0.12)",
    margin: "1.5rem 0",
    [theme.breakpoints.down('xs')]: {
      margin: "1rem 0"
    }
  },
  billingInfoSection: {
    [theme.breakpoints.down('sm')]: {
      order: "2"
    }
  },
  billingLeft: {
    borderRight: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.64)",
    "& p": {
      fontSize: "14px"
    },
    "& .MuiBox-root p:last-child": {
      color: "white"
    },
    "& .MuiBox-root": {
      marginBottom: "20px",
      [theme.breakpoints.down('xs')]: {
        marginBottom: "8px"
      }
    },
    [theme.breakpoints.down('sm')]: {
      borderRight: "0"
    }
  },
  billingRight: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.64)",
    "& p:first-child": {
      color: "white",      
    },
    "& p": {
      marginBottom: "4px"
    },
    "& p:last-child": {
      marginBottom: "0"
    }
  },
  setPadding: {
    padding: "0 1rem !important"
  },
  container: {    
    height: "100%"
  },
  summaryLine: {
    fontSize: "14px",
    "& p:first-child": {
      color: "rgba(255,255,255,0.64)"
    },
    "& p:last-child": {
      color: "white"
    }
  },
  totalPayment: {
    fontSize: "1rem",
    "& p:first-child": {
      color: "white"
    },
    "& p:last-child": {
      color: theme.palette.green.main
    }
  },
  footer: {
    padding: "0 24px",
    [theme.breakpoints.down('xs')]: {
      padding: "0 1rem",
      "& .MuiButtonBase-root": {
        width: "100%"
      }
    }
  },
  invoiceLine: {
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      justifyContent: "space-between"
    }
  },
  summarySection: {
    [theme.breakpoints.down('sm')]: {
      order: "4"
    }
  }
})

export default receivedOrderModalStyle
