import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import CreateIcon from '@material-ui/icons/Create'

import { Box, Hidden } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import CustomButton from "components/CustomForms/Button"
import TextField from "components/CustomForms/TextField"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"
import RadioCard from "components/RadioCard"

import styles from "assets/jss/views/admin/staffViewStyle"
import userAvatar from "assets/img/user.png"
import defaultUser from "assets/img/empty_user.png"

const useStyles = makeStyles(styles)

const EditStaff = (props) => {

  const classes = useStyles() 

  const { open, closeModal, staff, isCreate, handleSubmit } = props

  const [gender, setGender] = useState("Male")

  const [formData, setFormData] = useState(staff)
  const [formErrors, setFormErrors] = useState({})
  const [avatar, setAvatar] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value)
    handleChange({target: {name: "gender", value: e.target.value}})
  }

  const handleClickAvatar = () => {
    document.getElementById("staff-avatar").click()
  }

  const handleSubmitBtn = () => {
    setFormErrors({
      name: !formData.name,    
      email: !formData.email,      
      phone: !formData.phone,
      address: !formData.address
    })
    if (!!formData.name && !!formData.email && !!formData.phone) {
      handleSubmit(formData)
    }
  }

  useEffect(() => {
    setFormErrors({})
    setFormData(isCreate ? {gender: "Male"} : staff) 
    setAvatar(null)   
  }, [handleSubmit, isCreate, staff])

  return (
    <CustomModal open={open} closeModal={closeModal} >
      <ModalHeader title={isCreate ? "Add New Staff" : "Edit Staff"} closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box width="100%" display="flex" mb={2} justifyContent="center" className={classes.avatarSection}>
                <input type="file" id="staff-avatar" onChange={(e) => setAvatar(e.target.files[0])} />
                <Box position="relative" width="96px" height="96px">
                  <img src={avatar ? URL.createObjectURL(avatar) : defaultUser} alt="User" width="100%" height="100%" />
                  <CustomButton variant="contained" color="green" onClick={handleClickAvatar}>
                    <CreateIcon />
                  </CustomButton>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Full Name"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input first name",
                  name: "name",
                  defaultValue: formData.name ?? "",
                  onChange: handleChange
                }}
                helperText="Full name is required"
                error={formErrors.name}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Email"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input phone number",
                  defaultValue: formData.email ?? "",
                  name: "email",
                  onChange: handleChange
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
                  defaultValue: formData.phone ?? "",
                  name: "phone",
                  onChange: handleChange
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
                  <RadioGroup name="shipping-method" value={gender} onChange={handleChangeGender}>                  
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
                  onChange={handleChangeGender}
                  className={classes.select}
                  fullWidth
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
                  defaultValue: formData.address ?? "",
                  onChange: handleChange,
                  name: "address"
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
                  placeholder: "Input apartment number, floor, etc(Optional)" ,
                  onChange: handleChange,
                  name: "apartment"               
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
                  endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>,
                  onChange: handleChange,
                  name: "password"
                }} 
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Confirm New Password"
                inputProps={{
                  type: "password",
                  fullWidth: true,
                  placeholder: "",
                  onChange: handleChange,
                  endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>,
                  name: "rePassword"
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
        <CustomButton variant="contained" color="green" onClick={ () => handleSubmitBtn() }>
          { isCreate ? "Save" : "Update" }
        </CustomButton>
      </Box>
    </CustomModal>
  )
}

export default EditStaff
