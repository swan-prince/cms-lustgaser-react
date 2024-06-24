import BannderBg from "assets/img/landing-hero.png"
import BannerMobileBg from "assets/img/landing-hero-mobile.png"
import ProductSectionBg from "assets/img/productBg.png"

const landingViewStyle = theme => ({
    section: {
        backgroundImage: `url(${BannderBg})`,
        width: "100%",
        height: "728px",
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
            maxHeight: "700px",
            backgroundImage: `url(${BannerMobileBg})`
        }
    },
    heroCenterImg: {
        position: "absolute",
        width: "288px",
        height: "184px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1",
        [theme.breakpoints.down('sm')]: {
            width: "120px",
            height: "105px"
        }
    },
    exploreMore: {
        color: "white",
        position: "absolute",
        bottom: "64px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "fit-content",
        [theme.breakpoints.down('sm')]: {
            bottom: "24px"
        },
        "& p": {
            fontSize: "24px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "16px"
            }
        }
    },
    popularCategorySection: {
        backgroundColor: "#0F1317",
        padding: "120px 80px",
        [theme.breakpoints.down('sm')]: {
            padding: "40px 0px 36px"
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
        }
    },
    productSection: {
        backgroundImage: `url(${ProductSectionBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        padding: "93px 80px 35px",
        position: "relative",
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
            padding: "24px 0px"
        }
    },
    zIndex1: {
        zIndex: "1"
    },
    seeAllProduct: {
        [theme.breakpoints.down('sm')]: {
            marginTop: "20px !important"
        }        
    },
    faqSection: {
        backgroundColor: "#0F1317",
        padding: "100px 80px 250px",
        [theme.breakpoints.down('sm')]: {
            padding: "24px 0px"
        }
    },   
    faqList: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        }
    },
    blogSection: {
        backgroundColor: "#0F1317",
        padding: "100px 80px 100px",
        [theme.breakpoints.down('sm')]: {
            padding: "24px 20px"
        }
    },
    blogList: {
        "& .react-multi-carousel-item": {
            transform: "scale(0.9)"
        },
        "& .react-multi-carousel-item--active": {
            transform: "none",
            "& .blogContent": {
                display: "block"
            }
        },
        "& .react-multiple-carousel__arrow--left": {
            backgroundColor: "white",
            left: "calc(22% + 1px)",
            width: "48px",
            height: "48px",
            minWidth: "unset",
            minHeight: "unset",
            top: "35%",
            "&:before": {
                color: "#307A2D",
            },
            [theme.breakpoints.down('sm')]: {
                left: "calc(16% + 1px)",                
                top: "33%",
                "&:before": {
                    fontSize: "14px",                    
                },
            },
            [theme.breakpoints.down('xs')]: {
                top: "18%",
                width: "24px",
                height: "24px",
            }
        },
        "& .react-multiple-carousel__arrow--right": {
            backgroundColor: "white",
            right: "calc(22% + 1px)",
            width: "48px",
            height: "48px",
            minWidth: "unset",
            minHeight: "unset",
            top: "35%",
            "&:before": {
                color: "#307A2D"
            },
            [theme.breakpoints.down('sm')]: {
                right: "calc(16% + 1px)",                
                top: "33%",                
                "&:before": {
                    fontSize: "14px"
                },
            },
            [theme.breakpoints.down('xs')]: {
                top: "18%",
                width: "24px",
                height: "24px",
            }
        }
    },
    blogItem: {
        paddingLeft: "40px",
        paddingRight: "40px",
        cursor: "pointer",
        "& img": {
            width: "100%",
            height: "100%",
            pointerEvents: "none"
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1px",
            paddingRight: "10px",
        }
    },
    blogContent: {
        textAlign: "left",
        display: "none",
        marginTop: "1rem",
        "& h6": {
            color: "#1DB954",
            fontSize: "20px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "14px"
            }
        },
        "& p": {
            color: "white",
            fontSize: "14px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "12px"
            }
        }
    }
})

export default landingViewStyle
