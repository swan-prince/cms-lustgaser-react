import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import styles from "assets/jss/views/landingViewStyle"

import CompanyLogo from "assets/img/baloon-company.png"
import CompanyLogoMobile from "assets/img/baloon-company-mobile.png"
import Explore from "assets/img/explore.png"

const useStyles = makeStyles(styles)

const BannerSection = () => {

    const classes = useStyles()

    return (
        <Box className={classes.section}>
            <Hidden smDown>
                <img src={CompanyLogo} alt="Company" className={classes.heroCenterImg} />
            </Hidden>
            <Hidden mdUp>
                <img src={CompanyLogoMobile} alt="Company" className={classes.heroCenterImg} />
            </Hidden>
            <Box className={classes.exploreMore} textAlign="center">
                <Typography variant="body1" >
                    Explore More
                </Typography>
                <img src={Explore} alt="Explore" />
            </Box>
        </Box>
    )
}

export default BannerSection
