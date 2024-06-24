import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'

import styles from "assets/jss/components/faqItemStyle"

const useStyles = makeStyles(styles)

const FaqItem = (props) => {

	const classes = useStyles()

	const { faq } = props

	const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
		<Box>
			<Card className={clsx(classes.faq, {
				[classes.nonBorder]: !expanded
			})}>            		
				<CardActions disableSpacing className={clsx(classes.header, {
					[classes.textWhite]: !expanded
				})}>
					<Typography variant="body2" color="textSecondary" component="p">
						{faq.title}
					</Typography>
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent className={classes.content}>	
						<Typography paragraph>
							N2O is the chemical formula and its synthetic name is Nitrogen oxide, the gas is colorless and has no noticeable odor, however, you can guess a sweet tone. 
							Historically, nitrous oxide has been known since the 18th century and it is said to have been used as entertainment with its properties of altered state of consciousness but also pain relief. 
							The first real documented application took place on December 11, 1844 in the United States by Dr. 
							Horace Wells who used it as an anesthetic in extracting a tooth. 
							after the successful treatment, its popularity increased in healthcare and the gas was used in childbirth, 
							dental care or as an initial step in operations before anesthesia was given with another substance. 
							In recent years, interest in nitrous oxide has increased as a social and slightly more fun element at parties, 
							where we with the appropriate dosage quickly sober up and do not suffer from a severe "hangover" compared to alcohol or other substances. 
							There is today a strong moralizing that is mostly due to ignorance or an overprotective attitude in that it was previously mainly used as a tool in healthcare for almost 200 years.
						</Typography>									
					</CardContent>
				</Collapse>
			</Card>
		</Box>
	)
}

export default FaqItem
