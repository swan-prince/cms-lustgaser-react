import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'

import styles from "assets/jss/components/marketFooterStyle.js"

import Logo from "assets/img/footer-logo.png"

const useStyles = makeStyles(styles)

const MarketFooter = () => {

	const classes = useStyles()

	return (
		<Box className={classes.footer} textAlign="center">
			<img src={Logo} alt="Logo" className={classes.logo}/>
			<Box className={classes.socialGroup}>
				<Fab className={classes.social}>
					<InstagramIcon />
				</Fab>
				<Fab className={classes.social}>
					<TwitterIcon />
				</Fab>
				<Fab className={classes.social}>
					<YouTubeIcon />
				</Fab>
			</Box>
			<Divider className={classes.divider} />
			<Box className={classes.copyText}>
				<Typography variant="body1">
					©Lustgaser 2021. All Rights Reserved. 
					<Hidden smDown>
						<span>
							&nbsp;Radiusbacken 19, 126 29 Hägersten, Sweden
						</span>
					</Hidden>
				</Typography>
			</Box>
		</Box>
	)
}

export default MarketFooter
