const broadcastViewStyle = (theme) => ({
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
  messageItem: {
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
  autoCompleteField: {
    "& .MuiFormLabel-root": {
      fontSize: "14px",
      color: "white",
      transform: "none"
    },
    "& .MuiInputBase-root": {
      marginTop: "1.5rem",
      "&:before": {
        borderBottom: "0 !important"
      },
      "&:after": {
        borderBottom: "0 !important"
      }
    },
    "& .MuiChip-root": {
      color: "white",
      backgroundColor: "#262F37",
      borderRadius: "4px",
      "& .MuiSvgIcon-root": {
        color: "#1DB954"
      }
    }
  },
  editField: {
    "& .rdw-editor-wrapper": {
      border: "1px solid #323F4B"
    },
    "& .rdw-editor-toolbar": {
      background: "transparent",
      border: "0",
      borderBottom: "1px solid #323F4B"
    },
    "& .rdw-option-wrapper": {
      background: "transparent",
      color: "white",
      border: "0 !important",
      boxShadow: "none !important",
      "& img": {
        filter: "invert(1)"
      },
      "&:hover": {
        boxShadow: "none"
      }
    },
    "& .rdw-block-wrapper, .rdw-fontsize-wrapper, .rdw-fontfamily-wrapper": {
      display: "none"
    },
    "& .rdw-editor-main": {
      color: "white",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      minHeight: "100px"
    }
  },
  label: {
    color: "white",
    fontSize: "14px",
    marginBottom: "4px",
    "& span": {
      color: "#FF4B4B"
    }
  },
  red: {
    color: "#FF4B4B"
  }
})

export default broadcastViewStyle
