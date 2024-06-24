import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from 'components/CustomForms/Button'

import { CartContext } from "context/CartContext"

import styles from "assets/jss/components/productItemStyle"

const useStyles = makeStyles(styles)

const ProductItem = (props) => {

	const classes = useStyles()

	const history = useHistory()

	const { product } = props	

	const { addToCart } = useContext(CartContext)

	return (
		<Box className={classes.productCard}>
			<img src={product.image} alt="Product" onClick={() => history.push(`/market/product/${product.id}`)}/>
			<Box className={classes.content}>
				<Typography variant="h6" className={classes.title}>
					{product.title}
				</Typography>
				<Typography variant="body1" className={classes.price} align="center">
					{
						product.reduce !== "" && (
							<span>
								{
									product.reduce
								}
							</span>
						)
					}

					{ `${ product.price } kr`}
				</Typography>
				<Button
					variant="outlined"
					color="green"
					className={classes.addBtn}
					fullWidth
					onClick={() => addToCart(product)}
				>
					<ShoppingCartIcon /> Add to Cart
				</Button>
			</Box>
			{
				product.sale !== "" && (
					<Box className={classes.sale} display="flex" alignItems="center" justifyContent="center">
						<Box>
							<Typography variant="body1">50%</Typography>
							<Typography variant="body1">SALE</Typography>
						</Box>
					</Box>
				)
			}
		</Box>
	)
}

export default ProductItem
