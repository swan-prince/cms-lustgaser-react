import React, { useState, useEffect } from 'react'
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

const AddNewAddress = (props) => {

  const classes = useStyles()

  const { open, closeModal, isCreate, defaultValue, handleSubmit } = props  
  const [formData, setFormData] = useState(isCreate ? {} : defaultValue)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setFormErrors({
      name: !formData.name,
      phone: !formData.phone,
      address: !formData.address,
      zipcode: !formData.zipcode
    })    
    if (!!formData.name && !!formData.phone && !!formData.address && !!formData.zipcode) {
      
      handleSubmit(formData)
    }
  }

  useEffect(() => {   
    setFormData(defaultValue) 
    setFormErrors({})
  }, [isCreate, defaultValue])

  return (
    <CustomModal open={open} closeModal={closeModal} >
      <ModalHeader title="Add New Address" closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Full Name"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input first name",
                  defaultValue: formData.name ?? "",
                  onChange: handleChange,
                  name: "name"
                }}                
                helperText="Name is required"
                error={formErrors.name}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Phone"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input phone number",
                  onChange: handleChange,
                  name: "phone",
                  defaultValue: formData.phone ?? ""
                }} 
                helperText="Phone is required"
                error={formErrors.phone}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Street Address"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input street name and number",
                  onChange: handleChange,
                  name: "address",
                  defaultValue: formData.address ?? ""
                }} 
                helperText="Street Address is required"
                error={formErrors.address}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField               
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input apartment number, floor, etc(Optional)",
                  defaultValue: formData.apartment ?? ""                  
                }} 
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Zipcode"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input zip code",
                  onChange: handleChange,
                  name: "zipcode",
                  defaultValue: formData.zipcode ?? ""
                }} 
                helperText="Zipcode is required"
                error={formErrors.zipcode}
              />
            </Grid>
          </Grid>
        </Container>
      </ModalContents>
      <Box className={classes.modalFooter} textAlign="right">
        <Button className={classes.cancelBtn} onClick={ closeModal }>
          Cancel
        </Button>
        <Button variant="contained" color="green" onClick={ () => handleSave() } >
          Save
        </Button>
      </Box>
    </CustomModal>
  )
}

export default AddNewAddress
