import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CloseIcon from '@material-ui/icons/Close'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import styles from "assets/jss/components/customModalStyle"

const useStyles = makeStyles(styles)

const ModalHeader = (props) => {

  const classes = useStyles()

  const { title, closeModal } = props

  return (
    <Box className={classes.modalHeader}>
      <Typography variant="h5" align="center">
        { title }
      </Typography>
      <IconButton size="small" className={classes.closeBtn} onClick={ closeModal }><CloseIcon /></IconButton>
    </Box>
  )
}

export default ModalHeader
