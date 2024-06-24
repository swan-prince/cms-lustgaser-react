import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'

import Breadcrumb from "components/Breadcrumb"
import RadioCard from "components/RadioCard"
import BillingInformation from "./components/BillingInformation"
import OrderListSection from "./components/OrderListSection"

import SelectAddressModal from "./components/SelectAddressModal"
import ReceivedOrderModal from "./components/ReceivedOrderModal"

import shippingMethod from "data/shippingMethod"

import styles from "assets/jss/views/checkoutViewStyle"

const useStyles = makeStyles(styles)

const addresses = [
  {
    id: 1,
    fullname: "Noah J Öberg1",
    description: "Exit Hässelby Spånga Botkyrka Danderyd Täby Nacka Lidingö and other surrounding municipalities",
    email: "noah@email.com",
    address: "address 1",
    phone: "+ 123 4567",
    zipcode: "3390"
  },
  {
    id: 2,
    fullname: "Noah J Öberg2",
    description: "Exit Hässelby Spånga Botkyrka Danderyd Täby Nacka Lidingö and other surrounding municipalities",
    email: "noah 2@email.com",
    address: "address 2",
    phone: "+ 123 4567",
    zipcode: "3390"
  },
  {
    id: 3,
    fullname: "Noah J Öberg3",
    description: "Exit Hässelby Spånga Botkyrka Danderyd Täby Nacka Lidingö and other surrounding municipalities",
    email: "noah 3@email.com",
    address: "address 3",
    phone: "+ 123 4567",
    zipcode: "3390"
  },
  {
    id: 4,
    fullname: "Noah J Öberg5",
    description: "Exit Hässelby Spånga Botkyrka Danderyd Täby Nacka Lidingö and other surrounding municipalities",
    email: "noah4@email.com",
    address: "address 5",
    phone: "+ 123 4567",
    zipcode: "3390"
  },
  {
    id: 5,
    fullname: "Noah J Öberg5",
    description: "Exit Hässelby Spånga Botkyrka Danderyd Täby Nacka Lidingö and other surrounding municipalities",
    email: "noah 5@email.com",
    address: "address 5",
    phone: "+ 123 4567",
    zipcode: "3390"
  },
  {
    id: 6,
    fullname: "Noah J Öberg1",
    description: "Exit Hässelby Spånga Botkyrka Danderyd Täby Nacka Lidingö and other surrounding municipalities",
    email: "noah 6@email.com",
    address: "address 6",
    phone: "+ 123 4567",
    zipcode: "3390"
  }
]

const Checkout = () => {

  const classes = useStyles()

  const [method, setShippingMethod] = useState(`${ new Intl.NumberFormat().format(shippingMethod[0].price) } kr`)
  const [billInfo, setBillInfo] = useState({})
  const [billInfoErrors, setBillInfoErros] = useState({})
  const [payment, setPayment] = useState("Swish App")
  const [address, setAddress] = useState(addresses[0].id)

  const [openAddressModal, setOpenAddressModal] = useState(false)  
  const [openReceivedModal, setOpenReceivedModal] = useState(false)

  const handleChangeMethod = (e) => {   
    setShippingMethod(e.target.value)
  }  

  const handleChangeBillInfo = (e) => {    
    setBillInfo({...billInfo, [e.target.name]: e.target.value})    
  }

  const handleOpenReceive = () => {

    if (localStorage.getItem("loggedIn") !== "loggedIn") {
      setBillInfoErros({
        fullname: !billInfo.fullname,
        email: !billInfo.email,
        address: !billInfo.address,
        phone: !billInfo.phone,
        zipcode: !billInfo.zipcode
      })
      if (!billInfo.fullname || !billInfo.email || !billInfo.address || !billInfo.phone || !billInfo.zipcode) {
        return;
      }            
    }
    setOpenReceivedModal(true)
  }

  return (
    <Box className={classes.wrapper}>
      <Hidden smDown>       
        <Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: "Cart", link: '/market/cart'}, {title: "Checkout"}]}/>
      </Hidden>
      <Box className={classes.contentSection}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3">
                Shipping Method
              </Typography>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box className={classes.shippingSection}>
                <FormControl component="fieldset">
                  <RadioGroup name="shipping-method" value={method} onChange={handleChangeMethod}>
                    <Container maxWidth="xl">
                      <Grid container className={classes.methodContainer}>
                        {
                          shippingMethod.map((item, index) => (
                            <Grid item lg={4} md={4} sm={12} xs={12} key={index} className={classes.methodItem}>
                              <RadioCard 
                                option={
                                  {
                                    ...item,
                                    option: `${ new Intl.NumberFormat().format(item.price) } kr`,                                    
                                  }} 
                                selected={method=== `${ new Intl.NumberFormat().format(item.price) } kr`} 
                              />
                            </Grid>
                          ))
                        }
                      </Grid>
                    </Container>
                  </RadioGroup>
                </FormControl>
                <Box display="flex" justifyContent="space-between" className={classes.shippingFooter}>
                  <Typography variant="body1">
                    Shipping Cost
                  </Typography>
                  <Typography variant="body1">
                    { method }
                  </Typography>
                </Box>
              </Box>                
              <BillingInformation 
                changeAddress={() => setOpenAddressModal(true)} 
                handleChange={handleChangeBillInfo} 
                address={addresses.find(item => item.id === address)}
                billInfoErrors={billInfoErrors}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <OrderListSection 
                receivedOrder={() => handleOpenReceive()} 
                shippingMethodValue={ method }
                payment={payment}
                setPayment={(e) => setPayment(e.target.value)}
              />
            </Grid>
          </Grid>
        </Container>        
      </Box>
      <SelectAddressModal 
        open={ openAddressModal }
        closeModal={ () => setOpenAddressModal(false) }
        addresses={ addresses }
        setAddress={(value) => setAddress(value)}
        address={address}
      />
      <ReceivedOrderModal 
        open={ openReceivedModal }
        closeModal={ () => setOpenReceivedModal(false) }       
        billInfo={localStorage.getItem("loggedIn") === "loggedIn" ? addresses.find(item => item.id === address) : billInfo}
        shippingMethod={method}
        payment={payment}
      />
    </Box>
  )
}

export default Checkout
