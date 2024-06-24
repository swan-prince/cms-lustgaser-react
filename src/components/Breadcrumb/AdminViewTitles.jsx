import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import styles from "assets/jss/components/adminViewTitleStyle"

const useStyles = makeStyles(styles)

const AdminViewTitles = (props) => {

  const classes = useStyles()

  const { mainTitle, subTitle } = props

  return (
    <Box className={classes.titleWrapper}>
      <Typography variant="h3">
        { mainTitle }
      </Typography>
      <Typography variant="body1">
        { subTitle }
      </Typography>
    </Box>
  )
}

export default AdminViewTitles
