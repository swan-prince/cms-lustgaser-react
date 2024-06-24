const listOrderStyle = (theme) => ({
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
  statisticsItem: {
    padding: "1rem",
    background: "#151B20",
    borderRadius: "4px",
    "& img": {
      width: "84px",
      marginRight: "1rem",
      [theme.breakpoints.down('xs')]: {
        width: "60px"
      }
    },
    "& div": {
      color: "white",
      "& p:first-child": {
        fontSize: "1rem",
        [theme.breakpoints.down('xs')]: {
          fontSize: "14px"
        }
      },
      "& p:last-child": {
        fontSize: "1.5rem",
        [theme.breakpoints.down('xs')]: {
          fontSize: "14px"
        }
      }
    }
  },
  textGreen: {
    color: "#1DB954"
  },
  textRed: {
    color: "#FF4B4B"
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
  declinedStatus: {
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
})

export default listOrderStyle
