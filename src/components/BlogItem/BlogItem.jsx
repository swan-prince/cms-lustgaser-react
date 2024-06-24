import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import styles from "assets/jss/components/blogItemStyle"

const useStyles = makeStyles(styles)

const BlogItem = (props) => {

  const classes = useStyles()

  const history = useHistory()

  const { blog } = props

  return (
    <Box className={classes.blogItem}>
      <Box className={classes.image}>
        <img src={blog.img} alt={blog.title} width="100%" />        
      </Box>
      <Box className={classes.contents}>
        <Typography variant="h6" onClick={() => history.push(`/market/blog/${blog.id}`)}>
          { blog.title }
        </Typography>
        <Typography variant="body1">
          { `${ blog.author } | ${ blog.date }` }
        </Typography>
      </Box>
    </Box>
  )
}

export default BlogItem
