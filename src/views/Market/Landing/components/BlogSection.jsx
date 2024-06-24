import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import styles from "assets/jss/views/landingViewStyle"

import Blog1 from "assets/img/blogCarousel1.png"
import Blog2 from "assets/img/blogCarousel2.png"
import Blog3 from "assets/img/blogCarousel3.png"

const useStyles = makeStyles(styles)

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 60
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    partialVisibilityGutter: 30,
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    partialVisibilityGutter: 50,
    items: 1,
    slidesToSlide: 1
  }
};

const BlogSection = () => {
  
	const classes = useStyles() 

	return (
		<Box className={classes.blogSection}>
			<Container maxWidth="xl">
				<Grid container spacing={3}>
					<Grid item xs={12} className={classes.titleSection}>
						<Typography variant="h3" fontWeight={700} align="center">
							Blog
						</Typography>
						<Typography variant="body1" align="center">
							Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquet.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box className={classes.blogList}>
							<Carousel 
									responsive={responsive}               
									autoPlay
									infinite
									autoPlaySpeed={3000}
									centerMode={true}
									draggable									
								>
									<Box className={classes.blogItem} textAlign="center">
										<img src={Blog1} alt="Blog 1" />
										<Box className={classes.blogContent + " " + "blogContent"}>
											<Typography variant="h6">
												Lorem Ipsum Dolor Sit Amet
											</Typography>
											<Typography variant="body1">
												Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. 
												Id Sapien Dictumst Nulla Sollicitudin Nec, Tempor, Eget Elem Entum Purus. 
												Lacus Praesent Diam Sit Enim, 
											</Typography>
										</Box>
									</Box>
									<Box className={classes.blogItem} textAlign="center">
										<img src={Blog2} alt="Blog 1" />
										<Box className={classes.blogContent + " " + "blogContent"}>
											<Typography variant="h6">
												Lorem Ipsum Dolor Sit Amet
											</Typography>
											<Typography variant="body1">
												Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. 
												Id Sapien Dictumst Nulla Sollicitudin Nec, Tempor, Eget Elem Entum Purus. 
												Lacus Praesent Diam Sit Enim, 
											</Typography>
										</Box>
									</Box>
									<Box className={classes.blogItem} textAlign="center">
										<img src={Blog3} alt="Blog 1" />
										<Box className={classes.blogContent + " " + "blogContent"}>
											<Typography variant="h6">
												Lorem Ipsum Dolor Sit Amet
											</Typography>
											<Typography variant="body1">
												Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. 
												Id Sapien Dictumst Nulla Sollicitudin Nec, Tempor, Eget Elem Entum Purus. 
												Lacus Praesent Diam Sit Enim, 
											</Typography>
										</Box>
									</Box>									
								</Carousel>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	) 
}

export default BlogSection
