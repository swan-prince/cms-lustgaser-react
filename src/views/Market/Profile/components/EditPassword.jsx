import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'

import Button from "components/CustomForms/Button"
import TextField from "components/CustomForms/TextField"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"

import styles from "assets/jss/views/profileViewStyle.js"

const useStyles = makeStyles(styles)

const EditPassword = (props) => {
  const classes = useStyles()

  const { open, closeModal } = props

  const [passwords, setPasswords] = useState({old: "1234", new: "", confirm: ""})
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdate = () => {
    setFormErrors({
      old: !passwords.old,
      new: !passwords.new || passwords.new !== passwords.confirm,
      confirm: !passwords.confirm || passwords.new !== passwords.confirm
    })

    if (!!passwords.old && !!passwords.new && (passwords.new === passwords.confirm)) {
      closeModal()
    }
  }

  return (
    <CustomModal open={open} closeModal={closeModal} size="small">
      <ModalHeader title="Edit Password" closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                labelText="Old Password"
                inputProps={{
                  type: "password",
                  fullWidth: true,
                  placeholder: "Input old password",
                  defaultValue: passwords.old,
                  onChange: handleChange,
                  name: "old",
                  endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>
                }}
                helperText="Old password is required"
                error={formErrors.old}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                labelText="New Password"
                inputProps={{
                  type: "password",
                  fullWidth: true,
                  placeholder: "Input new password",
                  onChange: handleChange,
                  name: "new",
                  endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>
                }}
                helperText="New password is required"
                error={formErrors.new}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                labelText="Confirmation New Password"
                inputProps={{
                  type: "password",
                  fullWidth: true,
                  placeholder: "Input again new password",
                  name: "confirm",
                  onChange: handleChange,                  
                  endAdornment: <InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>
                }}  
                helperText="Confirm password is required"
                error={formErrors.confirm}              
              />
            </Grid>  
          </Grid>
        </Container>        
      </ModalContents>
      <Box className={classes.modalFooter} textAlign="right">
        <Button className={classes.cancelBtn} onClick={ closeModal }>
          Cancel
        </Button>
        <Button variant="contained" color="green" onClick={ () => handleUpdate() }>
          Update Data
        </Button>
      </Box>
    </CustomModal>
  )
} 

export default EditPassword
