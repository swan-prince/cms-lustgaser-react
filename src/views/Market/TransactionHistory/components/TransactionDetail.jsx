import React, { useState, useEffect } from 'react'
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

import styles from "assets/jss/components/transactionDetailsStyle"

const useStyles = makeStyles(styles)

const TransactionDetail = (props) => {

  const classes = useStyles()
  
  const { open, closeModal, data } = props

  const [history, setHistory] = useState({})

  useEffect(() => {    
    setHistory(data)
  }, [open])
  return (
    <CustomModal open={open} closeModal={closeModal} >
      <ModalHeader title="Transaction Details" closeModal={closeModal} />
      <ModalContents>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} className={classNames(classes.contentBlock, classes.invoiceSection)}>
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box className={classes.invoiceLine}>
                    <Typography variant="body1">
                      Invoice Number
                    </Typography>
                    <Typography variant="body1">
                      { history.number }
                    </Typography>
                  </Box>
                </Grid>                
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box className={classes.invoiceLine}>
                    <Typography variant="body1">
                      Date
                    </Typography>
                    <Typography variant="body1">
                      { history.date }
                    </Typography>
                  </Box>
                </Grid>                
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box className={classes.invoiceLine}>
                    <Typography variant="body1">
                      Total Payment
                    </Typography>
                    <Typography variant="body1">
                      { history.total }
                    </Typography>
                  </Box>
                </Grid> 
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box className={classes.invoiceLine}>
                    <Typography variant="body1">
                      Status
                    </Typography>
                    <Typography variant="body1">
                      { history.status }
                    </Typography>
                  </Box>
                </Grid>                         
              </Grid>
            </Grid>

            <Grid item xs={12} className={classNames(classes.contentBlock, classes.orderListSection)}>
              <Typography variant="body1" className={classes.blockTitle}>
                Order List
              </Typography>
              {
                !!history.products && history.products.map((item, index) => (
                  <Box key={index}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.orderLine}>
                      <Box>
                        <Typography variant="body1">
                          {item.title}
                        </Typography>
                        <Typography variant="body1">
                          { `${item.quantity} x ${item.price}` }
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        { `${ item.quantity * item.price } kr` }
                      </Typography>
                    </Box>
                   { index !== (history.products.length - 1) && <Divider className={classes.divider}/>}
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
                      Type 1
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
                    Noah J Öberg
                  </Typography>
                  <Typography variant="body1">
                    noahjo@email.com
                  </Typography>
                  <Typography variant="body1">
                    +1234567890
                  </Typography>
                  <Typography variant="body1">
                    Västergatan 31
                  </Typography>
                  <Typography variant="body1">
                    Malmö, 211 21 
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
                  Card Payment
                </Typography>
              </Box>
              <Divider className={classes.divider}/>
              <Box display="flex" justifyContent="space-between" className={classes.summaryLine}>
                <Typography variant="body1">
                  Subtotal
                </Typography>
                <Typography variant="body1">
                  { history.subTotal }
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" className={classes.summaryLine}>
                <Typography variant="body1">
                  Shipping Cost
                </Typography>
                <Typography variant="body1">
                  200 kr
                </Typography>
              </Box>
              <Divider className={classes.divider}/>
              <Box display="flex" justifyContent="space-between" className={classes.totalPayment}>
                <Typography variant="body1">
                  Total Payment
                </Typography>
                <Typography variant="body1">
                  { history.total }
                </Typography>
              </Box>
            </Grid>
          </Grid>           
        </Container>
      </ModalContents>
      <Hidden mdUp>
        <Box className={classes.footer} mt={2}>
          <Button variant="contained" color="green" fullWidth onClick={closeModal}>Close</Button>
        </Box>
      </Hidden>      
    </CustomModal>
  )
}

export default TransactionDetail
