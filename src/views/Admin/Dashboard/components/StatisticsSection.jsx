import React, { Fragment } from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'

import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import styles from "assets/jss/views/admin/dashboardViewStyle"

import TotalIncome from "assets/img/dashboard/total-income.png"
import ProductSold from "assets/img/dashboard/dropbox.png"
import SmartPhone from "assets/img/dashboard/smartphone 1.png"

const useStyles = makeStyles(styles)

const StatisticsSection = () => {

  const classes = useStyles()

  return (
    <Fragment>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className={classNames(classes.cardItem, classes.totalIncome)} display="flex" alignItems="center">
          <Box className={classNames(classes.cardImg, classes.totalIncomeImg)}>
            <img src={TotalIncome} alt="Total Income" />
          </Box>
          <Box>
            <Typography variant="body1" className={classes.cardTitle}>
              Total Income
            </Typography>
            <Typography variant="h6" className={classes.cardMark}>
              $1000
            </Typography>
            <Typography variant="body1">
              <span>
                <ArrowDownwardOutlinedIcon /> $1,020 
              </span>
              &nbsp;last month's income
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className={classNames(classes.cardItem, classes.averageSale)} display="flex" alignItems="center">
          <Box className={classNames(classes.cardImg, classes.averageSaleImg)}>
            <img src={SmartPhone} alt="Average Sale" />
          </Box>
          <Box>
            <Typography variant="body1" className={classes.cardTitle}>
              Average Sale
            </Typography>
            <Typography variant="h6" className={classes.cardMark}>
              $1000
            </Typography>           
          </Box>
        </Box>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className={classNames(classes.cardItem, classes.productSold)} display="flex" alignItems="center">
          <Box className={classNames(classes.cardImg, classes.productSoldImg)}>
            <img src={ProductSold} alt="Total Products Sold" />
          </Box>
          <Box>
            <Typography variant="body1" className={classes.cardTitle}>
              Total Products Sold
            </Typography>
            <Typography variant="h6" className={classes.cardMark}>
              1000 pcs
            </Typography>           
          </Box>
        </Box>
      </Grid>
    </Fragment>
  )
}

export default StatisticsSection
