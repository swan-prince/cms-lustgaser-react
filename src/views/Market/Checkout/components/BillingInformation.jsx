import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import TextField from "components/CustomForms/TextField"

import styles from "assets/jss/views/checkoutViewStyle"

const useStyles = makeStyles(styles)

const BillingInformation = (props) => {

  const classes = useStyles()

  const { changeAddress, handleChange, address, billInfoErrors } = props

  const [loggedIn, setLoggedIn] = useState(false) 

  useEffect(() => {        
    setLoggedIn(localStorage.getItem("loggedIn") === "loggedIn")
  })

  return (
    <Box className={classes.billingSection}>
      <Typography variant="h3">
        Billing Information
      </Typography>
      {
        !loggedIn ? (
          <Box className={classes.billingForm}>
            <Container>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField 
                    labelText="Full Name"
                    helperText="Full name is required"
                    error={billInfoErrors.fullname}
                    inputProps={{
                      type: "text",
                      fullWidth: true,
                      placeholder: "Input first name",
                      name: "fullname",
                      onChange: handleChange,                      
                    }} 
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField 
                    labelText="Email Address"
                    helperText="Email is required"
                    error={billInfoErrors.email}
                    inputProps={{
                      type: "email",
                      fullWidth: true,
                      placeholder: "Input email address",
                      name: "email",
                      onChange: handleChange
                    }} 
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField 
                    labelText="Street Address"
                    helperText="Street address is required"
                    error={billInfoErrors.address}
                    inputProps={{
                      type: "text",
                      fullWidth: true,
                      placeholder: "Input street name and number",
                      name: "address",
                      onChange: handleChange
                    }} 
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField                
                    inputProps={{
                      type: "text",
                      fullWidth: true,
                      placeholder: "Input apartment number, floor, etc (Optional)",
                      name: "addressLines",
                      onChange: handleChange
                    }} 
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField 
                    labelText="Phone"
                    helperText="phone is required"
                    error={billInfoErrors.phone}
                    inputProps={{                  
                      fullWidth: true,
                      placeholder: "Input phone",
                      name: "phone",
                      onChange: handleChange
                    }} 
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField 
                    labelText="Zip Code"
                    helperText="Zip code is required"
                    error={billInfoErrors.zipcode}
                    inputProps={{                  
                      fullWidth: true,
                      placeholder: "Input zip code",
                      name: "zipcode",
                      onChange: handleChange
                    }} 
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField 
                    labelText="Notes(optional)"
                    inputProps={{                  
                      fullWidth: true,
                      placeholder: "Input notes",
                      name: 'note',
                      onChange: handleChange
                    }} 
                  />
                </Grid>
              </Grid>
            </Container>        
          </Box>
        ) : (
          <Box className={classes.userBillingInfo}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5">
                { address.fullname }
              </Typography>
              <Button onClick={changeAddress}>
                Change
              </Button>
            </Box>
            <Typography variant="body1">
              { address.phone }
            </Typography>
            <Typography variant="body1">
              { address.address }
            </Typography>
            <Typography variant="body1">
              { address.zipcode }
            </Typography>
          </Box>
        )
      }
    </Box>
  )
}

export default BillingInformation
