import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import InputLabel from "@material-ui/core/InputLabel"

import Button from "components/CustomForms/Button"
import TextField from "components/CustomForms/TextField"

import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"

import styles from "assets/jss/views/profileViewStyle.js"

const useStyles = makeStyles(styles)

const EditPersonalData = (props) => {

  const classes = useStyles()

  const { open, closeModal, handleUpdate, personalData } = props

  const [selectedDate, setSelectedDate] = useState(new Date(personalData.birthDay))
  const [formData, setFormData] = useState(personalData)
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
    handleChange({target: {name: "birthDay", value: date}})
  };

  const handleUpdateBtn = () => {
    setFormError({
      name: !formData.name,
      username: !formData.username
    })
    if (!!formData.name && !!formData.username) {
      handleUpdate(formData)
    }    
  }

  return (
    <CustomModal open={open} closeModal={closeModal} size="small">
      <ModalHeader title="Edit Personal Data" closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                labelText="Full Name"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input first name",
                  defaultValue: formData.name,
                  onChange: handleChange,
                  name: "name"
                }}
                helperText="Full name is required"
                error={formError.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                labelText="Username"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input username",
                  defaultValue: formData.username,
                  onChange: handleChange,
                  name: "username"
                }}
                helperText="Username is required"
                error={formError.username}
              />
            </Grid>
            <Grid item xs={12} className={classes.dateField}>
              <InputLabel htmlFor="birthday">
                Date of Birth
                <span>*</span>
              </InputLabel>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  id="date-picker-inline"
                  value={selectedDate ?? ""}
                  onChange={handleDateChange}
                  fullWidth
                  placeholder="YYYY/MM/DD"
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}                  
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </Container>
      </ModalContents>
      <Box className={classes.modalFooter} textAlign="right">
        <Button className={classes.cancelBtn} onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="contained" color="green" onClick={() => handleUpdateBtn()}>
          Update Data
        </Button>
      </Box>
    </CustomModal>
  )
}

export default EditPersonalData
