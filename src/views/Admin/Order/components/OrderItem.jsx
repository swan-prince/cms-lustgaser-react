import React, { useState } from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'

import { Box, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Custombutton from "components/CustomForms/Button"

import styles from "assets/jss/views/admin/orderViewStyle"

const useStyles = makeStyles(styles)

const OrderItem = (props) => {

  const classes = useStyles() 

  const { order, handleDelete, handleDelivery, handleOpenDetail } = props 

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.orderItem}>
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.actionsMenu}>
        <Typography variant="body1">
          { order.invoice }
        </Typography>
        <IconButton onClick={ handleClick }>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleOpenDetail(order.id)}>Detail</MenuItem>
          <MenuItem onClick={() => handleDelivery(order.id)}>Edit</MenuItem>
          <MenuItem onClick={() => handleDelete(order.id)}>Delete</MenuItem>
        </Menu>
      </Box>
      <Typography variant="body1">
        { order.date }
      </Typography>
      <Typography variant="body1">
        { order.billingName }
      </Typography>
      <Typography variant="body1">
        { order.payment }
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box className={classNames(
            classes.statusBadge,
            {
              [classes.approvedStatus]: order.status === "Approved",
              [classes.pendingStatus]: order.status === "Pending",
              [classes.failedStatus]: order.status === "Failed"
            }
          )}>
            { order.status }
        </Box>
        <Typography variant="body1" className={classes.orderPrice}>
          { order.total }
        </Typography>
      </Box>
      {
        order.status === "Pending" && 
        <Custombutton variant="contained" onClick={() => handleDelivery(order.id)} fullWidth color="green" startIcon={<LocalShippingIcon />}>
          Set Delivery
        </Custombutton>
      }
      
    </Box>
  )
}

export default OrderItem
