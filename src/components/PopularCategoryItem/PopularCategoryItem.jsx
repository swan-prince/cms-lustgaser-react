import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import styles from "assets/jss/components/popularCategoryItemStyle"

const useStyles = makeStyles(styles)

const PopularCategoryItem = (props) => {

    const classes = useStyles()

    const { categoryImg, title } = props

    return (
        <Box className={classes.card}>
            <img src={categoryImg} alt={title} />
            <Typography variant="h3" align="center" fontWeight={700}>
                {title}
            </Typography>
        </Box>
    )
}

export default PopularCategoryItem
