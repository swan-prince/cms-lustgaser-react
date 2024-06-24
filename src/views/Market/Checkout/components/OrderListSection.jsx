import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import InfoIcon from '@material-ui/icons/Info'

import { Box, Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from "components/CustomForms/Button"
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import styles from "assets/jss/views/checkoutViewStyle"
import discount from "assets/img/cart/discount.png"
import swish from "assets/img/checkout/swich.png"
import reepay from "assets/img/checkout/reepay.png"

import { CartContext } from "context/CartContext"

const useStyles = makeStyles(styles)

const OrderListSection = (props) => {

  const classes = useStyles()

  const { receivedOrder, shippingMethodValue, setPayment, payment } = props

  const [checked, setChecked] = useState(false)
  
  const { cartItems, total } = useContext(CartContext)  

  const getTotalPayment = () => {
    return total + parseInt(shippingMethodValue.split(" ")[0])
  }

  return (
    <Box className={classes.orderList}>
      <Typography variant="h6">
        Order List
      </Typography>
      {
        cartItems.map((order, index) => (
          <Box className={classes.orderItem} key={index}>
            <Typography variant="body1">
              { order.title }
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1">
                { `${order.quantity} items` }
              </Typography>
              <Typography variant="body1">
                { `${ new Intl.NumberFormat().format(order.price) } kr` }
               </Typography>
            </Box>
          </Box>
        ))
      }
      <Divider />
      <Typography variant="h6">
        Discount Code
      </Typography>
      <Box className={classes.discount} display="flex" justifyContent="space-between">
        <OutlinedInput
          placeholder="Discount code"
          startAdornment={
            <InputAdornment position="start">
              <img src={discount} alt="Discount" />
            </InputAdornment>
          }                    
        />
        <Button variant="contained" color="green">
          Use Code
        </Button>
      </Box>
      <Typography variant="h6">
        Payment Method
      </Typography>
      
      <FormControl component="fieldset">
        <RadioGroup name="shipping-method" value={ payment } onChange={setPayment}>
          <Container className={classes.paymentMethodContainer}>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={6} xs={6} className={classNames(classes.paymentMethod, {[classes.activePayment]: payment === "Swish App"}) }>
                <FormControlLabel value="Swish App" control={<Radio />} label={
                  <Box display="flex" alignItems="center">
                    <img src={swish} alt="Swish App" />
                    <Hidden smDown>
                      <Typography variant="body1">
                        Swish App
                      </Typography>
                      <InfoIcon />
                    </Hidden>                    
                  </Box>
                } />
              </Grid>
              <Grid item lg={12} md={12} sm={6} xs={6} className={classNames(classes.paymentMethod, {[classes.activePayment]: payment === "Strapi payment"}) }>
                <FormControlLabel value="Strapi payment" control={<Radio />} label={
                  <Box display="flex">
                    {/* <img src={reepay} alt="Swish" /> */}
                    <Hidden smDown>
                      <Typography variant="body1">
                        Strapi payment
                      </Typography>
                    </Hidden>        
                  </Box>
                } />
              </Grid>
            </Grid>        
          </Container>           
        </RadioGroup>
      </FormControl>

      <Divider />

      <Typography variant="h6">
        Order Summary
      </Typography>

      <Box display="flex" justifyContent="space-between" className={classes.sumaryLine}>
        <Typography variant="body1">
          Subtotal
        </Typography>
        <Typography variant="body1">
        { `${ new Intl.NumberFormat().format(total) } kr` }
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" className={classes.sumaryLine}>
        <Typography variant="body1">
          Shipping Cost
        </Typography>
        <Typography variant="body1">
         { shippingMethodValue }
        </Typography>
      </Box>

      <Divider className={ classes.setMargin} />
      <Box display="flex" justifyContent="space-between" className={classes.totalPayment}>
        <Typography variant="body1">
          Total Payment
        </Typography>
        <Typography variant="body1">
        { `${ new Intl.NumberFormat().format(getTotalPayment()) } kr` }
        </Typography>
      </Box>

      <Divider className={ classes.setMargin} />

      <FormControlLabel
        className={classes.checkBox}
        control={<Checkbox checked={checked} onChange={(e) =>setChecked(e.target.checked)} name="checkedA" />}
        label={<Typography>I have read and hereby accept the terms of <Link>purchase terms</Link> </Typography>}
      />

      <Typography variant="body1" className={classes.footerText} align="center">
        Order & Create Account
      </Typography>

      <Button variant="contained" color="green" fullWidth onClick={receivedOrder}>
        Only Order
      </Button>
    </Box>
  )
}

export default OrderListSection
