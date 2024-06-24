import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box, Hidden } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CustomModal from "components/CustomModal"
import ModalHeader from "components/CustomModal/ModalHeader"
import ModalContents from "components/CustomModal/ModalContents"
import CustomButton from 'components/CustomForms/Button'

import styles from "assets/jss/views/admin/userViewStyle"

const useStyles = makeStyles(styles)

const UserDetail = (props) => {

  const classes = useStyles() 

  const { open, closeModal, user, handleDelete } = props

  return (
    <CustomModal open={open} closeModal={closeModal}>
      <ModalHeader title="Detail User" closeModal={closeModal} />
      <ModalContents>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12} >
              <Box className={classes.detailWrapper}>
                <Box className={classes.userDetailItem}>
                  <Typography variant="body1" className={classes.detailLabel}>
                    Name:
                  </Typography>
                  <Typography variant="body1" className={classes.detailInfo}>
                    { user.name }
                  </Typography>
                </Box>
                <Box className={classes.userDetailItem}>
                  <Typography variant="body1" className={classes.detailLabel}>
                    Email:
                  </Typography>
                  <Typography variant="body1" className={classes.detailInfo}>
                    { user.email }
                  </Typography>
                </Box>
                <Box className={classes.userDetailItem}>
                  <Typography variant="body1" className={classes.detailLabel}>
                    Phone:
                  </Typography>
                  <Typography variant="body1" className={classes.detailInfo}>
                    { user.phone }
                  </Typography>
                </Box>
              </Box>              
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.userAddress}>
                <Typography variant="body1" className={classes.detailLabel}>
                  Address:
                </Typography>
                <Typography variant="body1" className={classes.detailInfo}>
                  { user.address }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ModalContents>
      <Hidden smDown>
        <Box className={classes.modalFooter} textAlign="right">        
          <CustomButton variant="contained" color="green" onClick={ closeModal }>
            Close
          </CustomButton>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box className={classes.modalFooter} display="flex" textAlign="right">        
          <Box textAlign="right" width="50%">        
            <CustomButton variant="simple" fullWidth color="green" onClick={ closeModal }>
              Cancel
            </CustomButton>
          </Box>
          <Box textAlign="right" width="50%">        
            <CustomButton variant="contained" fullWidth color="rose" onClick={ () => { closeModal(); handleDelete(user.id)} }>
              Delete
            </CustomButton>
          </Box>
        </Box>
      </Hidden>
    </CustomModal>
  )
}

export default UserDetail
