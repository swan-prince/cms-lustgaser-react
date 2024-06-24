import {
  whiteColor,
	greenColor,
	grayColor,
	roseColor,
	duskColor,
	hexToRgb,
	blackColor
} from "../mainStyle.js"

const buttonStyles = {
	button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: grayColor[0],
    color: whiteColor,
		textTransform: "none",
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.12)",
    border: "none",
    borderRadius: "4px",
    position: "relative",
    padding: "12px 26px",
    margin: ".3125rem 1px",
    fontSize: "1rem",
    fontWeight: "400",    
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "19px",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: whiteColor,
      backgroundColor: grayColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
	greenContained: {
    backgroundColor: greenColor,	
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(greenColor) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(greenColor) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(greenColor) +
      ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: greenColor,
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(greenColor) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(greenColor) +
        ", 0.2)"
    }
  },
	greenOutlined: {
		backgroundColor: "transparent",
		boxShadow: "none",
		border: `1px solid ${greenColor}`,
		color: greenColor,
		"&:hover,&:focus": {
			color: greenColor,
      backgroundColor: "transparent",
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(greenColor) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(greenColor) +
        ", 0.2)"
    }
	},
  iconButton: {
    padding: "0",
    minWidth: "0",
    width: "20px",
    height: "20px",
    margin: "0 4px",
    color: "white",
    backgroundColor: "#272D34",
    "& .MuiSvgIcon-root": {
      width: "10px",
      height: "10px",      
    }
  },
  simple: {
    backgroundColor: "transparent !important",
    color: "white",
    boxShadow: "none !important"
  },
  rose: {
    backgroundColor: `#FF4B4B !important`,
    color: "white"
  }
}

export default buttonStyles
