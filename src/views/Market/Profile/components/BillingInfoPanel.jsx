import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/Search';

import { Box, Button as UIButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from "components/CustomForms/Button"
import AddNewAddress from "./AddNewAddress"

import styles from "assets/jss/views/profileViewStyle.js"

const useStyles = makeStyles(styles)

const BillingInfoPanel = () => {

  const classes = useStyles()

  const [searchKey, setSearchKey] = useState("")
  const [openAddAddress, setOpenAddAddress] = useState(false)

  const addresses = [
    {
      id: 1,
      name: "Noah J Öberg",
      phone: "+1234567890",
      address: "Västergatan 31",
      zipcode: "Malmö, 211 21 "
    },
    {
      id: 2,
      name: "Noah J Öberg",
      phone: "+1234567890",
      address: "Västergatan 31",
      zipcode: "Malmö, 211 21 "
    },
    {
      id: 3,
      name: "Noah J Öberg",
      phone: "+1234567890",
      address: "Västergatan 31",
      zipcode: "Malmö, 211 21 "
    }
  ]

  const [billAddresses, setBillAddresses] = useState(addresses)
  const [results, setResults] = useState(billAddresses)
  const [isCreate, setIsCreate] = useState(true)
  const [addressId, setAddressId] = useState("")

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setResults(billAddresses.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    }
  }


  return (
    <>
      <Box className={classes.billingInfoSection}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between" className={classes.searchForm}>
                <OutlinedInput                                               
                  endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"             
                  labelWidth={0}
                  onChange={(e) => setSearchKey(e.target.value)}
                  onKeyPress={handleSearch}
                  placeholder="Search Address"
                />
                <Hidden smDown>
                  <Button variant="contained" color="green" onClick={() => {setIsCreate(true); setAddressId(""); setOpenAddAddress(true)}}>Add New Address</Button>
                </Hidden>              
              </Box>
            </Grid>
            {
              results.map(address => (
                <Grid item lg={4} md={4} sm={12} xs={12} className={classes.billingInfoCol} key={address.id}>
                  <Box className={classes.billingInfoField} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1">
                      {
                        `Billing Information ${address.id}`
                      }
                    </Typography>
                    {
                      address.id === 1 && 
                      <Box className={classes.badge}>
                        <Typography variant="body1">
                          primary
                        </Typography>
                      </Box>
                    }                    
                  </Box>
                  <Typography variant="body1" className={classes.textWhite}>
                    { address.name }
                  </Typography>
                  <Typography variant="body1">
                    { address.phone }
                  </Typography>
                  <Typography variant="body1">
                    { address.address }
                  </Typography>
                  <Typography variant="body1">
                    { address.zipcode }
                  </Typography>
                  <Box display="flex" justifyContent="space-around" className={classes.billingActions}>
                    <UIButton className={classes.billingDeleteBtn} onClick={() => {
                      setBillAddresses(billAddresses.filter(item => item.id !== address.id)); 
                      setResults(billAddresses.filter(item => item.id !== address.id))
                      setSearchKey("")
                    }}>
                      Delete
                    </UIButton>
                    <UIButton className={classes.billingUpdateBtn} onClick={() => {setIsCreate(false); setAddressId(address.id); setOpenAddAddress(true)}}>
                      Update
                    </UIButton>
                  </Box>
                </Grid>
              ))
            }                      
          </Grid>
        </Container>
      </Box>
      <Hidden mdUp>
        <Box mt={3}>
          <Button variant="contained" color="green" fullWidth onClick={() => {setIsCreate(true); setAddressId(""); setOpenAddAddress(true)}}>
            Add New Address
          </Button>
        </Box>
      </Hidden>
      <AddNewAddress 
        open={openAddAddress}
        closeModal={() => setOpenAddAddress(false)}
        isCreate={isCreate}
        defaultValue={isCreate ? {} : billAddresses.find(item => item.id === addressId)}
        handleSubmit={(address) => {          
          if (isCreate) {
            setBillAddresses([...billAddresses, {...address, id: billAddresses.length + 1}])
            setSearchKey("")
            setResults([...billAddresses, {...address, id: billAddresses.length + 1}])
          } else {
            let newBillAddresses = billAddresses
            newBillAddresses[addressId - 1] = address
            setBillAddresses(newBillAddresses)
            setResults(newBillAddresses.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
          }
          setOpenAddAddress(false)         
        }}
      />
    </>
  )
}

export default BillingInfoPanel
