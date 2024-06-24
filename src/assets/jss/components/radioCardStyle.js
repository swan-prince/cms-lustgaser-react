const radioCardStyle = theme => ({
  radio: {
    color: "white",
    fontSize: "14px",
    "& .MuiRadio-root": {
      color: "rgba(255,255,255, 0.64)"
    },
    "& .Mui-checked": {
      color: "#1DB954 !important"
    }
  },
  radioCard: {
    padding: "1rem",
    height: "100%",
    "& p": {
      color: "rgba(255,255,255, 0.64)",
      fontSize: "12px"
    },
    [theme.breakpoints.down('xs')]: {
      padding: "12px",
      border: "1px solid #323F4B",
      borderRadius: "4px"
    }
  },
  selected: {
    border: "1px solid #1DB954",
    borderRadius: "4px",
    background: '#031208',
    "& p": {
      color: "white !important",      
    }
  },
  smallSize: {
    padding: "0 1rem",
    height: "auto"
  }
})

export default radioCardStyle
