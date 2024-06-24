import React, {useState, useContext} from 'react'
import classNames from 'classnames'
import { slice } from 'lodash'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from "components/CustomForms/Button"

import Breadcrumb from "components/Breadcrumb"
import ProductItem from "components/ProductItem"

import styles from "assets/jss/views/productDetailViewStyle"
import Product2 from "assets/img/product-2.png"
import Product3 from "assets/img/product-3.png"

import { CartContext } from "context/CartContext"

import products from "data/products"

const useStyles = makeStyles(styles)

const ProductDetail = () => {

	const classes = useStyles() 
	const history = useHistory()
	const { id } = useParams()

	const { addToCart } = useContext(CartContext)

	const product = products.find(item => item.id === parseInt(id))	

	const [productImg, setProductImg] = useState(product.image)
	const [count, setCount] = useState(1)	

	return (
		<Box className={classes.wrapper}>			
			<Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: product.category}, {title: product.title}]}/>
			<Box className={classes.detailSection}>
				<Container maxWidth="xl">
					<Grid container spacing={3}>
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<Box className={classes.productImg} textAlign="center">
								<img src={productImg} alt="Product" />
							</Box>
							<Box display="flex" className={classes.imageList} justifyContent="space-between">
								<img src={product.image} alt="Product" onClick={() => setProductImg(product.image)} className={classNames({[classes.activeGallery]: productImg === product.image})}/>
								<img src={Product2} alt="Product" onClick={() => setProductImg(Product2)} className={classNames({[classes.activeGallery]: productImg === Product2})}/>
								<img src={Product3} alt="Product" onClick={() => setProductImg(Product3)} className={classNames({[classes.activeGallery]: productImg === Product3})}/>
							</Box>
						</Grid>
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<Box className={classes.productCard}>
								<Typography variant="h3" className={classes.productTitle}>
									{ product.title }
								</Typography>
								<Typography variant="body1" className={classes.discount}>
									{`${new Intl.NumberFormat().format(product.discount)} kr`}
								</Typography>
								<Box position="relative" className={classes.priceSection}>
									<Typography variant="body1" className={classes.price}>
										{new Intl.NumberFormat().format(product.price)}
									</Typography>
									<Typography variant="body1" className={classes.currency}>
										kr
									</Typography>
								</Box>								
								<Typography variant="body1" className={classes.detail}>
									580g reliable tube for high production rate
									6 large tubes of N2O in a carton that together correspond to 432 8g cartridges 
									and are easily suitable for high capacity in production such as larger events or 
									parties where a lot of cream is consumed. 
									Best suited for Catering or Commercial Kitchen.
								</Typography>
								<Box>
									<Container className={classes.counterSection}>
										<Grid container>
											<Grid item xs={6}>
												<Box>
													<Typography variant="body1" className={classes.label}>
														Quantity
													</Typography>
													<Box display="flex">
														<Button variant="contained" color="green" className={classes.counterBtn} onClick={() => {count> 1 && setCount(count-1)}}>
															-
														</Button>
														<Box className={classes.count} display="flex" alignItems="center" justifyContent="center">
															<Typography variant="body1" align="center">
																{count}
															</Typography>
														</Box>														
														<Button variant="contained" color="green" className={classes.counterBtn} onClick={() => setCount(count+1)}>
															+
														</Button>
													</Box>													
												</Box>
											</Grid>
											<Grid item xs={6}>
												<Box>
													<Typography variant="body1" className={classes.label}>
															Subtotal
													</Typography>
													<Typography variant="body1" className={classes.subTotal}>
														{`${new Intl.NumberFormat().format(product.price*count)} kr`}
													</Typography>
												</Box>
											</Grid>
										</Grid>
									</Container>
								</Box>
								<Box>
									<Button 
										variant="contained" 
										color="green" 
										fullWidth 
										onClick={() => 
											{
												addToCart({...product, quantity: count}); 
												history.push('/market/cart')
											}
										}
									
									>
										Add to Cart
									</Button>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box className={classes.relatedProducts}>
				<Container maxWidth="xl">
					<Grid container spacing={3}>
						<Grid item xs={12} className={classes.titleSection}>
							<Typography variant="h3" fontWeight={700} align="center">
								more related product
							</Typography>							
						</Grid>
						<Container maxWidth="xl">
							<Grid container spacing={3} className={classes.productList}>
								{
									slice(products, 0, 4).map((productItem, index) => (
										<Grid item lg={3} md={3} sm={6} xs={6} key={index}>
												<ProductItem product={productItem}/>
										</Grid>
									))
								}		
							</Grid>
						</Container>						
					</Grid>
				</Container>
			</Box>
		</Box>
	)
}

export default ProductDetail
