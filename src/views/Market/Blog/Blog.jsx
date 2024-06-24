import React, { useState, useLayoutEffect } from 'react'
import { slice } from 'lodash'
import { makeStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/Search'

import { Box, Hidden } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import BlogItem from "components/BlogItem"
import Breadcrumb from "components/Breadcrumb"
import Button from "components/CustomForms/Button"

import styles from "assets/jss/views/blogViewStyle"

import BlogImg_1 from "assets/img/blog/blog_1.png"
import BlogImg_2 from "assets/img/blog/blog_2.png"
import BlogImg_3 from "assets/img/blog/blog_3.png"

const useStyles = makeStyles(styles)

const Blog = () => {

  const classes = useStyles()

  const blogs = [
    {
      id: 1,
      img: BlogImg_1,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 2,
      img: BlogImg_2,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 3,
      img: BlogImg_3,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 4,
      img: BlogImg_1,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 5,
      img: BlogImg_2,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 6,
      img: BlogImg_3,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 7,
      img: BlogImg_2,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 8,
      img: BlogImg_2,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
    {
      id: 9,
      img: BlogImg_3,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Admin",
      date: "24 Aug 2021"
    },
  ]

  const [searchKey, setSearchKey] = useState("")
  const [results, setResults] = useState(blogs)
	const [rowsPerPage, setRowsPerPage] = useState(12)
	const [page, setPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(rowsPerPage)

  const handleSearch = () => {
    setResults(blogs.filter(item => item.title.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
  }

  const getPageItemCount = () => {
    return results.length % rowsPerPage === 0 ? parseInt(results.length / rowsPerPage) : Math.round(parseInt(results.length / rowsPerPage) + 1)
  }

	const handleChangePagination = (_, page) => {	
		setPage(page)
		setStartIndex((page - 1) * rowsPerPage)
		setEndIndex(page * rowsPerPage)
	}

	useLayoutEffect(() => {	
		const handleResize = () => {		
			if (window.innerWidth < 600) {
				setRowsPerPage(4)
				setStartIndex(0)
				setEndIndex(4)
				setPage(1)
			} else {
				setRowsPerPage(12)
				setStartIndex(0)
				setEndIndex(12)
				setPage(1)
			}			
		}

		window.addEventListener("resize", handleResize)

		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.headerSection}>
        <Hidden smDown>
          <Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: "Blog"}]}/>
        </Hidden>
        <Box className={classes.headerContents}>
          <Typography variant="h3" fontWeight={700} align="center">
            BLOG
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet.
          </Typography>
          <Box className={classes.searchFormWrapper}>
            <FormControl fullWidth className={classes.searchForm} variant="outlined">								
              <OutlinedInput
                placeholder="Search blog post"
                onChange={(e) => setSearchKey(e.target.value)}
                endAdornment={
                  <InputAdornment position="start">
                    <Button className={classes.searchBtn} onClick={() => handleSearch()}><SearchIcon /></Button>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box className={classes.blogContents}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {
              slice(results, startIndex, endIndex).map(blog => (
                <Grid item lg={4} md={4} sm={6} xs={12} key={blog.id}>
                  <BlogItem blog={blog} />
                </Grid>
              ))
            }
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" className={classes.pagination}>
              <Stack spacing={2}>
                <Pagination 
                  count={ getPageItemCount() } 
                  variant="outlined" 
                  shape="rounded"
                  onChange={handleChangePagination}
                  page={page}
                />
              </Stack>
            </Box>
          </Grid>
        </Container>      
      </Box>
    </Box>
  )
}

export default Blog
