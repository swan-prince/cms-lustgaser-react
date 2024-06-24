import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import DeleteIcon from '@material-ui/icons/Delete'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Button from "components/CustomForms/Button"

import styles from "assets/jss/components/cartItemStyle"

import { CartContext } from "context/CartContext"

const useStyles = makeStyles(styles)

const CartItem = (props) => {

  const classes = useStyles()

  const { cartItem } = props

  const { 
    itemCount,
    increase,
		decrease,
		removeProduct
  } = useContext(CartContext)	 

  return (
    <Box className={classes.cartItem + " " + "cartItem"} display="flex">
      <Box className={classes.product} display="flex">
        <Hidden smDown>
          <IconButton onClick={() => removeProduct(cartItem)}>
            <DeleteIcon />
          </IconButton>
        </Hidden>
        <img src={cartItem.image} alt="Product" />
        <Typography variant="body1">
          { cartItem.title }
        </Typography>
        <Hidden mdUp>
          <IconButton className={classes.deleteBtn} onClick={() => removeProduct(cartItem)}>
            <DeleteIcon />
          </IconButton>
        </Hidden>
      </Box>
      <Box className={classes.price} display="flex" alignItems="center" justifyContent="space-between">
        <Hidden mdUp>
          <Typography variant="body1">
            Price
          </Typography>
        </Hidden>
        <Typography variant="body1">
          { `${ new Intl.NumberFormat().format(cartItem.price) } kr` }
        </Typography>
      </Box>
      <Box className={classes.quantity} display="flex" alignItems="center">
        <Hidden mdUp>
          <Typography variant="body1" className={classes.fieldTitle}>
            Quantity
          </Typography>
        </Hidden>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button 
            variant="contained"
            className={classNames({[classes.disableBtn]: cartItem.quantity === 1})}
            color="green" 
            onClick={() => { cartItem.quantity > 1 && decrease(cartItem) }}
          >
            -
          </Button>
          <Typography variant="body1">
            { cartItem.quantity }
          </Typography>
          <Button variant="contained" color="green" 
            onClick={() => increase(cartItem)}
          >
            +
          </Button>
        </Box>
           
      </Box>
      <Box className={classes.total} display="flex" alignItems="center" justifyContent="space-between">
        <Hidden mdUp>
          <Typography variant="body1" className={classes.fieldTitle}>
            Subtotal
          </Typography>
        </Hidden>
        <Typography variant="body1">
          { `${ new Intl.NumberFormat().format(cartItem.quantity * cartItem.price) } kr` }
        </Typography>
      </Box>
    </Box>
  )
}

export default CartItem
