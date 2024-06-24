const faqItemStyle = (theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        color: "white",
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    header: {
        "& p": {
            color: "#1DB954",
            fontSize: "1rem"
        }
    },
    faq: {
        border: "1px solid #1DB954",
        background: "#141A1F",        
        boxShadow: "none",
        marginBottom :"20px",
        marginLeft: "12px",
        marginRight: "12px"
    },
    content: {
        "& p": {
            color: "white"
        }
    },
    textWhite: {
        "& p": {
            color: "white"
        }        
    },
    nonBorder: {
        border: "0"
    }
})

export default faqItemStyle
