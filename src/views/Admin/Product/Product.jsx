import React, { useState, useLayoutEffect } from 'react'
import { slice } from 'lodash'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'

import { Box, Hidden } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'

import AdminViewTitles from "components/Breadcrumb/AdminViewTitles"
import TextField from "components/CustomForms/TextField"
import CustomButton from "components/CustomForms/Button"
import ProductItem from "./components/ProductItem"
import ProductCustomPagination from "components/CustomPagination/ProductCustomPagination"
import ConfirmModal from "components/CustomModal/ConfirmModal"

import styles from "assets/jss/views/admin/productViewStyle"
import ProductImg from "assets/img/product detail/productItem.png"

const useStyles = makeStyles(styles)

const Product = () => {

  const classes = useStyles()

  const history = useHistory()

  const products = [
    {
      id: 1,
      img: ProductImg,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas amet 1",
      stock: 20,
      price: 1400
    },
    {
      id: 2,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 3,
      img: ProductImg,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas amet 2",
      stock: 20,
      price: 1400
    },
    {
      id: 4,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 5,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 6,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 7,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 8,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 9,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 10,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
    {
      id: 11,
      img: ProductImg,
      title: "Fast Gas 6 Pack!",
      stock: 20,
      price: 1400
    },
  ]

  const [searchKey, setSearchKey] = useState("")
  const [results, setResults] = useState(products)
	const [rowsPerPage, setRowsPerPage] = useState(10)
	const [page, setPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(rowsPerPage)

  const [deleteId, setDeleteId] = useState("")

  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setResults(products.filter(item => item.title.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    }    
  }

  const getPageItemCount = () => {
    return results.length % rowsPerPage === 0 ? parseInt(results.length / rowsPerPage) : Math.round(parseInt(results.length / rowsPerPage) + 1)
  }

  const handleChangePagination = (_, page) => {	
		setPage(page)
		setStartIndex((page - 1) * rowsPerPage)
		setEndIndex(page * rowsPerPage)
	}

  const handleChangeRowsPerPage = (value) => {
    setRowsPerPage(value)
    setPage(1)
		setStartIndex(0)
		setEndIndex(value)
  }

  useLayoutEffect(() => {	
		const handleResize = () => {		
			if (window.innerWidth < 961) {
				setRowsPerPage(3)
				setStartIndex(0)
				setEndIndex(3)
				setPage(1)
			} else {
				setRowsPerPage(10)
				setStartIndex(0)
				setEndIndex(10)
				setPage(1)
			}			
		}

		window.addEventListener("resize", handleResize)

		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])

  const handleDelete = (id) => {
    setDeleteId(id)
    setOpenConfirmModal(true)
  }

  return (
    <Grid container >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <AdminViewTitles mainTitle="Manage Product" subTitle="Lorem ipsum dolor sit amet" />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.productSection}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TextField  
              disableLabel
              inputProps={{
                type: "text",
                fullWidth: true,
                placeholder: "Search product",
                endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                onChange: (e) => setSearchKey(e.target.value),
                onKeyDown: handleSearch
              }}
            />
          </Grid>
          <Hidden smDown>
            <Box flexGrow={1} />
          </Hidden>
          <Hidden smDown>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <CustomButton variant="contained" color="green" fullWidth startIcon={<AddIcon />} onClick={() => history.push('/admin/product/add')}>
              Add Product
              </CustomButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid container spacing={3}>
          {
            slice(results, startIndex, endIndex).map(product => (
              <Grid item lg={6} md={6} sm={12} xs={12} key={product.id}>
                <ProductItem product={product} handleDelete={handleDelete} />
              </Grid>
            ))
          }
          <Hidden smDown>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <ProductCustomPagination 
                count={ getPageItemCount() } 
                page={page}
                rows={results.length}
                handleChange={ handleChangePagination }
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Grid>
          </Hidden>          
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box mt={2}>
            <ProductCustomPagination 
              count={ getPageItemCount() } 
              page={page}
              rows={results.length}
              handleChange={ handleChangePagination }
              rowsPerPage={3}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Box>
          <Box mt={3}>
            <CustomButton 
              variant="contained" 
              color="green" 
              fullWidth 
              startIcon={<AddIcon />}
              onClick={() => history.push('/admin/product/add')}
            >
              Add Product
            </CustomButton>
          </Box>
        </Grid>
      </Hidden>
      <ConfirmModal 
        open={openConfirmModal} 
        closeModal={() => setOpenConfirmModal(false)} 
        text={
          <Typography variant="body1" align="center">
            Are you sure want delete product “<span>{ !!deleteId && results.find(item => item.id === deleteId).title || "" }</span>”?
          </Typography>
        }
        confirmAction={() => {
          setOpenConfirmModal(false)
          setDeleteId("")
          setResults(results.filter(item => item.id !== deleteId))          
        }}
      />
    </Grid>
  )
}

export default Product
