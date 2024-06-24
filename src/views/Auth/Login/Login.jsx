import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"

import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from "components/CustomForms/Button"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Link from '@material-ui/core/Link'
import Hidden from '@material-ui/core/Hidden'

import styles from "assets/jss/views/marketAuthStyle"

import Logo from "assets/img/footer-logo.png"
import MobileLogo from "assets/img/baloon-company-mobile.png"

const useStyles = makeStyles(styles)

const Login = () => {
  
	const classes = useStyles()

	const history = useHistory()

	const [remember, setRemember] = useState(false)
	const [loginForm, setLoginForm] = useState({})
	const [loginFormValidation, setLoginFormValidation] = useState({})

	const handleChange = (e) => {
		setRemember(e.target.checked)
	}

	const handleChangeForm = (e) => {
		setLoginForm({...loginForm, [e.target.name]: e.target.value})
	}

	const login = () => {
		setLoginFormValidation({
			username: !loginForm.username,
			password: !loginForm.password
		})	
		if (!!loginForm.username && !!loginForm.password) {					
			localStorage.setItem("loggedIn", "loggedIn")
			history.push('/')
		}
	}

	return (
		<Box className={classes.wrapper}>
			<Container className={classes.container}>
				<Grid container>
					<Grid item lg={6} md={6} sm={12} xs={12} className={classes.leftSide}>
						<Box className={classes.contents}>
							<Hidden xsDown>
								<img src={Logo} alt="Logo" />
							</Hidden>
							<Hidden smUp>
								<img src={MobileLogo} alt="Logo" />
							</Hidden>
							<Typography variant="h3">
								Login to Lustgasser
							</Typography>
							<Box className={classes.textField}>
								<InputLabel htmlFor="email"	>
									Username or Email Address
								</InputLabel>
								<OutlinedInput 
									id="email" 
									variant="outlined" 
									fullWidth
									placeholder="Input your username or email"								
									error={loginFormValidation.username}
									inputProps={{
										onChange: handleChangeForm,
										name: "username",
										autoComplete: 'off'
									}}
								/>	
							</Box>
							<Box className={classes.textField}>
								<InputLabel htmlFor="password"	>
									Password
								</InputLabel>
								<OutlinedInput 
									id="password" 
									variant="outlined" 
									fullWidth
									placeholder="Input your password"
									error={loginFormValidation.password}
									inputProps={{
										type: "password",
										onChange: handleChangeForm,
										name: "password"
									}}								
									endAdornment={<InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>}
								/>	
							</Box>

							<Box className={classes.rememberSelect} display="flex" justifyContent="space-between" alignItems="center">
								<FormControlLabel
									control={<Checkbox checked={remember} className={classes.checkbox} onChange={handleChange} name="remember" />}
									label="Remember me"
								/>
								<Link href="/" onClick={(e) => {e.preventDefault(); history.push('/auth/forgot-password')}}>Forgot Password?</Link>
							</Box>
							<Box className={classes.submitBtn}>
								<Button variant="contained" color="green" fullWidth onClick={login}>
									Sign In
								</Button>
							</Box>
							<Typography variant="body1" className={classes.otherPageLink} align="center">
								Dont have account? <Link href="/" onClick={(e) => {e.preventDefault(); history.push('/auth/register')}}>Register Here</Link>
							</Typography>
						</Box>
					</Grid>
					<Grid item lg={6} md={6} sm={12} xs={12}>
						<Box className={classes.rightSide}></Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default Login
