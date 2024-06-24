import React, {useState, Fragment, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { useLocation, useHistory } from 'react-router-dom'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Box } from '@material-ui/core'
import Button from 'components/CustomForms/Button'
import Link from '@material-ui/core/Link'
import Badge from '@material-ui/core/Badge'
import Hidden from '@material-ui/core/Hidden'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'

import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'

import { CartContext } from "context/CartContext"

import marketNavbarStyles from "assets/jss/components/marketNavbarStyles"

import userAvatar from "assets/img/checkout/user.png"

const useStyles = makeStyles(marketNavbarStyles)

const MarketNavbar = () => {

	const classes = useStyles()
	
	const history = useHistory()	

	const { itemCount } = useContext(CartContext)	

	const [showMenu, setShowMenu] = useState(false)
	const [logged, setLogged] = useState(false)
	
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleOpenMenu = (e) => {
		setAnchorEl(e.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}

	const handleMobileMenu = () => {
		setShowMenu(!showMenu)
	}

	const location = useLocation()

	const logout = () => {
		localStorage.setItem("loggedIn", "loggedOut")
		history.push('/auth/login')
	}

	useEffect(() => {	
		setLogged(localStorage.getItem("loggedIn") === "loggedIn")
	}, [])
	
	return (
		<Box>			
			<AppBar position="absolute" className={classNames({[classes.mobileNavbar]: showMenu, [classes.navbar]: true}) }>
				<Toolbar>
					{
						!location.pathname.includes('auth') && (
							<Fragment>
								<Hidden smDown>
									<Link 
										href="/" 
										className={classes.menuItem} 
										onClick={(e) => {e.preventDefault(); history.push('/market/all-product')}}
									>
										All Product
									</Link>
									<Link 
										href="/" 
										className={classes.menuItem}
										onClick={(e) => {e.preventDefault(); history.push('/market/blog')}}
									>
										Blog
									</Link>
									<Link 
										href="/" 
										className={classes.menuItem}
										onClick={(e) => {e.preventDefault(); history.push('/market/faq')}}
									>
										FAQ
									</Link>
									<Link 
										href="/" 
										className={classes.menuItem}
										onClick={(e) => {e.preventDefault(); history.push('/market/terms-of-purchase')}}
									>
										Terms of Purchase
									</Link>
								</Hidden>					

								<Hidden smDown>
									<Box className={classes.grow} />
									<IconButton className={classes.cartBtn} onClick={() => history.push('/market/cart')}>
										<Badge badgeContent={ itemCount } color="primary">
											<ShoppingCartIcon />
										</Badge>
									</IconButton>
									{
										logged === true ? (
										<Button											
											className={classes.loggedBtn}
											onClick={handleOpenMenu}
										>
											<img src={userAvatar} alt="Avatar" width="52px" height="52" />
											Noah J Öberg
											<KeyboardArrowDownIcon />
										</Button>
										) : (
											<Button 
												variant="contained" 
												color="green" 
												className={classes.loginBtn}
												onClick={() => history.push('/auth/login')}
											>
												Login
											</Button>
										)
									}									
								</Hidden>
							</Fragment>
						)
					}
					
					<Hidden mdUp>
						<Box className={classes.mobileNav} display="flex" alignItems="center">
							<IconButton className={classes.menuBtn} onClick={handleMobileMenu}>
								<MenuIcon />
							</IconButton>
							<Box className={classes.grow} />
							{
								!showMenu ? (
									<Fragment>
										<IconButton className={classes.cartBtn} onClick={() => history.push('/market/cart')}>
											<Badge badgeContent={4} color="primary" >
												<ShoppingCartIcon />
											</Badge>						
										</IconButton>
										{
											logged ? (
											<Button
												className={classes.loggedBtn}
												onClick={handleOpenMenu}
											>
												<img src={userAvatar} alt="Avatar" width="52px" height="52" />											
												<KeyboardArrowDownIcon />
											</Button>
											) : (
												<Button 
													variant="contained" 
													color="green" 
													className={classes.loginBtn}
													onClick={() => history.push('/auth/login')}
												>
													Login
												</Button>
											)
									}									
									</Fragment>
								) : (
								<IconButton className={classes.closeBtn} onClick={handleMobileMenu}>
									<CloseIcon />
								</IconButton>
								)
							}
						</Box>
						{
							showMenu && 
							<Box className={classes.mobileMenu}>
								<FormControl fullWidth className={classes.searchForm} variant="outlined">								
									<OutlinedInput
										placeholder="Search product"
										startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}								
									/>
								</FormControl>
								<Box display="flex" flexWrap="wrap" mt={3}>
									<Link 
										href="/" 
										component="a"
										className={classes.menuItem} 
										onClick={(e) => {e.preventDefault(); setShowMenu(false); history.push('/market/all-product')}}
									>
										All Product
									</Link>
									<Link 
										href="/" 
										className={classes.menuItem}
										component="a"
										onClick={(e) => {e.preventDefault(); setShowMenu(false); history.push('/market/blog')}}
									>
										Blog
									</Link>
									<Link 
										href="/" 
										className={classes.menuItem}
										onClick={(e) => {e.preventDefault(); setShowMenu(false); history.push('/market/faq')}}
									>
										FAQ
									</Link>
									<Link 
										href="/" 
										component="a"
										className={classes.menuItem}
										onClick={(e) => {e.preventDefault(); setShowMenu(false); history.push('/market/terms-of-purchase')}}
									>
										Terms of Purchase
									</Link>
								</Box>
							</Box>
						}						
					</Hidden>
					<Popover
						open={open}
						anchorEl={anchorEl}
						onClose={handleCloseMenu}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
						className={classes.profileMenu}
					>
						<MenuItem onClick={() => history.push('/market/profile')}>Profile</MenuItem>
						<MenuItem onClick={() => history.push('/market/transaction-history')}>Transaction History</MenuItem>
						<MenuItem onClick={logout}>Logout</MenuItem>					
				</Popover>
				</Toolbar>
			</AppBar>		
		</Box>
  )
}

export default MarketNavbar
