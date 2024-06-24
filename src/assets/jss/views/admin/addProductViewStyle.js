const addProductViewStyle = (theme) => ({
  backBtn: {
    color: "white",        
    fontSize: "14px",
    textTransform: "none",
    background: "#151B20",
    "& .MuiSvgIcon-root": {
      color: "#1DB954"
    }
  },
  contentSection: {
    background: "#151B20",
    borderRadius: '8px',
    marginTop: "1.5rem",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    "& h3": {
      color: "white",
      fontSize: "20px"
    },
    [theme.breakpoints.down('xs')]: {
      padding: "1rem"
    }
  },
  adornmentBtn: {
    background: "#262F37",
    color: 'white',
    padding: "13px 16px",
    minWidth: "unset",
    height: "40px"    
  },
  startAdorBtn: {
    marginRight: "8px",
    marginLeft: "-14px"
  },
  cancelBtn: {
    color: 'white',
    marginRight: "1rem",
    padding: "12px 26px"
  },
  productLabel: {
    color: "white",
    fontSize: "14px",
    marginBottom: "8px",
    "& span": {
      color: "#FF4B4B"
    }
  },
  imageItem: {
    width: "160px",   
    marginRight: "8px",
    border: "1px solid #475A6B",
    borderRadius: "4px",
    maxHeight: "150px",
    "& img": {
      height: "100%",
      borderRadius: '4px'
    },
    [theme.breakpoints.down('xs')]: {
      width: "calc((100% - 24px) / 3)",
      maxHeight: "110px",
    }
  },
  uploadField: {
    width: "160px",    
    marginRight: "8px",    
    color: "#1DB954",
    minHeight: "150px",
    [theme.breakpoints.down('xs')]: {
      width: "calc((100% - 24px) / 3)",
      minHeight: "110px",
    },
    "& div": {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      cursor: "pointer",      
    },    
    "& input": {
      display: "none"
    },
    "& p": {
      fontSize: "14px",
      [theme.breakpoints.down('xs')]: {
        fontSize: '10px'
      }
    }
  }
})

export default addProductViewStyle
