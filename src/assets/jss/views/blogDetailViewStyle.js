const blogDetailViewStyle = theme => ({
  wrapper: {
    background: "#0F1317"
  },
  contentSection: {
    padding: "60px 56px 64px",
		[theme.breakpoints.down('sm')]: {
			padding: "80px 0px"
		}
  },
  titleSection: {
    marginBottom: '2rem',
    "& h3": {
      color: theme.palette.green.main,
      fontSize: "36px",
      marginBottom: "1rem"
    },
    "& p": {
      color: "white",
      fontSize: "1rem"
    },
    [theme.breakpoints.down('sm')]: {
      order: "2",
      marginBottom: "1rem"
    },
    [theme.breakpoints.down('xs')]: {
      "& h3": {
        fontSize: "24px",
      },
      "& p": {      
        fontSize: "14px"
      },
    }
  },
  detailText: {
    marginTop: "2rem",
    "& p": {
      color: 'rgba(255,255,255, 0.8)',
      fontSize: '18px'
    },
    [theme.breakpoints.down('sm')]: {
      order: "3",
      marginTop: "0"
    },
    [theme.breakpoints.down('xs')]: {
      "& p": {
        fontSize: "12px"
      }
    }
  },
  socialWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      order: "4",
      flexDirection: "row",
      marginTop: "24px"
    }
  },
  socialBtn: {
    width: "50px",
    height: "50px",
    background: "#707070",
    margin: "8px auto",
    [theme.breakpoints.down('sm')]: {
      margin: "8px",
    },
    [theme.breakpoints.down('xs')]: {
      width: "40px",
      height: "40px"
    }
  },
  anotherTitle: {
    marginTop: "130px",
    marginBottom: "36px",
    "& h3": {
      fontSize: "36px",
      color: theme.palette.green.main
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: "70px",
      marginBottom: "1.5rem",
      "& h3": {
        fontSize: "24px"
      }
    }
  },
  detailImgSection: {
    [theme.breakpoints.down('sm')]: {
      order: "1",
      height: "77vw",
      maxHeight: "420px",
      "& img": {
        height: "100%"
      }
    }
  },
  anotherBlogSection: {
    [theme.breakpoints.down('sm')]: {
      order: "5"
    }
  }
})

export default blogDetailViewStyle
