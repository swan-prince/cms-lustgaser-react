import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Button from "components/CustomForms/Button"
import TextField from "components/CustomForms/TextField"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"

import styles from "assets/jss/views/profileViewStyle.js"

const useStyles = makeStyles(styles)

const EditContactData = (props) => {

  const classes = useStyles()

  const { open, closeModal, contactData, handleUpdate } = props

  const [formData, setFormData] = useState(contactData)
  const [formErrors, setFormErrors] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateBtn = () => {
    setFormErrors({
      email: !formData.email,
      phone: !formData.phone
    })

    if (!!formData.email && !!formData.phone) {
      handleUpdate(formData)
    }
  }
 
  return (
    <CustomModal open={open} closeModal={closeModal} size="small">
      <ModalHeader title="Edit Contact Data" closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                labelText="Email"
                inputProps={{
                  type: "email",
                  fullWidth: true,
                  placeholder: "Input email",
                  defaultValue: formData.email,
                  name: "email",
                  onChange: handleChange
                }} 
                helperText="Email is required"
                error={formErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                labelText="Phone Number"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input phone number",
                  defaultValue: formData.phone,
                  name: "phone",
                  onChange: handleChange
                }} 
                error={formErrors.phone}
              />
            </Grid>
          </Grid>
        </Container>        
      </ModalContents>
      <Box className={classes.modalFooter} textAlign="right">
        <Button className={classes.cancelBtn} onClick={ closeModal }>
          Cancel
        </Button>
        <Button variant="contained" color="green" onClick={ () => handleUpdateBtn() }>
          Update Data
        </Button>
      </Box>
    </CustomModal>
  )
} 

export default EditContactData
