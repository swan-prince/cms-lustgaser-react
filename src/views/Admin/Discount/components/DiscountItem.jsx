import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import { Box, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import styles from "assets/jss/views/admin/discountViewStyle"

const useStyles = makeStyles(styles)

const DiscountItem = (props) => {

  const classes = useStyles() 

  const { discount, handleDelete, handleEdit } = props 

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.discountItem}>
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.actionsMenu}>
        <Typography variant="body1">
          { discount.name }
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
          <MenuItem onClick={() => { handleClose(); }}>Detail</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleEdit(discount.id); }}>Edit</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleDelete(discount.id);}}>Delete</MenuItem>
        </Menu>
      </Box>
      <Typography variant="body1">
        { discount.type }
      </Typography>
      <Typography variant="body1">
        { discount.amount }
      </Typography>
      <Typography variant="body1">
        { discount.period }
      </Typography>
      <Typography variant="body1">
        { discount.quota }
      </Typography>
    </Box>
  )
}

export default DiscountItem
