import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'

import { Box, Hidden } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import Button from "components/CustomForms/Button"
import TextField from "components/CustomForms/TextField"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"
import RadioCard from "components/RadioCard"

import styles from "assets/jss/views/admin/userViewStyle"

const useStyles = makeStyles(styles)

const EditUser = (props) => {

  const classes = useStyles()
  
  const { open, closeModal, user, isCreate, handleSubmit } = props

  const [gender, setGender] = useState("Male")

  const [formData, setFormData] = useState(user)
  const [formErrors, setFormErrors] = useState({})

  const handleChanlge = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }

  const handleSubmitBtn = () => {
    setFormErrors({
      name: !formData.name,
      email: !formData.email,
      phone: !formData.phone,
      address: !formData.address,
      password: !formData.password,
      rePassword: !formData.rePassword
    })

    if (!!formData.name && !!formData.email && !!formData.phone && !!formData.address && !!formData.password && (formData.password === formData.rePassword)) {
      handleSubmit(formData)
    }
  }

  useEffect(() => {
    setFormErrors({})
    setFormData(user)
  }, [isCreate, handleSubmit])

  return (
    <CustomModal open={open} closeModal={closeModal} >
      <ModalHeader title={ isCreate ? "Add User" : "Edit User"} closeModal={closeModal} />
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
                  defaultValue: user.name ?? "",
                  onChange: handleChanlge,
                  name: "name"
                }}
                helperText="Full name is required"
                error={formErrors.name}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Email"
                inputProps={{
                  type: "email",
                  fullWidth: true,
                  placeholder: "Input phone number",
                  defaultValue: user.email ?? "",
                  onChange: handleChanlge,
                  name: "email"
                }} 
                helperText="Email is required"
                error={formErrors.email}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Phone"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input street name and number",
                  defaultValue: user.password ?? "",
                  onChange: handleChanlge,
                  name: "phone"
                }} 
                helperText="Phone is required"
                error={formErrors.phone}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography variant="body1" className={classes.radioLabel}>
                Gender <span>*</span>
              </Typography>
              <Hidden smDown>
                <FormControl component="fieldset">
                  <RadioGroup name="gender" value={gender} onChange={handleChangeGender}>                  
                    <Grid container className={classes.methodContainer}>
                      <Grid item lg={4} md={4}>
                        <RadioCard option={{option: "Male"}} small selected={gender === "Male"} />
                      </Grid>
                      <Grid item lg={4} md={4}>
                        <RadioCard option={{option: "Female"}} small selected={gender === "Female"} />
                      </Grid>
                      <Grid item lg={4} md={4}>
                        <RadioCard option={{option: "Others"}} small selected={gender === "Others"} />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Hidden>
              <Hidden mdUp>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={classes.select}
                  fullWidth
                  name="gender"
                >
                  <MenuItem value="Male">
                    Male
                  </MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </Hidden>              
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Street Address"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input street name and number",
                  defaultValue: user.address ?? "",
                  onChange: handleChanlge,
                  name: "address"
                }} 
                helperText="Street address is required"
                error={formErrors.address}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField               
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input apartment number, floor, etc(Optional)"                  
                }}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Password"
                inputProps={{
                  type: "password",
                  fullWidth: true,
                  placeholder: "",
                  defaultValue: "",
                  endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>,
                  onChange: handleChanlge,
                  name: "password"
                }} 
                helperText="Password is required"
                error={formErrors.password}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Repeat Password"
                inputProps={{
                  type: "password",
                  fullWidth: true,
                  placeholder: "",
                  defaultValue: "",
                  endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>,
                  onChange: handleChanlge,
                  name: "rePassword"
                }} 
                helperText="Repeat password is required"
                error={formErrors.rePassword}
              />
            </Grid>
          </Grid>
        </Container>        
      </ModalContents>
      <Box className={classes.modalFooter} textAlign="right">
        <Button variant="simple" className={classes.cancelBtn} onClick={ closeModal }>
          Cancel
        </Button>
        <Button variant="contained" color="green" onClick={ () => handleSubmitBtn() }>
          { isCreate ? "Save" : "Update" }
        </Button>
      </Box>
    </CustomModal>
  )
}
export default EditUser
