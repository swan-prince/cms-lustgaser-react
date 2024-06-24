import React from 'react'
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles"

import { Button } from '@material-ui/core'

import styles from "assets/jss/components/buttonStyles.js"

const useStyles = makeStyles(styles)

const CustomIconButton = (props) => {

  const {		
		children,	
		className,
		muiClasses,	
		...rest
	} = props

  const classes = useStyles()

  const btnClasses = classNames(
    classes.iconButton,
    {
      [className]: className
    }
  )

  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  )
}

export default CustomIconButton
