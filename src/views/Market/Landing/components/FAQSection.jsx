import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FaqItem from "components/FaqItem"

import styles from "assets/jss/views/landingViewStyle"

const useStyles = makeStyles(styles)

const FAQSection = () => {

	const classes = useStyles() 
	
	const faqs= [
		{
			title: "What is nitrous oxide?",
			description: ""
		},
		{
			title: "Is nitrous oxide dangerous?",
			description: ""
		},
		{
			title: "How much nitrous oxide can you take?",
			description: ""
		},	
		{
			title: "How does nitrous oxide feel?",
			description: ""
		},
		{
			title: "Is nitrous oxide legal?",
			description: ""
		},
		{
			title: "How to take nitrous oxide?",
			description: ""
		},
		{
			title: "How to make nitrous oxide?",
			description: ""
		},
		{
			title: "What does nitrous oxide contain?",
			description: ""
		},
	]

	return (
			<Box className={classes.faqSection}>
				<Container maxWidth="xl">
					<Grid container spacing={3}>
						<Grid item xs={12} className={classes.titleSection}>
							<Typography variant="h3" fontWeight={700} align="center">
								Frequently Asked Question
							</Typography>
							<Typography variant="body1" align="center">
								Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
							</Typography>
						</Grid>
						<Grid item xs={12} className={classes.faqList}>
							<Grid item lg={6} md={6} sm={12} xs={12}>
								<FaqItem faq={faqs[0]} />
								<FaqItem faq={faqs[1]} />
								<FaqItem faq={faqs[2]} />
								<FaqItem faq={faqs[3]} />
							</Grid>
							<Grid item lg={6} md={6} sm={12} xs={12}>
								<FaqItem faq={faqs[4]} />
								<FaqItem faq={faqs[5]} />
								<FaqItem faq={faqs[6]} />
								<FaqItem faq={faqs[7]} />
							</Grid>
						</Grid>
						{/* {
							faqs.map((faq, index) => (
								<Grid item lg={6} md={6} sm={12} xs={12} key={index}>
									<FaqItem faq={faq} />
								</Grid>
							))
						} */}
						
					</Grid>
				</Container>
			</Box>
	)
}

export default FAQSection
