import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import Button from "components/CustomForms/Button"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"

import styles from "assets/jss/components/customModalStyle"

const useStyles = makeStyles(styles)

const SetDeliveryModal = (props) => {

  const classes = useStyles()

  const { open, closeModal } = props

  return (
    <CustomModal open={open} closeModal={closeModal} size="small">
      <ModalHeader title="Set Delivery" closeModal={closeModal} />
      <Typography variant="body1" align="center" className={classes.subTitle}>
        Choose Delivery Staff
      </Typography>
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={10} md={10} sm={10} xs={10} className={classes.selectWrapper}>
              <Select                
                className={classes.customSelect}
                fullWidth
                defaultValue="Choose Staff"
              >
                <MenuItem value="Choose Staff">
                  Choose Staff
                </MenuItem>
                <MenuItem value="option 1">Option 1</MenuItem>
                <MenuItem value="option 2">Option 2</MenuItem>
              </Select>
            </Grid>            
          </Grid>
        </Container>              
      </ModalContents>
      <Box mt={2}>
        <Box className={classes.modalFooter} textAlign="center">
          <Button className={classes.cancelBtn} onClick={ closeModal }>
            Cancel
          </Button>
          <Button variant="contained" color="green" onClick={ closeModal }>
            Save
          </Button>
        </Box>
      </Box>
    </CustomModal>
  )
}

export default SetDeliveryModal
