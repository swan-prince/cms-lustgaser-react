import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import VisibilityIcon from '@material-ui/icons/Visibility'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import { Box, Hidden, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import CustomIconButton from "components/CustomForms/CustomIconButton"

import styles from "assets/jss/views/admin/productViewStyle"

const useStyles = makeStyles(styles)

const ProductItem = (props) => {

  const classes = useStyles()

  const { product, handleDelete } = props

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.productItem}>
      <Hidden mdUp>
        <Box textAlign="right" className={classes.actionsMenu}>
          <IconButton onClick={ handleClick }>
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>See</MenuItem>
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={() => handleDelete(product.id)}>Delete</MenuItem>
          </Menu>
        </Box>  
      </Hidden>          
      <img src={product.img} alt="Product" width="82px" height="82px" />     
      <Box className={classes.productInfo}>
        <Typography variant="body1" className={classes.productTitle}>
          { product.title }
        </Typography>
        <Box display="flex">
          <Box className={classes.infoItem}>
            <Typography variant="body1">
              Stock :
            </Typography>
            <Typography variant="body1">
              { `${product.stock} Pcs` }
            </Typography>
          </Box>
          <Box className={classes.infoItem}>
            <Typography variant="body1">
              Price :
            </Typography>
            <Typography variant="body1">
              { `$ ${product.price}` }
            </Typography>
          </Box>
        </Box>        
      </Box>
      <Hidden smDown>
        <Box className={classes.actionList}>
          <CustomIconButton><VisibilityIcon /></CustomIconButton>
          <CustomIconButton><EditIcon /></CustomIconButton>
          <CustomIconButton onClick={() => handleDelete(product.id)}><DeleteIcon /></CustomIconButton>
        </Box>
      </Hidden>     
    </Box>
  )
}

export default ProductItem
