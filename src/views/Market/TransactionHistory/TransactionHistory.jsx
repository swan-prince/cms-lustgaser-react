import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import Breadcrumb from "components/Breadcrumb"
import TransactionHistoryItem from "components/TransactionHistoryItem"
import TransactionDetail from "./components/TransactionDetail"

import styles from "assets/jss/views/transactionHistoryViewStyle"

const useStyles = makeStyles(styles)

const TransactionHistory = () => {

  const classes = useStyles()

  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [historyId, setHistroyId] = useState("")

  const histories = [
    {
      id: 1,
      date: "26 August 2021",
      number: "INV/20210828/1588",
      status: "Finished",
      products: [
        {
          id: 1,
          title: "Fast Gas 6 Pack Rabatterat!",
          price: 900,
          quantity: 2
        },
        {
          id: 2,
          title: "Fast Gas 3 Pack Rabatterat!",
          price: 400,
          quantity: 2
        }
      ],
      subTotal: "2600 kr",
      total: "2,800 kr"
    },
    {
      id: 2,
      date: "26 August 2021",
      number: "INV/20210828/1588",
      status: "In Delivery",
      products: [
        {
          id: 1,
          title: "Fast Gas 6 Pack Rabatterat!",
          price: 900,
          quantity: 2
        },
        {
          id: 2,
          title: "Fast Gas 3 Pack Rabatterat!",
          price: 400,
          quantity: 2
        }
      ],
      subTotal: "2600 kr",
      total: "2,800 kr"
    },
    {
      id: 3,
      date: "26 August 2021",
      number: "INV/20210828/1588",
      status: "Failed",
      products: [
        {
          id: 1,
          title: "Fast Gas 6 Pack Rabatterat!",
          price: 900,
          quantity: 2
        },
        {
          id: 2,
          title: "Fast Gas 3 Pack Rabatterat!",
          price: 400,
          quantity: 2
        }
      ],
      subTotal: "2600 kr",
      total: "2,800 kr"
    },
    {
      id: 4,
      date: "26 August 2021",
      number: "INV/20210828/1588",
      status: "In Delivery",
      products: [
        {
          id: 1,
          title: "Fast Gas 6 Pack Rabatterat!",
          price: 900,
          quantity: 2
        },
        {
          id: 2,
          title: "Fast Gas 3 Pack Rabatterat!",
          price: 400,
          quantity: 2
        }
      ],
      subTotal: "2600 kr",
      total: "2,800 kr"
    }
  ]

  const handleOpenDetail = (id) => {    
    setHistroyId(id); 
    setOpenDetailModal(true);
  }

  return (
    <Box className={classes.wrapper}>
      <Hidden smDown>        
        <Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: "Profile"}]}/>
      </Hidden>
      <Box className={classes.contentSection}>
        <Typography variant="h3" align="center" fontWeight={700}>
          Transaction History
        </Typography>
        <Container maxWidth="xl" className={classes.transactionContainer}>
          <Grid container spacing={3}>
            {
              histories.map((history, index) => (
                <Grid item lg={6} md={6} sm={12} xs={12} className={classes.pageTitle} key={index}>
                  <TransactionHistoryItem history={history} openModal={handleOpenDetail} />
                </Grid>
              ))
            }            
          </Grid>
        </Container>
      </Box>
      <TransactionDetail 
        open={openDetailModal} 
        closeModal={() => setOpenDetailModal(false)} 
        data={histories.find(item => item.id === parseInt(historyId)) ?? {}}
      />
    </Box>
  )
}

export default TransactionHistory
