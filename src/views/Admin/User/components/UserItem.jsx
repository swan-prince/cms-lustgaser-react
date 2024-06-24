import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import { Box, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import styles from "assets/jss/views/admin/orderViewStyle"

const useStyles = makeStyles(styles)

const UserItem = (props) => {

  const classes = useStyles() 

  const { user, handleClickDetail, handleClickDelete, handleClickEdit } = props 

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
          { user.name }
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
          <MenuItem onClick={() => { handleClose(); handleClickDetail(user.id); }}>Detail</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleClickEdit(); }}>Edit</MenuItem>
          <MenuItem onClick={() => { handleClose(); handleClickDelete(user.id);}}>Delete</MenuItem>
        </Menu>
      </Box>
      <Typography variant="body1">
        { user.email }
      </Typography>
      <Typography variant="body1">
        { user.phone }
      </Typography>
      <Typography variant="body1">
        { user.address }
      </Typography>      
    </Box>
  )
}

export default UserItem
