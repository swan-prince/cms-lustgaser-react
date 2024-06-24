import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import PopularCategoryItem from "components/PopularCategoryItem"

import styles from "assets/jss/views/landingViewStyle"

import Category1 from "assets/img/popular-category-1.png"
import Category2 from "assets/img/popular-category-2.png"
import Category3 from "assets/img/popular-category-3.png"
import Category4 from "assets/img/popular-category-4.png"

const useStyles = makeStyles(styles)

const PopularCategorySection = () => {

    const classes = useStyles()  

    return (
        <Box className={classes.popularCategorySection}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.titleSection}>
                        <Typography variant="h3" fontWeight={700} align="center">
                            Searched Popular Category
                        </Typography>
                        <Typography variant="body1" align="center">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquet.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                        <PopularCategoryItem categoryImg={Category1} title="GAS" />                        
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                        <PopularCategoryItem categoryImg={Category2} title="Baloon" />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                        <PopularCategoryItem categoryImg={Category3} title="Confetti" />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                        <PopularCategoryItem categoryImg={Category4} title="Drinks" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default PopularCategorySection
