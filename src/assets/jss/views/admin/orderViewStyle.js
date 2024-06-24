const orderViewStyle = (theme) => ({
  tableWrapper: {
    padding: theme.spacing(3),
    backgroundColor: "#151B20",
    borderRadius: "8px",
    "& .rdt_Table": {
      backgroundColor: "transparent",
      minWidth: "1300px",
      "& .rdt_TableRow": {
        backgroundColor: "transparent",
        color: "#9AA5B1",
        borderBottom: "1px solid #707070",
        "&:hover": {
          outline: "none !important",
          
        }
      }
    },
    "& .rdt_TableHeadRow": {
      backgroundColor: "#151B20",
      "& .rdt_TableCol": {
        color: "white !important",
        fontSize: "14px"
      },
      "& .rdt_TableCol_Sortable": {
        color: "white !important",
        fontSize: "14px"
      }
    },
    "& .rdt_TableCell": {
      fontSize: "14px"
    },
    "& .rdt_TableBody": {
      "& .rdt_TableRow": {
        paddingTop: "8px",
        paddingBottom: "8px"
      }
    }
  },
  dataTable: {
    "& > div:first-child": {
      overflowX: "auto",
      [theme.breakpoints.up('sm')]: {
        "&::-webkit-scrollbar": {
          height: "12px",
          width: "4px"
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10px",
          background: "#9AA5B1"
        }
      }     
    }
  },
  statusBadge: {
    backgroundColor: "#1F2933",
    borderRadius: "4px",
    fontSize: "12px",
    padding: "4px 8px"
  },
  approvedStatus: {
    color: "#1DB954"
  },
  pendingStatus: {
    color: "#FE9F00"
  },
  failedStatus: {
    color: "#FF4B4B"
  },
  totalPrice: {
    color: "#1DB954"
  },
  actionButton: {
    color: "white",
    backgroundColor: "#272D34 !important",
    fontSize: "12px",
    margin: "4px"
  },
  deliveryBtn: {
    color: "#1DB954 !important"
  },
  select: {
    color: "white",
    marginBottom: '8px',
    "& .MuiSvgIcon-root": {
      color: "white"
    },
    "&:before": {
      borderBottom: "0 !important"
    },
    "&:after": {
      borderBottom: "0 !important"
    }
  },
  selectWrapper: {
    display: "flex",
    alignItems: "center"
  },
  searchForm: {
    [theme.breakpoints.down('sm')]: {
      width: "calc(100% - 40px)"
    }
  },
  searchFormWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: "flex"
    }
  },
  orderItem: {
    color: "#9AA5B1",
    marginBottom: "40px",
    "& p": {
      fontSize: "14px",
      marginBottom: "12px"
    }
  },
  actionsMenu: {
    [theme.breakpoints.down('sm')]: {
      color: "white",
      "& p": {
        fontSize: "14px",
        marginBottom: '0'
      },      
      "& .MuiButtonBase-root ": {
        color: "white"
      }
    }
  },
  orderPrice: {
    [theme.breakpoints.down('sm')]: {
      color: "#1DB954",
      fontSize: "1rem"
    }
  }
})

export default orderViewStyle
