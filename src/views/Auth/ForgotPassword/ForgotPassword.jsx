import React, { useState } from 'react'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'


import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from "components/CustomForms/Button"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Hidden from '@material-ui/core/Hidden'

import styles from "assets/jss/views/marketAuthStyle"

import Logo from "assets/img/footer-logo.png"
import MobileLogo from "assets/img/baloon-company-mobile.png"

const useStyles = makeStyles(styles)

const ForgotPassword = () => {

  const classes = useStyles()

	const history = useHistory()

	const [email, setEmail] = useState("")
	const [formError, setFormError] = useState({})

	const handleSubmit = () => {
		setFormError({
			error: !email
		})
		if (!!email) {
			localStorage.setItem("loggedIn", "loggedIn")
			history.push('/')
		}
	}

	return (
		<Box className={classNames(classes.wrapper, classes.forgotWrapper)}>
			<Container maxWidth="xl" className={classes.container}>
				<Grid container>
					<Grid item lg={6} md={6} sm={12} xs={12} className={classes.leftSide}>
						<Box className={classNames(classes.contents, classes.forgotPasword)}>
							<Hidden xsDown>
								<img src={Logo} alt="Logo" />
							</Hidden>
							<Hidden smUp>
								<img src={MobileLogo} alt="Logo" />
							</Hidden>
							<Typography variant="h3">
								Forgot
							</Typography>
							<Typography variant="body1">
								Enter the email address you used when you joined and we’ll send you instructions to reset your password.
							</Typography>
							<Box className={classes.textField}>
								<InputLabel htmlFor="email"	>
									Email Address
								</InputLabel>
								<OutlinedInput 
									id="email" 
									variant="outlined" 
									fullWidth
									placeholder="Input your username or email"
									error={formError.error}
									inputProps={{
										onChange: (e) => setEmail(e.target.value),
										autoComplete: 'off'
									}}
								/>
							</Box>
							
							<Box className={classes.submitBtn}>
								<Button variant="contained" color="green" fullWidth onClick={() => handleSubmit()}>
									Send Reset Instruction
								</Button>
							</Box>							
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

export default ForgotPassword
