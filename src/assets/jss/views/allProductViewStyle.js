import HeaderBg from "assets/img/all product/header-bg.png"
import HeaderMobileBg from "assets/img/all product/header-mobile-bg.png"

const allProductViewStyle = theme => ({
	headerSection: {
		backgroundImage: `url(${HeaderBg})`,
		width: "100%",
		height: "487px",
		position: "relative",
		backgroundSize : "100% 100%",
		backgroundColor: "#0F1317",
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
				height: "357px",				
				backgroundImage: `url(${HeaderMobileBg})`,
				"&:before": {
					backgroundColor: "unset"
				}
		}	
	},
	headerContents: {
		marginTop: "56px",
		marginLeft: "150px",
		position: "relative",		
		"& h3": {
			color: "white",
			fontSize: "40px",
			zIndex: '1',
			marginBottom: "24px"
		},
		"& p": {
			color: '#FE9F00',
			fontSize: "20px",
			zIndex: '2',			
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: "50px",
			marginLeft: theme.spacing(3),
			"& p": {
				fontSize: "12px",							
			},
			"& h3": {				
				fontSize: "20px",			
				marginBottom: "1rem"
			}
		}
	},
	titleSection: {
		"& h3": {
			color: "#1DB954",
			fontSize: "32px",
			marginBottom: theme.spacing(2),
			[theme.breakpoints.down('xs')]: {
					fontSize: "16px",
					marginBottom: theme.spacing(1),
			}
		},
		"& p": {
			color: "white",
			fontSize: "1rem",
			marginBottom: "20px",
			[theme.breakpoints.down('xs')]: {
					fontSize: "12px",
					marginBottom: "0px"
			}
		},	
	},
	productSection: {
		backgroundColor: "#0F1317",
		padding: "60px 80px 64px",
		[theme.breakpoints.down('sm')]: {
			padding: "24px 0px"
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
		margin: "0px auto 52px",
		[theme.breakpoints.down('sm')]: {
			margin: "0px auto 1rem",
		}
	},
	filterBtn: {
		color: 'white',
		backgroundColor: "#151B20",
		padding: "21px 25px",
		marginRight: "14px",
		borderRadius: "8px",
		textTransform: "none",
		[theme.breakpoints.down('sm')]: {
			fontSize: "14px",
			padding: "12px 20px"
		}
	},
	active: {
		color: "#1DB954",
		border: "1px solid #1DB954"
	},
	filterSection: {
		width: "100%",
		overflowX: "auto",
		paddingBottom: "1rem",
		"&::-webkit-scrollbar": {
			height: "5px"
		},
		"&::-webkit-scrollbar-thumb": {
			background: "#151B20",
			borderRadius: "10px"
		}
	},
	filterList: {
		width: "max-content"
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
	searchBtn: {
		width: "48px",
		minWidth: "unset",
		height: "48px",
		color: "white",
		background: "#1DB954 !important",
		[theme.breakpoints.down('xs')]: {
			width: "36px",
			height: "36px"
		}
	}
})

export default allProductViewStyle
