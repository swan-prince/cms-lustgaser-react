const transactionHistoryItemStyle = (theme) => ({
  transactionHistory: {
    background: "#151B20",
    borderRadius: "8px",
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      borderRadius: "0"
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  topSection: {
    marginBottom: "2rem",
    flexWrap: "wrap",
    [theme.breakpoints.down('xs')]: {
      marginBottom: "14px"
    }
  },
  transactionText: {
    fontSize: "1rem",
    color: "white",
    [theme.breakpoints.down('xs')]: {
      fontSize: "14px"
    }
  },
  dateNumber: {
    marginLeft: "6px",
    "& p": {
      fontSize: "1rem",
      color: "rgba(255,255,255,0.64)"
    },
    "& p:first-child": {
      marginRight: theme.spacing(1)
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      order: '1',
      marginLeft: "0",
      justifyContent: "space-between",
      marginTop: "1rem"      
    },
    [theme.breakpoints.down('xs')]: {
      "& p": {
        fontSize: "14px"
      }
    }
  },
  status: {
    fontSize: "1rem",
    background: "#1F2933",
    padding: "8px 12px",
    borderRadius: "16px",
    marginLeft: "auto",
    "& p": {
      lineHeight: "1"
    },
    [theme.breakpoints.down('xs')]: {      
      padding: "4px 8px",
      "& p": {
        fontSize: "12px",
      }
    }
  },
  finished: {
    color: theme.palette.green.main
  },
  failed: {
    color: "#FF4B4B"
  },
  delivery: {
    color: "white"
  },
  leftSide: {
    color: "rgba(255,255,255,0.64)",
    fontSize: "14px",
    [theme.breakpoints.down('xs')]: {
      "& p": {
        fontSize: "14px"
      }
    }
  },
  title: {
    color: "white", 

  },
  price: {
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: "12px 0"
    }
  },
  rightSide: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "1.5rem",
    marginLeft: "auto",
    borderLeft: "1px solid rgba(255,255,255,0.12)",
    "& p": {
      color: "rgba(255,255,255,0.64)"
    },
    "& p:last-child": {
      color: theme.palette.green.main,
      marginTop: "12px"
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: "12px",
      "& p": {
        fontSize: "14px"
      }
    }
  },
  detailBtn: {
    marginTop: "2rem",
    "& .MuiButtonBase-root": {
      color: theme.palette.green.main,
      fontSize: "1rem",
      textTransform: "none"
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: "1rem",
      paddingBottom: "1.5rem",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      "& .MuiButtonBase-root": {
        width: "100%"
      }
    }
  }
})

export default transactionHistoryItemStyle
