import BannderBg from "assets/img/landing-hero.png"
import BannerMobileBg from "assets/img/landing-hero-mobile.png"

const termsOfPurchaseViewStyle = theme => ({
  wrapper: {
    background: "#0F1317"
  },
  headerSection: {
    backgroundImage: `url(${BannderBg})`,
    width: "100%",
    height: "548px",
    position: "relative",
    backgroundSize : "100% 100%",
    backgroundRepeat: "no-repeat",
    "&:before": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(21, 27, 32, 0.8)",
      content: `''`
    },
    [theme.breakpoints.down('sm')]: {
      height: "70.8vw",
      maxHeight: "548px",
      backgroundImage: `url(${BannerMobileBg})`
      }
  },
  titleSection: {
    position: "absolute",
    zIndex: "2",
    color: 'white',
    top: "50%",
    left: "50%",
    width: "90%",
    transform: "translate(-50%, -50%)",
    "& h3": {
      color: '#1DB954',
      fontSize: "36px",
      marginBottom: "1rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "24px"
      }
    },
    "& p": {
      fontSize: "1rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px"
      }
    }
  },
  contentSection: {
    padding: "138px 5.5vw",
    [theme.breakpoints.down('sm')]: {
      padding: "2rem 1rem 3rem"
    },
    [theme.breakpoints.down('xs')]: {
      padding: "2rem 0"
    }
  },
  menuSection: {
    padding: "24px",
    background: "#151B20",
    borderRadius: "8px",
    "& h6": {
      color: "white",
      fontSize: "18px",
      fontWeight: "400",
      marginBottom: "21px"
    },
    "& p": {
      color: "rgba(255,255,255,0.6)",
      fontSize: "14px",
      marginBottom: "1rem",
      cursor: "pointer"
    }
  },
  menuActive: {
    color: "#1DB954 !important"
  },
  content: {
    "& h3": {
      color: "white",
      fontSize: '20px',
      marginBottom: "1rem",
      fontWeight: 400,
      [theme.breakpoints.down('xs')]: {
        fontSize: "1rem"
      }
    },
    "& p": {
      color: "rgba(255,255,255,0.8)",
      fontSize: "1rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px"
      }
    }
  },
  menuBtn: {
    background: "#151B20",
    borderRadius: "8px",
    border: "1px solid #1F2933",
    fontSize: "14px",
    height: "48px",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: '0',
    borderLeft: "0",
    paddingLeft: "12px",
    paddingRight: "18px",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "#1DB954",
      width: "20px",
      height: "20px"
    },
    marginLeft: "-40px",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "-1rem"
    }
  },
  mobileMenuWrapper: {
    padding: "26.5px 0.5rem 26.5px 1rem",
    backgroundColor: "#151B20",
    border: "1px solid #1F2933",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    height: "385px",
    borderLeft: "0",
    width: "max-content",
    position: "absolute",
    top: "60px",
    [theme.breakpoints.down('sm')]: {
      left: "-40px"
    },
    [theme.breakpoints.down('xs')]: {
      left: "-1rem"
    }    
  },
  menuItem: {
    padding: "0",
    display: "flex",
    justifyContent: "start",
    height: "32px",
    paddingBottom: "12px",
    borderBottom: "4px solid #707070",
    marginBottom: "24px",
    borderRadius: "0",
    color: "rgba(255,255,255,0.8)"
  },
  mobileMenuList: {
    overflowY: "auto",
    height: "100%",
    paddingRight: "2rem",
    "&::-webkit-scrollbar": {
      width: "4px"
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      background: "#1DB954"
    }
  },
  mobileMenu: {
    position: "relative"
  },
  activeMobileMenu: {
    borderColor: "#1DB954 !important",
    color: "white !important"
  }
})

export default termsOfPurchaseViewStyle
