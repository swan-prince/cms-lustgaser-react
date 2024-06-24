import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Box } from '@material-ui/core'

import styles from "assets/jss/components/customModalStyle"

const useStyles = makeStyles(styles)

const CustomModal = (props) => {

  const classes = useStyles()

  const { open, closeModal, children, size } = props

  const classnames = classNames(
    classes.paper,
    {
      [classes.smallPaper]: size === "small"
    }
  )

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={ open }
      onClose={ closeModal }
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classnames}>
          {
            children
          }
        </Box>
      </Fade>
    </Modal>
  )
}

export default CustomModal
