const breadcrumbStyle = (theme) => ({
  breadcrumb: {
		paddingTop: "116px",
		marginLeft: "80px",
		"& p": {
			color: "#1DB954",
			fontSize: "14px",
			zIndex: "1",
		},
		"& svg": {
			zIndex: "1",
			color: "#7B8794"
		},
		"& p:last-child": {
			color: "white"
		},
		[theme.breakpoints.down('sm')]: {
			paddingTop: "64px",
			marginLeft: "1rem",
		},
		"& a": {
			zIndex: "10",
			color: "#1DB954",
			fontSize: "14px",
		}
	}
})

export default breadcrumbStyle
