const userViewStyle = (theme) => ({
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
  modalFooter: {
    marginTop: "1.5rem",
    padding: "0 1rem",
    [theme.breakpoints.down('sm')]: {
      "& .MuiButtonBase-root": {
        width: "50%",
        margin: "0"
      }
    }
  },
  detailLabel: {
    color: "#9AA5B1",
    fontSize: '12px',
    marginBottom: "0.5rem"
  },
  detailInfo: {
    color: 'white',
    fontSize: "14px"
  },
  detailWrapper: {
    display: "flex",
    background: "#151B20",
    borderRadius: "4px",
    padding: "10px 0",
    flexWrap: "wrap",
    "& .MuiBox-root:first-child": {
      borderRight: "1px solid rgba(255, 255, 255, 0.12)",
      [theme.breakpoints.down('sm')]: {
        borderRight: "0"
      }
    },
  },
  userDetailItem: {
    width: "calc(100% / 3)",
    padding: "0 1rem",
    margin: "10px 0",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    }
  },
  radioLabel: {
    color: "white",
    fontSize: "14px",
    marginBottom: "4px",
    "& span": {
      color: "#FF4B4B"
    }
  },
  select: {
    color: "white",
    marginBottom: '8px',
    height: "53px",
    marginBottom: "0",
    paddingLeft: '14px',
    "& .MuiSvgIcon-root": {
      color: "white"
    },
    "&:before": {
      borderBottom: "0 !important"
    },
    "&:after": {
      borderBottom: "0 !important"
    }
  }
})

export default userViewStyle
