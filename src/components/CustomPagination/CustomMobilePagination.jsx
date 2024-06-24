import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'

import styles from "assets/jss/components/customPaginationStyle"

const useStyles = makeStyles(styles)

const CustomMobilePagination = (props) => {

  const classes = useStyles()  

  const { count, page, handleChange } = props

  return (
    <Box display="flex" justifyContent="space-between" className={classes.custompagination} width="100%">      
      <Pagination 
        count={ count }
        page={ page }
        onChange={ handleChange }
        boundaryCount={3}
        variant="outlined" 
        shape="rounded" 
        size="medium"
        className={classes.pagination} 
      />
    </Box>
  )
}

export default CustomMobilePagination
