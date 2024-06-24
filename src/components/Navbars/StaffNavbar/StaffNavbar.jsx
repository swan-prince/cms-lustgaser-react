import React, { useState, Fragment } from 'react'
import classNames from "classnames";
import { useHistory } from "react-router-dom"

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import NotificationsIcon from '@material-ui/icons/Notifications'

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton'
import { Box } from '@material-ui/core'
import Button from 'components/CustomForms/Button'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'

import userAvatar from "assets/img/checkout/user.png"
import logo from "assets/img/footer-logo.png"
import styles from "assets/jss/components/adminNavbarStyle"

const useStyles = makeStyles(styles)

const StaffNavbar = (props) => {

  const classes = useStyles()

  const history = useHistory()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <AppBar position="sticky" className={classNames({ [classes.navbar]: true, [classes.staffNav]: true })}>
        <Toolbar>
          <Fragment>
            <img src={logo} alt='logo' className={classes.stafLogo} />
            <Box className={classes.grow} />
            <IconButton className={classes.cartBtn} onClick={() => history.push('/admin/notification')}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button
              className={classes.loggedBtn}
              onClick={handleOpenMenu}
            >
              <img src={userAvatar} alt="Avatar" width="52px" height="52" />
              Noah J Öberg
              <KeyboardArrowDownIcon />
            </Button>
          </Fragment>         
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            className={classes.profileMenu}
          >
            <MenuItem onClick={() => history.push('/admin/profile')}>Profile</MenuItem>
            <MenuItem onClick={() => { }}>Transaction History</MenuItem>
            <MenuItem onClick={() => { }}>Logout</MenuItem>
          </Popover>
        </Toolbar>
      </AppBar>         
    </Fragment>
  )
}

export default StaffNavbar
