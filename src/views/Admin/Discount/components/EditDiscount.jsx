import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'

import Button from "components/CustomForms/Button"
import TextField from "components/CustomForms/TextField"
import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"
import RadioCard from "components/RadioCard"
import CustomDateField from "components/CustomForms/CustomDateField"

import styles from "assets/jss/views/admin/discountViewStyle"

const useStyles = makeStyles(styles)

const EditDiscount = (props) => {

  const classes = useStyles()

  const { open, closeModal, discount, isCreate, handleSubmit } = props

  const [cashback, setCashback] = useState("Dollar")
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [formData, setFormData] = useState(discount)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeType = (e) => {
    setCashback(e.target.value)
    handleChange({target: {name: "type", value: e.target.value}})
  }

  const handleChangeStart = (date) => {
    setStartDate(date)
    handleChange({target: {name: "startDate", value: date}})
  }
  const handleChangeEnd = (date) => {
    setEndDate(date)
    handleChange({target: {name: "endDate", value: date}})
  }

  const handleSubmitBtn = () => {
    setFormErrors({
      name: !formData.name,    
      amount: !formData.amount,      
      quota: !formData.quota,      
    })
    if (!!formData.name && !!formData.amount && !!formData.quota) {
      handleSubmit(formData)
    }
  }

  useEffect(() => {
    setFormErrors({})
    setFormData(isCreate ? {type: "Dollar"} : discount)   
    setStartDate(discount.startDate ?? null)
    setEndDate(discount.endDate ?? null)
    setCashback(discount.type ?? "Dollar")
  }, [handleSubmit, isCreate, discount])

  return (
    <CustomModal open={open} closeModal={closeModal}>
      <ModalHeader title={ isCreate ? "Add Discount" : "Edit Discount" } closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <TextField
                labelText="Name Voucher"
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input voucher name",
                  defaultValue: formData.name,
                  name: "name",
                  onChange: handleChange
                }}
                helperText="Name Voucher is required"
                error={formErrors.name}
              />
            </Grid>            
            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.dateField}>
              <Typography variant="body1" className={classes.radioLabel}>
                Period<span>*</span>
              </Typography>
              <Box display="flex" alignItems="center" className={classes.periodField}>
                <CustomDateField className={classes.period + " " + classes.startDate} onChange={ handleChangeStart } selectedDate={startDate} />
                <span>~</span>
                <CustomDateField className={classes.period} onChange={ handleChangeEnd } selectedDate={endDate} />
              </Box>              
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography variant="body1" className={classes.radioLabel}>
                Cashback Type<span>*</span>
              </Typography>             
              <FormControl component="fieldset">
                <RadioGroup name="type" value={cashback} onChange={handleChangeType}>                  
                  <Grid container className={classes.methodContainer}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <RadioCard option={{option: "Dollar"}} small selected={cashback === "Dollar"} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <RadioCard option={{option: "Percentage"}} small selected={cashback === "Percentage"} />
                    </Grid>                   
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Amount"
                className={classes.textFieldWithStart}
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input amount",
                  defaultValue: formData.amount,
                  name: "amount",
                  onChange: handleChange,
                  startAdornment: <InputAdornment position="start"><Button>$</Button></InputAdornment>,
                }} 
                helperText="Amount is required"
                error={formErrors.amount}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Minimun Order"
                className={classes.textFieldWithStart}
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input minimum",
                  defaultValue: formData.order,
                  name: "order",
                  onChange: handleChange,
                  startAdornment: <InputAdornment position="start"><Button>$</Button></InputAdornment>,
                }} 
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                labelText="Voucher Quota"               
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Quota Voucher",
                  defaultValue: formData.quota,
                  name: "quota",
                  onChange: handleChange,         
                }} 
                helperText="Quota Voucher is required"
                error={formErrors.quota}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                labelText="Description"                
                inputProps={{
                  type: "text",
                  fullWidth: true,
                  placeholder: "Input voucer description",
                  defaultValue: "",   
                  name: "description",
                  onChange: handleChange,                  
                }} 
              />
            </Grid>
          </Grid>
        </Container>
      </ModalContents>
      <Box className={classes.modalFooter} textAlign="right">
        <Button variant="simple" onClick={ closeModal }>
          Cancel
        </Button>
        <Button variant="contained" color="green" onClick={ () => handleSubmitBtn() }>
          { isCreate ? "Save" : "Update" }
        </Button>
      </Box>
    </CustomModal>
  )
}

export default EditDiscount
