const discountViewStyle = (theme) => ({
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
  discountItem: {
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
  radioLabel: {
    color: "white",
    fontSize: "14px",
    marginBottom: "4px",
    lineHeight: '1',
    "& span": {
      color: "#FF4B4B"
    }
  },
  textFieldWithStart: {
    "& .MuiInputBase-root": {
      paddingLeft: "0"
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "#262F37 !important",
      boxShadow: "none",
      width: "40px",
      color: "white",
      paddingLeft: "0",
      paddingRight: "0"
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
  period: {
    "& .MuiFormControl-root": {
      marginBottom: "0"
    },
    "& .MuiInputBase-root": {
      fontSize: "14px"
    }
  },
  periodField: {
    color: "white",
    "& .MuiButtonBase-root": {
      pointerEvents: "none",
      "& .MuiSvgIcon-root": {
        color: "#1DB954"
      }
    },
    "& .MuiFormHelperText-root": {
      display: "none"
    }
  },
  startDate: {
    width: "190px",
    "& .MuiInputAdornment-root": {
      display: "none"
    }
  },
  methodContainer: {
    "@media screen and (max-width: 380px)": {
      "& .MuiFormControlLabel-label": {
        fontSize: "10px"
      }
    }
  }
})

export default discountViewStyle
