const marketNavbarStyles = (theme) => ({
    menuItem: {
        color: "white",
        textTransform: "none",
        fontSize: "16px",        
        marginRight: theme.spacing(6),
        lineHeight: "19px",
        cursor: "pointer",
        textDecoration: "none !important",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginBottom: "20px",
            fontSIze: "14px"
        }
    },
    grow: {
        flexGrow: 1
    },
    navbar: {
        // background: "#0F1317",
        background: "transparent",
        boxShadow: "none",
        "& .MuiToolbar-root": {
            height: "90px",
            padding: theme.spacing(0, 10),
            [theme.breakpoints.down('sm')]: {
                height: "64px",
                padding: theme.spacing(0, 2),
            }
        }
    },
    cartBtn: {
       color: "white",
       marginRight: theme.spacing(5),
       backgroundColor: "#707070",
       "& .MuiBadge-badge": {
           backgroundColor: "#1DB954"
       },
       [theme.breakpoints.down('sm')]: {
           marginRight: "13px",
           width: "39px",
           height: "39px",
           "& .MuiSvgIcon-root": {
               fontSize: "1.2rem"
           }
       }
    },
    menuBtn: {
        color: "white",
        marginLeft: "-1rem"
    },
    loginBtn: {
        [theme.breakpoints.down('sm')]: {
            padding: "10px 23px"
        }
    },
    mobileNavbar: {
        [theme.breakpoints.down('sm')]: {
            "& .MuiToolbar-root": {
                height: "100vh",
                display: "block",
                paddingTop: "5px",
                background: "#0F1317"
            }
        }
    },
    mobileNav: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",            
        }
    },
    mobileMenu: {
        width: "100%",
        marginTop: "44px"
    },
    searchForm: {
        "& .MuiInputBase-root": {
            color: "white",
            borderRadius: "8px",
            backgroundColor: "#151B20",
            fontSize: "14px"
        },
        "& input::placeholder": {
			color: "white",
			opacity: '1'
		}
    },
    closeBtn: {
        color: "white"
    },
    profileMenu: {
        "& .MuiPaper-root": {
            top: '80px !important',
            background: "#151B20",
            boxShadow: "none",           
            "& li": {
                color: "white",
                fontSize: "14px"
            },
            "& li:last-child": {
                color: "#FF4B4B"
            }
        }
    },
    loggedBtn: {
        padding: "0",
        background: "transparent !important",
        boxShadow: "none !important",
        "& img": {
            marginRight: "12px",            
        },
        "& .MuiSvgIcon-root": {
            marginLeft: "12px"
        },
        [theme.breakpoints.down('xs')]: {
            "& img": {
                marginRight: "0",
                width: "32px",
                height: "32px"            
            }
        }
    }
})

export default marketNavbarStyles
