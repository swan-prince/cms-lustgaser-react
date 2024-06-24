import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import { Box, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import styles from "assets/jss/views/admin/staffViewStyle"

const useStyles = makeStyles(styles)

const StaffItem = (props) => {

  const classes = useStyles() 

  const { staff, handleDelete, handleEdit, handleSendMessage } = props

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.staffItem}>
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.actionsMenu}>
        <Typography variant="body1">
          { staff.name }
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
          <MenuItem onClick={() => { handleClose(); handleEdit(staff.id); }}>Edit</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleDelete(staff.id);}}>Delete</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleSendMessage(staff.id);}}>Message</MenuItem>
        </Menu>
      </Box>
      <Typography variant="body1">
        { staff.email }
      </Typography>
      <Typography variant="body1">
        { staff.phone }
      </Typography>      
    </Box>
  )
}

export default StaffItem
