import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box, Hidden } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'

import Breadcrumb from "components/Breadcrumb"
import BlogItem from "components/BlogItem"

import styles from "assets/jss/views/blogDetailViewStyle"

import BlogDetailImg from "assets/img/blog/blogDetail.png"
import Facebook from "assets/img/social/facebook.png"
import Instagram from "assets/img/social/instagram.png"
import LinkIcon from "assets/img/social/link.png"
import Twitter from "assets/img/social/twitter.png"
import BlogImg_1 from "assets/img/blog/blog_1.png"
import BlogImg_2 from "assets/img/blog/blog_2.png"
import BlogImg_3 from "assets/img/blog/blog_3.png"

const useStyles = makeStyles(styles)

const BlogDetail = () => {

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
    }    
  ]

  return (
    <Box className={classes.wrapper}>
      <Hidden smDown>        
        <Breadcrumb breadcrumb={[{title: "Home", link: '/'}, {title: "Blog", link: '/market/blog'}, {title: "Lorem Ipsum Dolor Sit Amet"}]}/>
      </Hidden>
      <Box className={classes.contentSection}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.titleSection}>
              <Typography variant="h3" fontWeight={700}>
                Lorem Ipsum Dolor Sit Amet
              </Typography>
              <Typography variant="body1">
                By Admin | 24 Aug 2021, 07.00PM
              </Typography>
            </Grid>
            <Grid item lg={11} md={11} sm={12} xs={12} className={classes.detailImgSection}>
              <img src={BlogDetailImg} alt="Blog" width="100%" />
            </Grid>
            <Grid item lg={1} md={1} sm={12} xs={12} className={classes.socialWrapper}>
              <Fab className={classes.socialBtn}>
                <img src={Instagram} alt="Instagram" />
              </Fab>
              <Fab className={classes.socialBtn}>
                <img src={Facebook} alt="Facebook" />
              </Fab>
              <Fab className={classes.socialBtn}>
                <img src={Twitter} alt="Twitter" />
              </Fab>
              <Fab className={classes.socialBtn}>
                <img src={LinkIcon} alt="Link" />
              </Fab>
            </Grid>
            <Grid item lg={11} md={11} sm={12} xs={12} className={classes.detailText}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum tincidunt ante, in vulputate elit tincidunt nec. In rutrum mi vitae bibendum condimentum. Duis aliquam fringilla ex ullamcorper rutrum. Proin mollis diam sed dui finibus fermentum. Vestibulum interdum lectus ac enim ornare tempus. Vivamus quis est eget ligula commodo commodo sit amet non diam. Fusce ut tincidunt dui, nec dictum nulla. Etiam sed ante neque.
                Cras ut laoreet felis, porttitor viverra elit. Pellentesque tempor erat id faucibus scelerisque. Pellentesque tempus ex at odio commodo ullamcorper. Aliquam erat volutpat. Praesent eget interdum elit, eget sollicitudin magna. Donec facilisis purus eros, sed malesuada felis elementum sed. Integer turpis lorem, posuere sit amet feugiat et, semper sed erat. Etiam vel massa non neque condimentum fringilla sed sodales ante. Donec quis aliquet nisl, in imperdiet odio. Donec vitae mollis ipsum. Maecenas nec ullamcorper nulla, et scelerisque est. In hac habitasse platea dictumst. Pellentesque porttitor imperdiet nulla, eget consequat orci blandit eu. Ut id sollicitudin sapien. In pulvinar efficitur magna eu facilisis.
                Curabitur scelerisque libero augue, in pharetra risus sagittis quis. Maecenas vel augue sit amet erat hendrerit sollicitudin quis sed enim. Nunc vitae metus sed dui pharetra tempor. Vestibulum sed felis vel ex vehicula molestie sed in purus. Proin sagittis ac erat at egestas. Maecenas consectetur congue eros, quis mollis ipsum molestie a. Morbi non lacus vitae justo pretium sodales nec nec erat. Sed tempor sapien nec semper eleifend. Morbi tellus nunc, imperdiet id risus at, tempor mollis velit. Sed eleifend sem mollis, placerat magna ut, fringilla ligula. In efficitur ligula massa, vel feugiat urna dictum ac.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar maximus leo sit amet interdum. Sed posuere laoreet pulvinar. Morbi aliquet massa eu purus molestie, nec convallis magna mollis. Phasellus eleifend, lectus vel fringilla consectetur, ex urna hendrerit est, nec lacinia sem nisl vel risus. Morbi faucibus, elit nec suscipit lobortis, ex mi mattis arcu, ut convallis nunc felis vitae mi. Suspendisse ac neque maximus, varius leo vitae, volutpat urna. Nunc blandit tincidunt ipsum ut commodo. Quisque semper magna vel neque tempor, eget aliquet dolor tristique. Proin in velit eu tortor bibendum fringilla nec aliquet sem. Praesent blandit mi eu diam tristique aliquet. Curabitur pharetra enim nec erat auctor consequat. Nullam interdum cursus nisi. Mauris fermentum quis ante quis aliquam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui ligula. Fusce id augue ipsum. Nulla sit amet metus in nulla hendrerit varius. Duis malesuada odio eu augue maximus hendrerit. Nunc condimentum sapien in dolor consectetur lobortis. Integer euismod turpis nec lacinia luctus. Aenean ac purus sapien. Morbi molestie sit amet risus a porttitor. Sed ultrices ornare mauris, at sollicitudin lorem auctor quis. Proin varius rhoncus posuere.
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.anotherBlogSection}>
              <Grid container spacing={3}>
                <Grid item xs={12} className={classes.anotherTitle}>
                  <Typography variant="h3" fontWeight={700} align="center">
                    Another Blog From Us
                  </Typography>
                </Grid>
                {
                  blogs.map(blog => (
                    <Grid item lg={4} md={4} sm={6} xs={12} key={blog.id}>
                      <BlogItem blog={blog} />
                    </Grid>
                  ))
                }
              </Grid>
              </Grid>
            </Grid>            
        </Container>
      </Box>
    </Box>
  )
}

export default BlogDetail
