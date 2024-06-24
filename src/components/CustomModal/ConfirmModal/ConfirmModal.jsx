import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Button from "components/CustomForms/Button"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"

import styles from "assets/jss/components/customModalStyle"

const useStyles = makeStyles(styles)

const ConfirmModal = (props) => {

  const classes = useStyles()

  const { open, closeModal, confirmAction, text } = props

  return (
    <CustomModal open={open} closeModal={closeModal} size="small">
      <ModalHeader title="Confirmation" closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.confirmText}>
              {text}
            </Grid>            
          </Grid>
        </Container>              
      </ModalContents>
      <Box mt={2}>
        <Box className={classes.modalFooter} textAlign="center">
          <Button className={classes.cancelBtn} onClick={ closeModal }>
            Cancel
          </Button>
          <Button variant="contained" className={classes.roseBtn} onClick={ confirmAction }>
            Delete
          </Button>
        </Box>
      </Box>
    </CustomModal>
  )
}

export default ConfirmModal
