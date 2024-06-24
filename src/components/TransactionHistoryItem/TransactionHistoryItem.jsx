import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { Box, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import styles from "assets/jss/components/transactionHistoryItemStyle"

const useStyles = makeStyles(styles)

const TransactionHistoryItem = (props) => {

  const classes = useStyles()

  const { history, openModal } = props

  const statusClassname = classNames(
    classes.status,
    {
      [classes.finished]: history.status === "Finished",
      [classes.delivery]: history.status === "In Delivery",
      [classes.failed]: history.status === "Failed"
    }
  )

  return (
    <Box className={classes.transactionHistory}>
      <Box display="flex" alignItems="center" className={classes.topSection}>
        <Typography variant="body1" className={classes.transactionText}>
          Transaction
        </Typography>
        <Box display="flex" className={classes.dateNumber}>
          <Typography variant="body1">
            { history.date }
          </Typography>
          <Typography variant="body1">
            { history.number }
          </Typography>
        </Box>
        <Box className={statusClassname}>
          <Typography variant="body1">
            { history.status }
          </Typography>
        </Box>        
      </Box>
      <Box className={classes.contents} display="flex">
        <Box className={classes.leftSide}>
          <Typography variant="body1" className={classes.title}>
            { history.products[0].title }
          </Typography>
          <Typography variant="body1" className={classes.price}>
            { `${history.products[0].quantity} x ${history.products[0].price} kr` }
          </Typography>
          <Typography variant="body1" className={classes.quantity}>
            { `+${ history.products.length - 1 } More Product` }
          </Typography>
        </Box>
        <Box className={classes.rightSide}>
          <Typography variant="body1">
            Total Purchase
          </Typography>
          <Typography variant="body1">
            { history.total }
          </Typography>
        </Box>
      </Box>
      <Box textAlign="right" className={classes.detailBtn + ' ' + "detailBtn"}>
        <Button onClick={() => openModal(history.id)}>
          Transaction Details
        </Button>
      </Box>
    </Box>
  )
}

export default TransactionHistoryItem
