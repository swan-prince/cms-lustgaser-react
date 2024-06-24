const productViewStyle = (theme) => ({
  productSection: {
    background: "#151B20",
    borderRadius: "8px",
    padding: "1.5rem !important",
    [theme.breakpoints.down('xs')]: {
      padding: '1rem !important'
    }
  },
  productItem: {
    display: "flex",
    padding: "1rem",
    background: "#1C2126",
    borderRadius: "8px",
    "& img": {
      marginTop: "auto",
      marginBottom: "auto"
    },
    [theme.breakpoints.down('sm')]: {
      display: "block",
      background: "unset"
    }
  },
  productInfo: {
    color: "white",
    margin: "0 12px",
    width: "calc(100% - 82px - 24px - 90px)",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      margin: "0"
    }
  },
  productTitle: {
    fontSize: '14px',
    marginBottom: "0.5rem"
  },
  infoItem: {
    marginRight: "28px",
    "& p:first-child": {
      fontSize: '12px',
      marginBottom: '4px'
    },
    "& p:last-child": {
      color: '#1DB954',
      fontSize: '14px'
    },
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      alignItems: "center",
      "& p:first-child": {        
        marginBottom: '0px',
        marginRight: "4px"
      },
    }
  },
  actionList: {
    width: "90px",
    marginLeft: "auto"
  },
  actionsMenu: {
    "& .MuiButtonBase-root": {
      color: 'white'
    }
    
  }
})

export default productViewStyle
