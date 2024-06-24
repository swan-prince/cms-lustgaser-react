import React from 'react'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

import Button from "@material-ui/core/Button"

import styles from "assets/jss/components/buttonStyles.js"

const useStyles = makeStyles(styles)

const CustomButton = (props) => {

	const classes = useStyles()
	
	const {
		color,
		round,
		children,
		fullWidth,				
		className,
		muiClasses,		
		variant,    
		...rest
	} = props

	const btnClasses = classNames({
    [classes.button]: true,
    [classes.greenContained]: (variant === "contained") && (color === "green"),
		[classes.greenOutlined]: (variant === "outlined") && (color === "green"),
    [classes[color]]: color,
    [classes.round]: round,
		[classes.fullWidth]: fullWidth,
    [classes.simple]: variant === "simple",
    [className]: className
  });

	return (
		<Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
	)
}

CustomButton.propTypes = {
  color: PropTypes.oneOf([
    "green",
    "white",
    "rose",
    "black"    
  ]), 
  simple: PropTypes.bool,
  round: PropTypes.bool,
	outlined: PropTypes.bool,
	contained: PropTypes.bool,
	fullWidth: PropTypes.bool,
	variant: PropTypes.oneOf([
    "simple",
    "outlined",
    "contained"   
  ]),
  className: PropTypes.string,
  muiClasses: PropTypes.object,
  children: PropTypes.node
};

export default CustomButton
