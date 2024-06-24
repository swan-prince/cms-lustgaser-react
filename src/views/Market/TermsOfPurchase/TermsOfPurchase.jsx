import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

import { Box, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import styles from "assets/jss/views/termsOfPurchaseViewStyle.js"

const useStyles = makeStyles(styles)

const TermsOfPurchase = () => {

  const classes = useStyles() 

  const [menu, setMenu] = useState({})
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const testTitle = "1 SECURE SOLUTION TERMS OF PURCHASE"
  const testDescription = `We only deliver these products to people who have reached the age of 18. By ordering, you certify that you are 18 years old and we reserve the right to refuse delivery if this is not the case.
  We do not claim that N2O should be used as a consumer product or medicine for pain or anything else, contact a doctor for help. Our products are aimed at the food industry and for baking enthusiasts.
  We are not a pharmaceutical company and do not produce / sell medical products. Please note that there are different restrictions regarding N2O in different countries, so you need to check what is allowed in your country before ordering. The products are disposable and have no right of return / withdrawal.
  1Secure Solution accepts no liability for inconvenience caused by circumstances beyond the control of 1 Secure Solution, such as war, war-like events, riots and riots, extreme weather conditions, disruption of public transport, general shortage of goods, export and import restrictions, legal regulation or other injunction by an authority in Sweden or abroad, strike, lockout, blockade or other obstacle to work, fire, explosion or other accident.
  1 Secure Solution reserves the right to change all information, including but not limited to, prices, technical specifications and product offerings without prior notice. Information and prices are provided with reservations for printing and typing errors, inaccuracies in specified technical specifications, suppliers' price increases and for final sales.
  `
  const termsOfPurchases = [
    {     
      menuTitle: "1 Secure Solution",
      title: testTitle,
      description: testDescription
    },
    {     
      menuTitle: "Agreement and Order",
      title: testTitle,
      description: testDescription
    },
    {      
      menuTitle: "Contact",
      title: testTitle,
      description: testDescription
    },
    { 
      menuTitle: "Driving Out and Driving Fee",
      title: testTitle,
      description: testDescription
    },
    {
      menuTitle: "Swish Payment",
      title: testTitle,
      description: testDescription
    },
    { 
      menuTitle: "Warranty Matters",
      title: testTitle,
      description: testDescription
    },
    {
      menuTitle: "Card Payment",
      title: testTitle,
      description: testDescription
    },
    {
      menuTitle: "Returns via Mail Order",
      title: testTitle,
      description: testDescription
    },
    {
      menuTitle: "Right of Withdrawal",
      title: testTitle,
      description: testDescription
    },
    {
      menuTitle: "Complaints",
      title: testTitle,
      description: testDescription
    },
    {
      menuTitle: "Delivery and Transport",
      title: testTitle,
      description: testDescription
    },
    {      
      menuTitle: "Delivery Time",
      title: testTitle,
      description: testDescription
    },
    {     
      menuTitle: "Shipping Cost",
      title: testTitle,
      description: testDescription
    },
    {     
      menuTitle: "Delivery and Transport",
      title: testTitle,
      description: testDescription
    }
  ] 

  useEffect(() => {
    setMenu(termsOfPurchases[0])
  }, [])

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.headerSection}>
        <Box className={classes.titleSection}>
          <Typography variant="h3" fontWeight={700} align="center">
            Terms of Purchase
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.contentSection}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Hidden smDown>
              <Grid item lg={3} md={3}>
                <Box className={classes.menuSection}>
                  <Typography variant="h6">
                    Terms of Purchase
                  </Typography>
                  {
                    termsOfPurchases.map((item, index) => (
                      <Typography 
                        variant="body1" 
                        key={index} 
                        className={classNames({[classes.menuActive]: item.menuTitle === menu.menuTitle})}
                        onClick={() => setMenu(item)}
                      >
                        {
                          item.menuTitle
                        }
                      </Typography>
                    ))
                  }                  
                </Box>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item sm={12}>
                <Box className={classes.mobileMenu}>
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <Box>
                      <Button className={classes.menuBtn} onClick={handleClick} endIcon={<FiberManualRecordIcon />}>
                        {
                          menu.menuTitle
                        }
                      </Button>
                      {
                        open ? (
                          <Box className={classes.mobileMenuWrapper}>
                            <Box className={classes.mobileMenuList}>
                              <Box>
                                {
                                  termsOfPurchases.map((item, index) => (
                                    <Button 
                                      className={classNames(classes.menuItem, {[classes.activeMobileMenu]: item.menuTitle === menu.menuTitle})} 
                                      fullWidth 
                                      key={index}
                                      onClick={() => setMenu(item)}
                                    >
                                      {
                                        item.menuTitle
                                      }
                                    </Button>
                                  ))
                                }
                              </Box>
                            </Box>
                          </Box>
                        ) : null
                      }                      
                    </Box>
                    
                  </ClickAwayListener>
                </Box>
              </Grid>
            </Hidden>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Box className={classes.content}>
                  <Typography variant="h3">
                    {
                      !!menu && menu.menuTitle
                    }
                  </Typography>
                  <Typography variant="body1">
                    {
                      !!menu && menu.description
                    }
                  </Typography>
              </Box>
            </Grid>            
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default TermsOfPurchase
