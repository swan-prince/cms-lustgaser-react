import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CustomButton from "components/CustomForms/Button"
import TextField from "components/CustomForms/TextField"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"

import styles from "assets/jss/views/admin/staffViewStyle"

const useStyles = makeStyles(styles)

const MessageStaff = (props) => {

  const classes = useStyles() 

  const { open, closeModal, name } = props

  return (
    <CustomModal open={open} closeModal={closeModal} size="small" >
      <ModalHeader title="Message Staff" closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography variant="body1" className={classes.selectedStaff}>
                Selected Staff: <span>{ name }</span>
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                labelText="Message"              
                inputProps={{
                  type: "text",
                  multiline: true,
                  rows: 4,
                  fullWidth: true,
                  placeholder: "Input your message to Patrick Moore",                  
                }} 
              />
            </Grid>            
          </Grid>
        </Container>        
      </ModalContents>
      <Box className={classes.modalFooter} textAlign="right">
        <CustomButton variant="simple" className={classes.cancelBtn} onClick={ closeModal }>
          Cancel
        </CustomButton>
        <CustomButton variant="contained" color="green" onClick={ closeModal }>
          Send
        </CustomButton>
      </Box>
    </CustomModal>
  )
}

export default MessageStaff
