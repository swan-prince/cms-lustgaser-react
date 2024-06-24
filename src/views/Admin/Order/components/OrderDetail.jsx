import React from 'react'
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

import styles from "assets/jss/components/orderDetailModalStyle"

const useStyles = makeStyles(styles)

const OrderDetail = (props) => {

  const classes = useStyles()

  const { open, closeModal, order } = props

  return (
    <CustomModal open={open} closeModal={closeModal}>
      <ModalHeader title={ `Detail Order ${ order.invoice }` } closeModal={closeModal} />
      <Typography variant="body1" className={classes.orderDate} align="center">
        { order.date }
      </Typography>
      <ModalContents>
        <Container className={classes.container}>
          <Grid container>
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
                    { order.billingName }
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

            <Grid item xs={12} className={classNames(classes.contentBlock, classes.orderListSection)}>
              <Typography variant="body1" className={classes.blockTitle}>
                Order List
              </Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.orderLine}>
                <Box>
                  <Typography variant="body1">
                    Fast Gas 6 Pack Rabatterat!
                  </Typography>
                  <Typography variant="body1">
                    2 x 1.779 kr 
                  </Typography>
                </Box>
                <Typography variant="body1">
                  3.598 kr
                </Typography>
              </Box>
              <Divider className={classes.divider}/>
              <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.orderLine}>
                <Box>
                  <Typography variant="body1">
                    Fast Gas 3 Pack Rabatterat!
                  </Typography>
                  <Typography variant="body1">
                    1 x 999 kr
                  </Typography>
                </Box>
                <Typography variant="body1">
                  999 kr
                </Typography>
              </Box>
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
                  4.597 kr
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
                  4.797 kr
                </Typography>
              </Box>
            </Grid>
          </Grid>           
        </Container>
      </ModalContents>
      <Box className={classes.footer} textAlign="right">
        <Button onClick={closeModal} className={classes.closeBtn}>
          Close
        </Button>
        <Hidden smDown>
          <Button variant="contained" color="green" onClick={ closeModal }>
            Set Delivery
          </Button>
        </Hidden>        
      </Box>
    </CustomModal>    
  )
}

export default OrderDetail
