const popularCategoryItemStyle = theme => ({
    card: {
        position: "relative",
        "& img": {
            width: "100%"
        },
        "& h3": {
            position: "absolute",
            color: 'white',
            fontSize: "40px",
            top: "50%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            [theme.breakpoints.down('sm')]: {
                fontSize: "1rem",
            }
        }
    }
})

export default popularCategoryItemStyle
