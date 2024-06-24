import React, {Fragment} from 'react'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Box, Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import styles from "assets/jss/components/breadcrumbStyle"

const useStyles = makeStyles(styles)

const Breadcrumb = (props) => {

	const classes = useStyles() 

	const { breadcrumb } = props

	const history = useHistory()

	return (
		<Box display="flex" className={classes.breadcrumb}>
			{
				breadcrumb.map((item, index) => (
					<Fragment key={index}>
						{
							item.link ? 
							<Link href={item.link} onClick={(e) => { e.preventDefault(); history.push(item.link) }} component="a">{item.title}</Link> 
							: 
							<Typography variant="body1">
								{item.title}
							</Typography>
						}
						
						{
							(index !== breadcrumb.length - 1) && (
								<ChevronRightIcon />
							)
						}
					</Fragment>
				))
			}
		</Box>
	)
}

export default Breadcrumb
