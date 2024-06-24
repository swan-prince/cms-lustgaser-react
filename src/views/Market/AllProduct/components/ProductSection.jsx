import React, { useState, useLayoutEffect } from 'react'
import classNames from 'classnames'
import { slice } from 'lodash'

import { makeStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/Search'

import { Box, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import products from "data/products"

import ProductItem from "components/ProductItem"

import styles from "assets/jss/views/allProductViewStyle"

import FilterImg from "assets/img/filter.png"

const useStyles = makeStyles(styles)

const ProductSection = () => {

	const classes = useStyles()	

	const [filter, setFilter] = useState("All Categories")
	const [searckKey, setSearchKey] = useState("")
	const [results, setResults] = useState(products)
	const [rowsPerPage, setRowsPerPage] = useState(8)
	const [page, setPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(rowsPerPage)

	const filterOptions = [
		"All Categories",
		"Siphones",
		"Food",
		"Gas",
		"Drugs",
		"Accesories",
		"Baloon",
		"Confetti",
		"Drinks",		
		"Drinks2",
		"Drinks3",
		"Filter 1",
		"Filter 2",
		"Filter 3",
		"Filter 4"
	]

	const handleSearch = () => {
		if (filter === "All Categories") {
			setResults(products.filter(item => item.title.toLowerCase().trim().includes(searckKey.toLowerCase().trim())))
		} else {
			setResults(products.filter(item => item.title.toLowerCase().trim().includes(searckKey.toLowerCase().trim()) && item.category === filter))
		}		
	}

	const handleFilter = (value) => {
		setFilter(value)
		setSearchKey("")
		if (value === "All Categories") {
			setResults(products)
		} else {
			setResults(products.filter(item => item.category === value))
		}		
	}

	const getPageItemCount = () => {
    return results.length % rowsPerPage === 0 ? parseInt(results.length / rowsPerPage) : parseInt(results.length / rowsPerPage) + 1
  }

	const handleChangePagination = (_, page) => {	
		setPage(page)
		setStartIndex((page - 1) * rowsPerPage)
		setEndIndex(page * rowsPerPage)
	}

	useLayoutEffect(() => {	
		const handleResize = () => {		
			if (window.innerWidth < 600) {
				setRowsPerPage(4)
				setStartIndex(0)
				setEndIndex(4)
				setPage(1)
			} else {
				setRowsPerPage(8)
				setStartIndex(0)
				setEndIndex(8)
				setPage(1)
			}			
		}

		window.addEventListener("resize", handleResize)

		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<Box className={classes.productSection}>
			<Container maxWidth="xl">
				<Grid container spacing={3}>
					<Grid item xs={12} className={classes.titleSection}>
						<Typography variant="h3" fontWeight={700} align="center">
							ALL PRODUCT
						</Typography>
						<Typography variant="body1" align="center">
							Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquet.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box className={classes.searchFormWrapper}>
							<FormControl fullWidth className={classes.searchForm} variant="outlined">
								<OutlinedInput
									placeholder="Search product"
									onChange={(e) => setSearchKey(e.target.value)}
									endAdornment={
										<InputAdornment position="start">
											<Button className={classes.searchBtn} onClick={handleSearch}><SearchIcon /></Button>
										</InputAdornment>
									}
								/>
							</FormControl>
						</Box>
						<Box className={classes.filterSection}>
							<Box className={classes.filterList}>
								<Button className={classes.filterBtn} startIcon={<img src={FilterImg} alt="Filter" />}>
									Filter
								</Button>
								{
									filterOptions.map((option, index) => (
										<Button
											className={classNames(classes.filterBtn, { [classes.active]: option === filter })}
											key={index}
											onClick={() => handleFilter(option)}
										>
											{option}
										</Button>
									))
								}
							</Box>
						</Box>
					</Grid>
					{
						slice(results, startIndex, endIndex).map((productItem, index) => (
							<Grid item lg={3} md={3} sm={6} xs={6} key={index}>
								<ProductItem product={productItem} />
							</Grid>
						))
					}
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center" className={classes.pagination}>
						<Stack spacing={2}>
							<Pagination 
								count={ getPageItemCount() } 
								variant="outlined" 
								shape="rounded"
								onChange={handleChangePagination}
								page={page}
							/>
						</Stack>
					</Box>
				</Grid>
			</Container>
		</Box>
	)
}

export default ProductSection
