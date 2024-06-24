import React from 'react'
import ChartistGraph from "react-chartist"

import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import StatisticsSection from "./components/StatisticsSection"
import OrdersSection from "./components/OrdersSection"

import styles from "assets/jss/views/admin/dashboardViewStyle"

const useStyles = makeStyles(styles)

const Dashboard = () => {

  const classes = useStyles()

  const simpleLineChartData = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    series: [
      [600, 900, 700, 800, 600, 800, 900, 1000], 
      [700, 800, 600, 700, 800, 900, 700, 1000]
    ]
  };
  var lineChartOptions = {
    low: 500,
    showArea: true,
    axisY: {    
      labelInterpolationFnc: function(value) { 
        return value.toFixed(3)
      }
    },
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 30
    },   
    high: 1100,
    fullWidth: true,
  };

  return (  
    <Grid container spacing={3}>
      <StatisticsSection />
      <Grid item lg={7} md={7} sm={12} xs={12}>
        <Box className={classes.chartSection}>
          <Typography variant="h3">
            Net Income
          </Typography>
          <Typography variant="body1">
            Nulla leo nec dictum tincidunt mus odio non.
          </Typography>
          <Box className={classes.chartist}>
            <ChartistGraph
              className={"ct-octave"}
              data={simpleLineChartData}
              type={"Line"}
              options={lineChartOptions}            
            />
          </Box>
        </Box>
      </Grid>
      <OrdersSection />      
    </Grid>
  )
}

export default Dashboard
