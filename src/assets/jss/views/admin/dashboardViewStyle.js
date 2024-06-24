const dashboardViewStyle = theme => ({
  cardItem: {
    background: "#151B20",
    padding: theme.spacing(2),
    borderRadius: "4px"    
  },
  cardImg: {
    width: "84px",
    height: "84px",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
    [theme.breakpoints.down('xs')]: {
      width: "60px",
      height: "60px",
      padding: "12px"      
    }
  },
  totalIncomeImg: {
    background: "#FFA800",
    [theme.breakpoints.down('xs')]: {
      "& img": {
        width: '100%'
      }
    }
  },
  cardTitle: {
    color: "white",
    fontSize: "1rem",
    marginBottom: "8px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "14px",
      marginBottom: "2px"
    }
  },
  cardMark: {
    fontSize: "1.5rem",
    [theme.breakpoints.down('xs')]: {
      fontSize: "1rem"
    }
  },
  totalIncome: {
    "& h6": {
      color: "#FFA800",
      lineHeight: '1.2'     
    },
    "& p:last-child": {
      color: "rgba(255,255,255,0.7)",
      fontSize: "12px",
      display: "flex",
      "& span": {
        display: "flex",
        alignItems: "center",
        color: "#FF4B4B",
        "& svg": {
          fontSize: '15px'
        }
      }
    }
  },
  averageSale: {
    "& h6": {
      color: "#1DB954",
      lineHeight: "1.2"
    }
  },
  averageSaleImg: {
    background: "#1DB954",
    [theme.breakpoints.down('xs')]: {
      "& img": {
        height: '100%'
      }
    }
  },
  productSold: {
    "& h6": {
      color: "#fff",
      lineHeight: "1.2"
    }
  },
  productSoldImg: {
    background: "#2C4CCA",
    [theme.breakpoints.down('xs')]: {
      "& img": {
        width: '100%'
      }
    }
  },

  ordersSection: {
    background: "#151B20",
    padding: "1.5rem",
    borderRadius: "4px",
    [theme.breakpoints.down('xs')]: {
      padding: "1rem"
    }
  },
  orderTitleSection: {
    "& p": {
      color: "white",
      fontSize: "20px"
    },
    "& .MuiSelect-root": {
      paddingTop: "10px",
      color: "white",
      background: "#1F2933",
      borderRadius: "4px"    
    },
    "& .MuiSvgIcon-root": {
      color: "white"
    }
  },
  orderLine: {
    marginTop: "1rem",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid rgba(242,243,245,0.15)"
  },
  orderDateLine: {
    "& p:first-child": {
      color: "white",
      fontSize: "12px"
    },
    "& p:last-child": {
      color: "#9AA5B1",
      fontSize: "12px"
    }    
  },
  orderPriceLine: {
    marginTop: "4px",
    "& p:first-child": {      
      fontSize: "14px",
      color: "#1DB954"
    },
    "& div": {
      padding: "4px 6px",
      background: "#1F2933",
      borderRadius: "4px",
      "& p": {
        fontSize: "12px"
      }
    }
  },
  approved: {
    color: "#1DB954"
  },
  pending: {
    color: "#FE9F00"
  },
  failed: {
    color: "#FF4B4B"
  },
  chartSection: {
    color: 'white',
    padding: "1.5rem",
    background: "#151B20",
    borderRadius: "4px",
    "& h3": {
      fontSize: "20px",
      lineHeight: "1.2",
      marginBottom: "4px"
    },
    "& > p": {
      fontSize: "14px"
    },
    [theme.breakpoints.down('xs')]: {
      padding: "15px"
    }
  },
  chartist: {
    width: "100%",
    margin: "40px auto",
    [theme.breakpoints.down('xs')]: {
      margin: "20px 0 0"
    },
    "& .ct-octave ": {
      "& .ct-series-b .ct-area, .ct-series-b .ct-slice-donut-solid, .ct-series-b .ct-slice-pie": {
        fill: "#1DB954",
        fillOpacity: "0.4"
      },
      "& .ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut": {
        stroke: "#1DB954"
      },
      "& .ct-series-a .ct-area, .ct-series-a .ct-slice-donut-solid, .ct-series-a .ct-slice-pie": {
        fill: "#1DB954",
        fillOpacity: "0.4"
      },
      "& .ct-series-a .ct-bar, .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut": {
        stroke: "#1DB954"
      },
      "& .ct-label.ct-horizontal.ct-end": {
        color: "white",
        fontSize: "14px",
        [theme.breakpoints.down('xs')]: {
          fontSize: "8px"
        }
      },
      "& .ct-label.ct-vertical.ct-start": {
        color: "white",
        fontSize: "14px",
        [theme.breakpoints.down('xs')]: {
          fontSize: "8px"
        }
      },
      "& .ct-grid": {
        stroke: "rgba(235,239,244,0.2)"
      }
    }
  }
})

export default dashboardViewStyle
