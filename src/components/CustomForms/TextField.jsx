import React from 'react'
import PropTypes from "prop-types"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"

import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { Box } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden'

import styles from "assets/jss/components/textFieldStyle"

const useStyles = makeStyles(styles)

const TextField = (props) => {

  const classes = useStyles()

  const {   
    labelText,
    id,    
    inputProps,
    error,  
    success,
    helperText,
    className,
    disableLabel
  } = props
    
  var helpTextClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error
  })
  let newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined
  }

  return (
    <Box className={classNames(classes.textField, {[className]: className}) }>
      {labelText !== undefined ? (
       <InputLabel className={classes.label}>
        { labelText }
        { !!labelText && <span>*</span>}
        </InputLabel>
      ) : !disableLabel ? <Hidden smDown><Box height="18px" /></Hidden> : <></>}
      <OutlinedInput        
        id={id}
        {...inputProps}
        inputProps={newInputProps}
      />
      {helperText !== undefined && error ? (
        <FormHelperText id={id + "-text"} className={helpTextClasses}>
          {helperText}
        </FormHelperText>
      ) : null}
    </Box>
  )
}

TextField.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  helperText: PropTypes.node,
  disableLabel: PropTypes.bool
};

export default TextField
