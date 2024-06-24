import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'

import styles from "assets/jss/components/radioCardStyle"

const useStyles = makeStyles(styles)

const RadioCard = (props) => {

  const classes = useStyles()

  const { className, option, selected, small } = props

  const classnames = classNames(
    classes.radioCard, 
    {
      [className]: className,
      [classes.selected]: selected,
      [classes.smallSize]: small
    }
  )

  return (
    <Box 
      className={ classnames }>
      <FormControlLabel value={option.option} control={<Radio />} label={option.option} className={classes.radio}/>
      <Typography variant="body1">
        {
          option.description
        }
      </Typography>
    </Box>
  )
}

export default RadioCard
