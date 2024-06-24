import React from 'react'
import classnames from 'classnames';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'

import styles from "assets/jss/components/textFieldStyle"

const useStyles = makeStyles(styles)

const CustomDateField = (props) => {
  
  const classes = useStyles()  
  
  const { className, placeholder, onChange, selectedDate } = props

  return (
    <Box width="100%" className={classnames(classes.dateField, className)}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"									
          value={selectedDate}
          onChange={onChange}
          fullWidth
          placeholder={placeholder || "YYYY/MM/DD"}
          inputVariant="outlined"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Box>
    
  )
}

export default CustomDateField
