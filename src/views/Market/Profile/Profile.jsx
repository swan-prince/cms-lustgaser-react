import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Breadcrumb from "components/Breadcrumb"
import TabPanel from "./components/TabPanel"
import ProfileDataPanel from "./components/ProfileDataPanel"
import BillingInfoPanel from "./components/BillingInfoPanel"

import styles from "assets/jss/views/profileViewStyle.js"

const useStyles = makeStyles(styles)

const Profile = () => {

  const classes = useStyles()

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box className={classes.wrapper}>
      <Hidden smDown>        
        <Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: "Profile"}]}/>
      </Hidden>
      <Box className={classes.contentSection}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3">
                Profile
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Profile Data" />
                  <Tab label="Billing Information" />                  
                </Tabs>
              </AppBar>              
            </Grid>
            <Grid item xs={12}>
              <TabPanel value={value} index={0}>
                <ProfileDataPanel />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <BillingInfoPanel />
              </TabPanel>             
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Profile
