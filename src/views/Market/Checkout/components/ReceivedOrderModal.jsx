import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { Box, Divider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import Button from "components/CustomForms/Button"

import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"

import { CartContext } from "context/CartContext"

import styles from "assets/jss/components/receivedOrderModalStyle"

const useStyles = makeStyles(styles)

const ReceivedOrderModal = (props) => {

  const classes = useStyles()

  const { open, closeModal, billInfo, shippingMethod, payment } = props

  const { cartItems, total } = useContext(CartContext) 

  return (
    <CustomModal open={open} closeModal={closeModal}>
      <ModalHeader title="Thank You! Your Order Has Been Received" closeModal={closeModal} />
      <ModalContents>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} className={classNames(classes.contentBlock, classes.invoiceSection)}>
              <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Box className={classes.invoiceLine}>
                    <Typography variant="body1">
                      Invoice Number
                    </Typography>
                    <Typography variant="body1">
                      INV/20210828/1588
                    </Typography>
                  </Box>
                </Grid>                
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Box className={classes.invoiceLine}>
                    <Typography variant="body1">
                      Date
                    </Typography>
                    <Typography variant="body1">
                      { new Date().toDateString() }
                    </Typography>
                  </Box>
                </Grid>
                <Hidden smDown>
                  <Grid item lg={4} md={4}>
                    <Box>
                      <Typography variant="body1">
                        Total Payment
                      </Typography>
                      <Typography variant="body1">
                      { `${ new Intl.NumberFormat().format(total + parseInt(shippingMethod.split(" ")[0])) } kr` }
                      </Typography>
                    </Box>
                  </Grid>
                </Hidden>
                
              </Grid>
            </Grid>

            <Grid item xs={12} className={classNames(classes.contentBlock, classes.orderListSection)}>
              <Typography variant="body1" className={classes.blockTitle}>
                Order List
              </Typography>
              {
                cartItems.map((item, index) => (
                  <Box key={index}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.orderLine}>
                      <Box>
                        <Typography variant="body1">
                          { item.title }
                        </Typography>
                        <Typography variant="body1">                         
                          { `${item.quantity} x ${new Intl.NumberFormat().format(item.price)} kr` }
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        { `${new Intl.NumberFormat().format(item.price * item.quantity)} kr` }
                      </Typography>
                    </Box>
                    {
                      (index !== (cartItems.length - 1)) && <Divider className={classes.divider}/>
                    }                    
                  </Box>
                ))
              }           
            </Grid>

            <Grid item xs={12} className={classNames(classes.contentBlock, classes.billingInfoSection)}>
              <Typography variant="body1" className={classes.blockTitle}>
                Billing Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12} className={classes.billingLeft}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">
                      Shipping Method
                    </Typography>
                    <Typography variant="body1">
                      { shippingMethod }
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">
                      Tracking Numer
                    </Typography>
                    <Typography variant="body1">
                      JT202108281132
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">
                      Notes
                    </Typography>
                    <Typography variant="body1">
                      -
                    </Typography>
                  </Box>
                </Grid>

                <Hidden mdUp>
                  <Grid item xs={12} className={classes.setPadding}>
                    <Divider className={classes.divider}/>
                  </Grid>                  
                </Hidden>

                <Grid item lg={6} md={6} sm={12} xs={12} className={classes.billingRight}>
                  <Typography variant="body1">
                    { billInfo.fullname }
                  </Typography>
                  <Typography variant="body1">
                    { billInfo.email }
                  </Typography>
                  <Typography variant="body1">
                    { billInfo.phone }
                  </Typography>
                  <Typography variant="body1">
                    { billInfo.address }
                  </Typography>
                  <Typography variant="body1">
                    { billInfo.zipcode }
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classNames(classes.contentBlock, classes.summarySection)}>
              <Typography variant="body1" className={classes.blockTitle}>
                Order Summary
              </Typography>
              <Box display="flex" justifyContent="space-between" className={classes.summaryLine}>
                <Typography variant="body1">
                  Payment Method
                </Typography>
                <Typography variant="body1">
                  { payment }
                </Typography>
              </Box>
              <Divider className={classes.divider}/>
              <Box display="flex" justifyContent="space-between" className={classes.summaryLine}>
                <Typography variant="body1">
                  Subtotal
                </Typography>
                <Typography variant="body1">
                  { `${ new Intl.NumberFormat().format(total) } kr` }
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" className={classes.summaryLine}>
                <Typography variant="body1">
                  Shipping Cost
                </Typography>
                <Typography variant="body1">
                  { `${ parseInt(shippingMethod.split(" ")[0]) } kr` }
                </Typography>
              </Box>
              <Divider className={classes.divider}/>
              <Box display="flex" justifyContent="space-between" className={classes.totalPayment}>
                <Typography variant="body1">
                  Total Payment
                </Typography>
                <Typography variant="body1">
                  { `${ new Intl.NumberFormat().format(total + parseInt(shippingMethod.split(" ")[0])) } kr` }
                </Typography>
              </Box>
            </Grid>
          </Grid>           
        </Container>
      </ModalContents>
      <Box className={classes.footer} textAlign="right">       
        <Button variant="contained" color="green" onClick={ closeModal }>
          Back to Home
        </Button>
      </Box>
    </CustomModal>    
  )
}

export default ReceivedOrderModal
