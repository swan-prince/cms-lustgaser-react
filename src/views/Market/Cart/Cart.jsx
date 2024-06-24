import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from "react-router-dom"

import InfoIcon from '@material-ui/icons/Info';

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'

import Breadcrumb from "components/Breadcrumb"
import CartItem from "components/CartItem"
import Button from "components/CustomForms/Button"

import styles from "assets/jss/views/cartViewStyle"

import { CartContext } from "context/CartContext"

import discount from "assets/img/cart/discount.png"

const useStyles = makeStyles(styles)

const Cart = () => {

  const classes = useStyles()

  const history = useHistory() 

  const { cartItems, itemCount, total } = useContext(CartContext)

  return (
    <Box className={classes.wrapper}>
      <Hidden smDown>       
        <Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: "Cart"}]}/>
      </Hidden>
      <Box className={classes.contentSection}>
        <Box className={classes.titleSection}>
          <Typography variant="h3" align="center">
            CART
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet.
          </Typography>
        </Box>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box className={classes.productsSection}>
                <Hidden smDown>
                  <Box display="flex" justifyContent="space-between" className={classes.fields} pb={2}>
                    <Box className={classes.productField}>
                      <Typography variant="body1">
                        PRODUCT
                      </Typography>
                    </Box>
                    <Box className={classes.priceField}>
                      <Typography variant="body1">
                        PRICE
                      </Typography>
                    </Box>
                    <Box className={classes.quantityField}>
                      <Typography variant="body1">
                        QUANTITY
                      </Typography>
                    </Box>
                    <Box className={classes.totalField}>
                      <Typography variant="body1">
                        TOTAL
                      </Typography>
                    </Box>
                  </Box>
                </Hidden>                
                {
                  cartItems.map((item, index) => (
                    <CartItem key={index} cartItem={item} />
                  ))
                }                
              </Box>
            </Grid>

            <Hidden mdUp>
              <Grid item xs={12}>
                <Box className={classes.discountSection}>
                  <OutlinedInput
                    fullWidth
                    placeholder="Discount code"
                    startAdornment={
                      <InputAdornment position="start">
                        <img src={discount} alt="Discount" />
                      </InputAdornment>
                    }                    
                  />
                  <Button variant="contained" color="green" fullWidth>
                    Use Discount Code
                  </Button>
                </Box>
              </Grid>
              
            </Hidden>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className={classes.summarySection}>
                <Typography variant="body1" className={classes.summaryTitle}>
                  Order Summary
                </Typography>
                <Box display="flex" justifyContent="space-between" className={classes.totalSection}>
                  <Typography variant="body1">
                    Item(s) Total
                  </Typography>
                  <Typography variant="body1">
                    { `${ itemCount} Items`}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.subTotal}>
                  <Typography variant="body1">
                    Subtotal
                  </Typography>
                  <Typography variant="body1">                    
                    { `${ new Intl.NumberFormat().format(total) } kr` }
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" className={classes.note}>
                  <InfoIcon />
                  <Typography variant="body1">                    
                    With this purchase you get 
                    <span>{ ` ${ new Intl.NumberFormat().format(total) } kr ` }</span> 
                    loyalty points!
                  </Typography>
                </Box>
                <Divider />
                <Button variant="contained" color="green" fullWidth onClick={() => history.push('/market/checkout')}>
                  Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  ) 
}

export default Cart
