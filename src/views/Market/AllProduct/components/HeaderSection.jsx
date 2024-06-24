import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import Breadcrumb from "components/Breadcrumb"
import Button from "components/CustomForms/Button"

import styles from "assets/jss/views/allProductViewStyle"

const useStyles = makeStyles(styles)

const HeaderSection = () => {

  const classes = useStyles() 
  
  return (
    <Box className={classes.headerSection}>      
      <Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: "All Products"}]}/>
      <Box className={classes.headerContents}>
        <Typography variant="body1">
          Vår senaste produkt
        </Typography>
        <Typography variant="h3">
          Fast Gas 6 Pack <br />Rabatterat!
        </Typography>
        <Button variant="contained" color="green">
          Buy Now
        </Button>
      </Box>      
    </Box>
  )
}

export default HeaderSection
