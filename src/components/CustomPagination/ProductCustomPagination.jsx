import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box, Hidden } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from "assets/jss/components/customPaginationStyle"

const useStyles = makeStyles(styles)

const ProductCustomPagination = (props) => {

  const classes = useStyles()  

  const { count, page, handleChange, rowsPerPage, handleChangeRowsPerPage, rows } = props 

  return (
    <Box display="flex" justifyContent="space-between" className={classes.custompagination} width="100%">
      <Hidden smDown>
        <Box display="flex" alignItems="center">
          <Typography variant="body1">
            Data per page :
          </Typography>
          <Select          
            id="select"
            className={classes.rowsPerPage}
            value={rowsPerPage}
            onChange={(e) => handleChangeRowsPerPage(e.target.value)}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
          <Typography variant="body1">            
            { `${ (page - 1) * rowsPerPage + 1 } - ${ page * rowsPerPage <= rows ? page * rowsPerPage : rows } from ${ rows }` }
          </Typography>
        </Box>
      </Hidden>      
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

export default ProductCustomPagination
