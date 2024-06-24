const productDetailViewStyle = theme => ({
  wrapper: {
		background: "#0F1317"
	},
	relatedProducts: {
		padding: "170px 80px 75px",
		[theme.breakpoints.down('sm')]: {
			padding: "24px 0px 60px"
		}
	},
	detailSection: {
		marginTop: "40px",
		padding: "0 80px",
		[theme.breakpoints.down('sm')]: {
			padding: "24px 0px"
		}
	},
	titleSection: {
		"& h3": {
			color: "#1DB954",
			fontSize: "32px",
			textTransform: "uppercase",
			marginBottom: theme.spacing(2),
			[theme.breakpoints.down('xs')]: {
					fontSize: "16px",
					marginBottom: theme.spacing(1),
			}
		}		
	},
	productImg: {
		"& img": {
			width: "100%",
			maxWidth: "600px",
			maxHeight: "400px",
			[theme.breakpoints.down('xs')]: {
				height: "360px"
			}
		}
	},
	imageList: {
		marginTop: "28px",		
		[theme.breakpoints.down('xs')]: {
			marginTop: "1rem",
			justifyContent: "unset",
		},
		"& img": {
			width: "calc((100% - 56px) / 3)",
			maxWidth: "190px",
			cursor: "pointer",
			[theme.breakpoints.down('xs')]: {
				width: "60px",
				height: "60px",
				marginRight: "12px"
			}
		}
	},
	productCard: {
		background: "#151B20",
		padding: "24px",
		borderRadius: "8px",
		[theme.breakpoints.down('sm')]: {
			background: "transparent",
			padding: "0",
			borderRadius: "0",
			marginTop: "12px"
		}
	},
	productTitle: {
		color: "white",
		fontSize: "44px",
		marginBottom: '40px',
		[theme.breakpoints.down('xs')]: {
			fontSize: "24px",
			marginBottom: "24px"
		}
	},
	discount: {
		color: "rgba(255,255,255, 0.6)",
		fontSize: "24px",
		textDecoration: "line-through",
		[theme.breakpoints.down('xs')]: {
			fontSize: "14px"
		}
	},
	price: {
		color: "#1DB954",
		fontSize: "48px",
		[theme.breakpoints.down('xs')]: {
			fontSize: "20px"
		}
	},
	detail: {
		marginTop: "20px",
		color: "rgba(255,255,255,0.8)",
		fontSize: "1rem",
		[theme.breakpoints.down('xs')]: {
			fontSize: "14px",
			marginTop: "1rem"
		}
	},
	counterSection: {
		padding: "0",
		marginBottom: "40px",
		marginTop: "40px",
		[theme.breakpoints.down('xs')]: {
			marginBottom: "24px",
			marginTop: "24px"
		}
	},
	label: {
		color: "rgba(255,255,255,0.8)",
		fontSize: "1rem",
		marginBottom: theme.spacing(1)
	},
	counterBtn: {
		marginTop: "0",
		marginBottom: "0",
		height: "32px",
		width: "32px",
		padding: "0"
	},
	count: {
		color: "white",
		width: "64px",
		"& p": {
			fontSize: "14px"
		}
	},
	subTotal: {
		fontSize: "24px",
		color: "#1DB954",
		lineHeight: "32px",
		[theme.breakpoints.down('xs')]: {
			fontSize: "20px"
		}
	},
	currency: {
		color: "#1DB954",
		fontSize: "36px",
		position: "absolute",
		top: "-15px",
		right: "-32px",
		[theme.breakpoints.down('xs')]: {
			fontSize: "20px",
			top: "-10px",
			right: "-20px"
		}
	},
	priceSection: {
		width: "fit-content"
	},
	activeGallery: {
		[theme.breakpoints.down('sm')]: {
			border: "1px solid #1DB954",
			borderRadius: "4px"
		}
	},
	productList: {
		[theme.breakpoints.down('sm')]: {
			overflowX: "auto",
			flexWrap: "nowrap",
			paddingBottom: "1rem",
			"&::-webkit-scrollbar": {
				height: "5px"
			},
			"&::-webkit-scrollbar-thumb": {
				background: "#151B20",
				borderRadius: "10px"
			}
		}
	}
})

export default productDetailViewStyle
