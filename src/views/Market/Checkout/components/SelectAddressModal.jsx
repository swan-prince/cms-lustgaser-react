import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CloseIcon from '@material-ui/icons/Close'

import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'

import Button from "components/CustomForms/Button"
import RadioCard from "./RadioCard"

import styles from "assets/jss/components/selectAddressModalStyle"

const useStyles = makeStyles(styles)

const SelectAddressModal = (props) => {

  const classes = useStyles();

  const { open, closeModal, addresses, setAddress, address } = props  

  const [addressOption, setAddressOption] = useState(address)

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={ open }
      onClose={ closeModal }
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.paper}>
          <Box className={classes.header}>
            <Typography variant="h5" align="center">
              Select Address
            </Typography>
            <IconButton size="small" className={classes.closeBtn} onClick={ closeModal }><CloseIcon /></IconButton>
          </Box>
          <Box className={classes.cotents} mt={3}>
            <FormControl component="fieldset">
              <RadioGroup name="shipping-method" value={addressOption} onChange={(e) => setAddressOption(parseInt(e.target.value))}>
                <Container>
                  <Grid container>                      
                    {
                      addresses.map((item, index) => (
                        <Grid item lg={6} md={6} sm={12} xs={12} key={ index } className={classes.addressWrapper}>
                          <RadioCard option={ item } selected={ addressOption === item.id } className={classes.address} />
                        </Grid>
                      ))
                    }
                  </Grid>
                </Container>
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className={classes.footer} textAlign="right">
            <Button className={classes.cancelBtn} onClick={ closeModal }>
              Cancel
            </Button>
            <Button variant="contained" color="green" onClick={ () => {setAddress(addressOption); closeModal();} }>
              Select
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default SelectAddressModal
