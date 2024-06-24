const customPaginationStyle = (theme) => ({
  custompagination: {
    color: "white",
    "& p": {
      fontSize :'12px'      
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center"
    }
  },
  rowsPerPage: {
    margin: "0 28px 0 8px",
    fontSize: "12px",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "#1DB954"
    },
    "&:after": {
      borderBottom: "0"
    },
    "&:before": {
      display: "none"
    },
    "& .MuiSelect-root": {
      minHeight: "unset",
      paddingBottom: "0",
      paddingTop: '0',
      marginTop: "4px"
    }
  },
  pagination: {
    "& .MuiPaginationItem-page.Mui-selected": {
      background: "#1DB954",
      color: "white"
    },
    "& .MuiPaginationItem-root": {
      border: "0",
      color: "#7B8794"
    }
  }
})

export default customPaginationStyle
