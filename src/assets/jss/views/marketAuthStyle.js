import AuthBg from "assets/img/auth.png"

const marketAuthStyle = (theme) => ({
	wrapper: {
		backgroundColor: "#0F1317",
		paddingBottom: "3rem",
		height: "1024px",
		[theme.breakpoints.down('sm')]: {
			backgroundImage: `url(${AuthBg})`,
			backgroundSize: "100% 100%",
			backgroundRepeat: "no-repeat",
			height: '100%',
			paddingBottom: "44px"
		}
	},
	container: {
		padding: "0",
		height: "100%",
		maxWidth: "100%",
		"& .MuiGrid-container": {
			height: "100%"
		}
	},
	leftSide: {
		padding: "0 80px",
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down('xs')]: {
			padding: "0 1rem"
		}
	},
	contents: {
		width: "100%",
		"& img": {
			width: "122px",
			height: "108px",
			marginBottom: "1rem",
			[theme.breakpoints.down('sm')]: {
				display: "flex",
				margin: "0 auto 1rem"
			},
			[theme.breakpoints.down('xs')]: {
				width: "25vw",
				height: "auto"
			}
		},
		"& h3": {
			color: "white",
			fontSize: "36px",
			marginBottom: "3rem",
			[theme.breakpoints.down('sm')]: {
				textAlign: "center"
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: "20px"
			},
		},
		[theme.breakpoints.down('sm')]: {
			paddingTop: "100px"
		}
	},
	rightSide: {
		backgroundImage: `url(${AuthBg})`,
		backgroundSize: "100% 100%",
		backgroundRepeat: "no-repeat",
		height: '100%',
		[theme.breakpoints.down('sm')]: {
			display: "none"
		}
	},
	textField: {
		marginBottom: "24px",
		"& .MuiFormLabel-root": {
			color: "white",
			fontSize: "14px",
			marginBottom: "10px",
			[theme.breakpoints.down('xs')]: {
				marginBottom: "0.5rem"
			}
		},
		"& .MuiOutlinedInput-root": {
			backgroundColor: "#151B20",
			color: "white",
			borderRadius: "8px",
			fontSize: "14px",
			height: "48px"
		}
	},
	rememberSelect: {
		"& .MuiFormControlLabel-root": {
			color: "white",
			fontSize: "14px",
		},
		"& a": {
			color: "#1DB954",
			fontSize: "14px",
			textDecoration: "none !important"
		}		
	},
	checkbox: {
		color: "#1DB954",		
		"&.Mui-checked": {
			color: "#1DB954"
		}
	},
	submitBtn: {
		margin: "3rem 0",
		[theme.breakpoints.down('xs')]: {
			margin: "40px 0 32px"
		}
	},
	otherPageLink: {
		color: "white",
		fontSize: "14px",
		"& a": {
			color: "#1DB954",
			textDecoration: "none !important"
		}
	},
	forgotPasword: {
		"& p": {
			color: "white",
			fontSize: "1rem",
			marginBottom: "3rem",
			[theme.breakpoints.down('sm')]: {
				textAlign: "center",
				marginBottom: "40px"
			}
		},
		"& h3": {
			marginBottom: "0.5rem"
		}
	},
	forgotWrapper: {
		[theme.breakpoints.down('sm')]: {
			minHeight: "calc(100vh - 200px)"
		}
	},
	datePicker: {
		"& .MuiFormControl-root": {
			marginTop: "0",
			marginBottom: "0"
		},
		"& .MuiInputBase-root": {
			paddingRight: "0"
		},
		"& .MuiSvgIcon-root": {
			color: "white"
		},
		"& .MuiFormHelperText-root": {
			display: "none"
		}
	}
})

export default marketAuthStyle
