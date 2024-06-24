import SaleBg from 'assets/img/product_sale.png'

const productItemStyle = theme => ({
    productCard: {
        position: "relative",
        backgroundColor: "#151B20",
        borderRadius: "8px",
        height: "100%",
        "& img": {
            width: "100%",
            cursor: "pointer"
        }
    },
    content: {
        padding: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            padding: "12px"
        }
    },
    title: {        
        color: "white",        
        fontSize: "24px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        }
    },
    price: {
        color: "#1DB954",
        fontSize: "20px",
        marginBottom: "20px",
        marginTop: "10px",
        "& span": {
            color: "#707070",
            textDecoration: "line-through",
            marginRight: theme.spacing(1)
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
            marginBottom: "10px",
            marginTop: "0px"
        }
    },
    sale: {
        position: "absolute",
        left: "1rem",
        top: "-8px",
        width: "50px",
        height: "60px",
        backgroundImage: `url(${SaleBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",        
        "& p": {
            color: "white",
            fontSize: "16px",
            lineHeight: "19px"
        },
        [theme.breakpoints.down("sm")]: {
            height: "48px",
            width: "38px",
            "& p": {
                fontSize: "12px",
                left: "4px"                
            }
        }
    },
    addBtn: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
            border: "0 !important",
            boxShadow: "none !important"
        }
    }
})

export default productItemStyle
