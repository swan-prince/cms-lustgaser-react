import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from "classnames"

import { Box } from '@material-ui/core'

import styles from "assets/jss/components/customModalStyle"

const useStyles = makeStyles(styles)

const ModalContents = (props) => {

  const classes = useStyles()

  const { children, className } = props

  return (
    <Box className={classNames(classes.modalContents, {[className]: className})} mt={3}>
      { children }
    </Box>
  )
}

export default ModalContents
