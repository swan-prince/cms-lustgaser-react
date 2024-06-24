import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
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
import Link from '@material-ui/core/Link'
import Hidden from '@material-ui/core/Hidden'


import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

import styles from "assets/jss/views/marketAuthStyle"

import Logo from "assets/img/footer-logo.png"
import MobileLogo from "assets/img/baloon-company-mobile.png"

const useStyles = makeStyles(styles)

const Register = () => {

	const classes = useStyles()

	const history = useHistory()

	const [formData, setFormData] = useState({})
	const [formError, setFormError] = useState([])
	const [selectedDate, setSelectedDate] = useState(null)

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleDateChange = (date) => {
		setSelectedDate(date)
		handleChange({target: {name: "birthDay", value: date}})
	};

	const handleSubmit = () => {
		setFormError({
			username: !formData.username,
			email: !formData.email,
			password: !formData.password,
			birthDay: !formData.birthDay
		})
		if (!formError.username && !formError.password && !formError.email && !formError.birthDay) {
			localStorage.setItem("loggedIn", "loggedIn")
			history.push('/')
		}
	}

	return (
		<Box className={classes.wrapper}>
			<Container maxWidth="xl" className={classes.container}>
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
								Register new account
							</Typography>
							<Box className={classes.textField}>
								<InputLabel htmlFor="username"	>
									Username
								</InputLabel>
								<OutlinedInput
									id="username"
									variant="outlined"
									fullWidth
									name="username"
									placeholder="Input new username"
									error={formError.username}
									inputProps={{
										onChange: handleChange,
										autoComplete: 'off'
									}}								
								/>
							</Box>
							<Box className={classes.textField}>
								<InputLabel htmlFor="email"	>
									Email Address
								</InputLabel>
								<OutlinedInput
									id="email"
									variant="outlined"
									fullWidth
									name="email"
									placeholder="Input you email address"
									error={formError.email}
									inputProps={{
										onChange: handleChange,
										autoComplete: 'off'
									}}
								/>
							</Box>
							<Box className={classNames(classes.textField, classes.datePicker)}>
								<InputLabel htmlFor="birthday">
									Date of Birth
								</InputLabel>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										disableToolbar
										variant="inline"
										format="yyyy/MM/dd"
										margin="normal"
										id="date-picker-inline"
										value={selectedDate ?? "" }
										onChange={handleDateChange}
										fullWidth
										placeholder="YYYY/MM/DD"
										inputVariant="outlined"
										KeyboardButtonProps={{
											'aria-label': 'change date',
										}}
										error={formError.birthDay}
										inputProps={{
											autoComplete: 'off'
										}}
									/>
								</MuiPickersUtilsProvider>
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
									name="password"
									error={formError.password}
									inputProps={{
										type: "password",
										onChange: handleChange
									}}
									endAdornment={<InputAdornment position="end"><VisibilityOffOutlinedIcon /></InputAdornment>}
								/>
							</Box>
							<Box className={classes.submitBtn}>
								<Button variant="contained" color="green" fullWidth onClick={() => handleSubmit()}>
									Register
								</Button>
							</Box>
							<Typography variant="body1" className={classes.otherPageLink} align="center">
								Already have account? <Link href="/" onClick={(e) => { e.preventDefault(); history.push('/auth/login') }}>Sign In Here</Link>
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

export default Register
