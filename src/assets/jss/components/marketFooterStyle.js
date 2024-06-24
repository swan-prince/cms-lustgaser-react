const marketFooterStyle = (theme) => ({
    footer: {
        background: "#0F1317",
        padding: "28px 80px 0",
        [theme.breakpoints.down('sm')]: {
            padding: "0 1rem"
        }
    },
    logo: {
        width: "116px",
        height: "102px",
        [theme.breakpoints.down('sm')]: {
            width: "72px",
            height: "64px"
        }
    },
    socialGroup: {
        marginTop: "40px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "24px",
        }
    },
    social: {
        color: "#1DB954",
        width: "50px",
        height: "50px",
        margin: "0 8px",
        background: "#707070",
        [theme.breakpoints.down('sm')]: {
            width: "40px",
            height: "40px"
        }
    },
    divider: {
        backgroundColor: "rgba(255,255,255, 0.1)",
        marginTop: "30px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "24px"
        }
    },
    copyText: {
        color: "white",
        "& p": {
            fontSize: "14px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "12px"
            }
        },
        padding: "30px 0",
        [theme.breakpoints.down('sm')]: {
            padding: "12px 0"
        }
    }
})

export default marketFooterStyle
