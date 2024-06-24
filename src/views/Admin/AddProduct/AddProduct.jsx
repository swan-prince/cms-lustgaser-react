import React, { useState } from 'react'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined'

import { Box, Hidden, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CustomButton from "components/CustomForms/Button"
import CustomTextField from "components/CustomForms/TextField"

import styles from "assets/jss/views/admin/addProductViewStyle"

import addItem2 from "assets/img/product detail/add-product-2.png"

const useStyles = makeStyles(styles)

const AddProduct = () => {

  const classes = useStyles()

  const history = useHistory()
  
  const [formData, setFormData] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const [firstImage, setFirstImage] = useState(null)
  const [secondImage, setSecondImage] = useState(null)
  const [thirdImage, setThirdImage] = useState(null)

  const handleChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const uploadFile = () => {
    document.getElementById("upload-product-img").click()
  }  

  const handleSave = () => {
    setFormErrors({
      name: !formData.name,
      price: !formData.price,
      stock: !formData.stock
    })
    if (!!formData.name && !!formData.price && !!formData.stock) {
      history.push('/admin/product')
    }
  }

  return (
    <Grid container >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Button startIcon={<ArrowBackIcon />} className={classes.backBtn} onClick={() => history.push('/admin/product')}>
          Back
        </Button>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.contentSection}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h3">
              Add Product
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" className={classes.productLabel}>
              Image Product<span>*</span>
            </Typography>
            <Box display="flex">
              {
                !!firstImage ? 
                  <Box className={classes.imageItem}>
                    <img src={firstImage ? URL.createObjectURL(firstImage) : null} alt="Product" width="100%" />
                  </Box>
                  :
                  <Box className={classes.uploadField} position="relative">
                    <input type="file" id="upload-product-img" onChange={(e) => setFirstImage(e.target.files[0])}/>
                    <Box position="absolute" textAlign="center" onClick={uploadFile}>
                      <CloudUploadOutlinedIcon />
                      <Typography variant="body1" align="center">
                        Upload Image 1
                      </Typography>
                    </Box>
                  </Box>
              }
              {
                !!secondImage ? 
                  <Box className={classes.imageItem}>
                    <img src={secondImage ? URL.createObjectURL(secondImage) : null} alt="Product" width="100%" />
                  </Box>
                  :
                  <Box className={classes.uploadField} position="relative">
                    <input type="file" id="upload-product-img" onChange={(e) => setSecondImage(e.target.files[0])}/>
                    <Box position="absolute" textAlign="center" onClick={uploadFile}>
                      <CloudUploadOutlinedIcon />
                      <Typography variant="body1" align="center">
                        Upload Image 2
                      </Typography>
                    </Box>
                  </Box>
              }              
              {
                !!thirdImage ? 
                  <Box className={classes.imageItem}>
                    <img src={thirdImage ? URL.createObjectURL(thirdImage) : null} alt="Product" width="100%" />
                  </Box>
                  :
                  <Box className={classes.uploadField} position="relative">
                    <input type="file" id="upload-product-img" onChange={(e) => setThirdImage(e.target.files[0])}/>
                    <Box position="absolute" textAlign="center" onClick={uploadFile}>
                      <CloudUploadOutlinedIcon />
                      <Typography variant="body1" align="center">
                        Upload Image 3
                      </Typography>
                    </Box>
                  </Box>
              }
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <CustomTextField 
              labelText="Product Name"
              inputProps={{
                type: "text",
                fullWidth: true,
                placeholder: "Input product name",
                onChange: handleChangeForm,
                name: "name"
              }}
              helperText="Product name is required"
              error={formErrors.name}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <CustomTextField 
              labelText="Price"
              inputProps={{
                type: "text",
                fullWidth: true,
                placeholder: "Input price",
                onChange: handleChangeForm,
                name: "price",
                startAdornment: <Button className={classNames(classes.adornmentBtn, classes.startAdorBtn)}>$</Button>
              }}
              helperText="Product price is required"
              error={formErrors.price}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <CustomTextField 
              labelText="Stock"
              inputProps={{
                type: "text",
                fullWidth: true,
                placeholder: "Input stock",
                onChange: handleChangeForm,
                name: "stock",
                endAdornment: <Button className={classNames(classes.adornmentBtn, classes.endAdorBtn)}>Pcs</Button>
              }}
              helperText="Product stock is required"
              error={formErrors.stock}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CustomTextField 
              labelText="Description"
              inputProps={{
                type: "text",
                fullWidth: true,
                placeholder: "Input product description",
                multiline: true,
                rows: 6,
                onChange: handleChangeForm,
                name: "description",               
              }}
            />            
          </Grid>
          <Hidden smDown>
            <Grid item lg={12} md={12} sm={12}>
              <Box textAlign="right" mt={3}>
                <Button className={classes.cancelBtn}>
                  Cancel
                </Button>
                <CustomButton variant="contained" color="green" onClick={() => handleSave()}>
                  Save
                </CustomButton>
              </Box>
            </Grid>
          </Hidden>          
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Grid item sm={6} xs={6}>
          <Button className={classes.cancelBtn} fullWidth>
            Cancel
          </Button>
        </Grid>
        <Grid item sm={6} xs={6}>
          <CustomButton variant="contained" color="green" fullWidth onClick={() => handleSave()}>
            Save
          </CustomButton>
        </Grid>
      </Hidden>      
    </Grid>
  )
}

export default AddProduct
