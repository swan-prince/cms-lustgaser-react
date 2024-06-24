import React, { useState, useLayoutEffect } from 'react'
import { slice } from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from 'components/CustomForms/Button'

import ProductItem from "components/ProductItem"

import styles from "assets/jss/views/landingViewStyle"

import products from "data/products"

const useStyles = makeStyles(styles)

const AllProductsSection = () => {

	const classes = useStyles()

	const [showAll, setShowAll] = useState(false)	
	const [count, setCount] = useState(8)

	useLayoutEffect(() => {	
		const handleResize = () => {		
			if (window.innerWidth < 600) {
				setCount(4)				
			} else {
				setCount(8)			
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
					<Grid item xs={12} className={classNames(classes.titleSection, classes.zIndex1)}>
						<Typography variant="h3" fontWeight={700} align="center">
							ALL PRODUCT
						</Typography>
						<Typography variant="body1" align="center">
							Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquet.
						</Typography>
					</Grid>
					{
						slice(products, 0, showAll ? products.length : count).map((productItem, index) => (
							<Grid item lg={3} md={3} sm={6} xs={6} key={index}>
								<ProductItem product={productItem} />
							</Grid>
						))
					}				
					<Grid item xs={12}>
						<Box mt={4} textAlign="center" className={classes.seeAllProduct}>
							<Button variant="contained" color="green" onClick={() => setShowAll(!showAll)}>
								{ showAll ? "Show Less" : "See All Product" }
								<ChevronRightIcon />
							</Button>
						</Box>
					</Grid>										
				</Grid>
			</Container>
		</Box>
	)
}

export default AllProductsSection
