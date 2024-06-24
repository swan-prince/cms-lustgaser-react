const transactionHistoryViewStyle = (theme) => ({
  wrapper: {
    backgroundColor: "#0F1317"
  },
  contentSection: {
    padding: "56px 5.5vw",
    minHeight: "50vh",
    "& h3": {
      color: theme.palette.green.main,
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: "60px",
      [theme.breakpoints.down('sm')]: {
        marginBottom: "30px"
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: "24px",        
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: "100px 0"
    }
  },
  transactionContainer: {
    [theme.breakpoints.down('sm')]: {
      "& .MuiGrid-container": {
        margin: "0 auto",
        width: "100%"
      },
      "& .MuiGrid-item": {
        padding: "0"
      },
      "& .MuiGrid-item:last-child": {
        "& .detailBtn:last-child": {
          paddingBottom: "0",
          borderBottom: "0"
        }
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: "0 1rem"
    }
  }
})

export default transactionHistoryViewStyle
