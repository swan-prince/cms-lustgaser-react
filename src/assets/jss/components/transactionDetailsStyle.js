const transactionDetailsStyle = (theme) => ({
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
        paddingBottom: "0",
        marginBottom: "1rem"
      }
    },
    "& .MuiGrid-item:nth-child(even)": {
      borderRight: "0"
    },
    "& .MuiGrid-item:last-child": {
      borderRight: "none"
    },
    [theme.breakpoints.down('sm')]: {      
      borderRadius: "0"      
    }
  },
  blockTitle: {
    color: "white",
    fontSize: "1rem",
    marginBottom: "1.5rem",    
    [theme.breakpoints.down('xs')]: {
      marginBottom: "1rem"
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
    padding: "0 1rem !important",
    margin: "0"
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
     "& p:first-child": {
       color: "rgba(255,255,255,0.64)"
     }
    }
  },
  summarySection: {    
  }
})

export default transactionDetailsStyle
