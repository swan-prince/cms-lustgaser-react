import BannderBg from "assets/img/landing-hero.png"
import BannerMobileBg from "assets/img/landing-hero-mobile.png"

const blogViewStyle = (theme) => ({
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
        height: "98vw",
        maxHeight: "548px",
        backgroundImage: `url(${BannerMobileBg})`
    },
    [theme.breakpoints.down('xs')]: {
      display: "flex",
      height: "330px"
    }
  },
  headerContents: {
    zIndex: "2",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -100%)",
    width: "90%",
    "& h3": {
      color: theme.palette.green.main,
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        fontSize: "24px"
      }
    },
    "& p": {
      color: "white",
      fontSize: "1rem",
      [theme.breakpoints.down('xs')]: {
        fontSize: "14px"
      }
    },
    [theme.breakpoints.down('sm')]: {
      transform: "translate(-50%, -50%)"
    },
    [theme.breakpoints.down('xs')]: {
      top: "unset",
      left: "unset",
      margin: "auto auto 20px",
      transform: 'unset'
    }
  },
  searchForm: {
		"& .MuiInputBase-root": {
			color: "white",
			borderRadius: "8px",
			backgroundColor: "#151B20",
			fontSize: "14px",
			height: "72px",
			[theme.breakpoints.down('xs')]: {
				height: "52px"
			}
		},
		"& input::placeholder": {
			color: "white",
			opacity: '1'
		},
		"& .MuiInputBase-input": {
			fontSize: "1rem",
			padding: "24px 12px 24px 24px",
			[theme.breakpoints.down('xs')]: {
				padding: "8px 8px 8px 16px",
			}
		},
		"& .MuiInputAdornment-positionStart": {
			marginRight: "0"
		},
		[theme.breakpoints.down('xs')]: {
			"& .MuiOutlinedInput-adornedEnd": {
				paddingRight: "8px"
			}
		}
	},
  searchFormWrapper: {
		maxWidth: "704px",
		margin: "23px auto 52px",
		[theme.breakpoints.down('sm')]: {
			margin: "24px auto 1rem",
		}
	},
  searchBtn: {
		width: "48px",
		minWidth: "unset",
		height: "48px",
		color: "white",
		background: "#1DB954 !important",
		[theme.breakpoints.down('xs')]: {
			width: "36px",
			height: "36px"
		},
    "& svg": {
      width: "24px",
      height: "24px",
      marginRight: "0"
    }
	},
  blogContents: {
		backgroundColor: "#0F1317",
		padding: "60px 80px 64px",
		[theme.breakpoints.down('sm')]: {
			padding: "24px 0px"
		}
	},
  pagination: {
		marginTop: "3rem",
		"& .MuiButtonBase-root": {
			background: "#151B20",
			color: "#475A6B",
			fontSize: "18px",
			borderRadius: "8px",
			width: "40px",
			height: "40px"
		},
		"& .Mui-selected": {
			color: "white",
			background: "#1DB954 !important"
		}
	},
})

export default blogViewStyle
