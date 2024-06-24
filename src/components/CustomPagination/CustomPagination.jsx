import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box, Hidden } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from "assets/jss/components/customPaginationStyle"

const useStyles = makeStyles(styles)

const CustomPagination = (props) => {

  const classes = useStyles()  

  const { rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage } = props
  
  const printCountsText = () => {
    let param_1 = currentPage * rowsPerPage;

    return `${ 1 + rowsPerPage * (currentPage - 1) } - ${ param_1 > rowCount ? rowCount : param_1 } from ${ rowCount }`;
  }

  const getPageItemCount = () => {
    return rowCount % rowsPerPage === 0 ? parseInt(rowCount / rowsPerPage) : parseInt(rowCount / rowsPerPage) + 1
  }

  return (
    <Box display="flex" justifyContent="space-between" className={classes.custompagination} width="100%" mt={3}>
      <Hidden smDown>
        <Box display="flex" alignItems="center">
          <Typography variant="body1">
            Data per page :
          </Typography>
          <Select          
            id="select"
            className={classes.rowsPerPage}
            value={props.rowsPerPage}
            onChange={({ target }) => onChangeRowsPerPage(Number(target.value))}
          >
            {
              props.paginationRowsPerPageOptions.map((item) => (
                <MenuItem value={ item } key={ item }>{ item }</MenuItem>
              ))
            }
          </Select>
          <Typography variant="body1">            
            { printCountsText() }
          </Typography>
        </Box>
      </Hidden>      
      <Pagination 
        count={ getPageItemCount() }       
        onChange={(event, page) => onChangePage(page, rowCount)}
        page={currentPage}
        boundaryCount={3}
        variant="outlined" 
        shape="rounded" 
        size="medium"
        className={classes.pagination} 
      />
    </Box>
  )
}

export default CustomPagination
