import React, { useState } from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from "assets/jss/views/admin/dashboardViewStyle"

const useStyles = makeStyles(styles)

const OrdersSection = () => {

  const classes = useStyles()

  const [date, setDate] = useState('today');

  const orders = [
    {
      title: "INV/20210828/1588 - Jonah’s",
      date: new Date(new Date().setDate(new Date().getDate() - 1)).toJSON().slice(0, 10),
      price: 150,
      status: "Approved"
    },
    {
      title: "INV/20210828/1588 - Jonah’s",
      date: new Date(new Date().setDate(new Date().getDate() - 1)).toJSON().slice(0, 10),
      price: 150,
      status: "Pending"
    },
    {
      title: "INV/20210828/1588 - Jonah’s",
      date: new Date().toJSON().slice(0, 10),
      price: 150,
      status: "Failed"
    },
    {
      title: "INV/20210828/1588 - Jonah’s",
      date: new Date().toJSON().slice(0, 10),
      price: 150,
      status: "Approved"
    },
    {
      title: "INV/20210828/1588 - Jonah’s",
      date: new Date().toJSON().slice(0, 10),
      price: 150,
      status: "Approved"
    },
  ]

  const [odersList, setOrdersList] = useState(orders.filter(item => item.date === new Date().toJSON().slice(0, 10)))

  const handleChange = (e) => {
    setDate(e.target.value)
    if (e.target.value === "today") {
      setOrdersList(orders.filter(item => item.date === new Date().toJSON().slice(0, 10)))
    } else {
      setOrdersList(orders.filter(item => item.date === new Date(new Date().setDate(new Date().getDate() - 1)).toJSON().slice(0, 10)))
    }
  }

  return (
    <Grid item lg={5} md={5} sm={12} xs={12}>
      <Box className={classes.ordersSection}>
        <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.orderTitleSection}>
          <Typography variant="body1">
            Order's today
          </Typography>
          <FormControl variant="filled" className={classes.formControl}>          
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={date}
              onChange={handleChange}
            >              
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="Yesterday">Yesterday</MenuItem>            
            </Select>
          </FormControl>
        </Box>

        {
          odersList.map((order,index) => (
            <Box className={classes.orderLine} key={index}>
              <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.orderDateLine}>
                <Typography variant="body1">
                  { order.title }
                </Typography>
                <Typography variant="body1">
                  { order.date }
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.orderPriceLine}>
                <Typography variant="body1">
                  { `$ ${order.price}` } 
                </Typography>
                <Box>
                  <Typography variant="body1" className={classNames(classes.approved, 
                    {
                      [classes.approved]: order.status === "Approved",
                      [classes.pending]: order.status === "Pending",
                      [classes.failed]: order.status === "Failed",
                    })}>
                    { order.status }
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))
        }                
      </Box>
    </Grid>
  )
}

export default OrdersSection
