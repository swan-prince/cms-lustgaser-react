import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Box, Button, Divider, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import EditPersonalData from "./EditPersonalData"
import EditContactData from "./EditContactData"
import EditPassword from "./EditPassword"

import styles from "assets/jss/views/profileViewStyle"

import userAvatar from "assets/img/user.png"
import editIcon from "assets/img/edit.png"

const useStyles = makeStyles(styles)

const ProfileDataPanel = () => {

  const classes = useStyles()

  const [openPersonalModal, setOpenPersonalModal] = useState(false)
  const [openContactModal, setOpenContactModal] = useState(false)
  const [openPassowrdModal, setOpenPassowrdModal] = useState(false)

  const [personalData, setPersonalData] = useState({
    username: "noahjorberg",
    name: "Noah J Öberg",
    birthDay: "1998-08-22"
  })

  const [contactData, setContactData] = useState({
    email: "noahjo@email.com",
    phone: "1234567890"
  })

  return (
    <Box className={classes.profileDataSection} display="flex" justifyContent="space-between">
      <Box className={classes.avatar} position="relative">
        <img src={userAvatar} alt="User" width="100%" />
        <IconButton className={classes.editProfile}>
          <img src={editIcon} alt="Edit" />
        </IconButton>
      </Box>
      <Box className={classes.profileDataCol}>
        <Box className={classes.profileDataFieldRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Personal Data
          </Typography>
          <Button onClick={() => setOpenPersonalModal(true)}>Update</Button>
        </Box>
        <Box className={classes.profileDataRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Username
          </Typography>
          <Typography variant="body1">
            { personalData.username }
          </Typography>
        </Box>
        <Box className={classes.profileDataRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Name
          </Typography>
          <Typography variant="body1">
            { personalData.name }
          </Typography>
        </Box>
        <Box className={classes.profileDataRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Date of Birth
          </Typography>
          <Typography variant="body1">
            { new Date(personalData.birthDay).toDateString() }
          </Typography>
        </Box>
      </Box>

      <Hidden smDown>
        <Divider className={classes.profileDivider} orientation="vertical" flexItem />
      </Hidden>
      <Hidden mdUp>
        <Divider className={classes.profileDivider} />
      </Hidden>      

      <Box className={classes.profileDataCol}>
        <Box className={classes.profileDataFieldRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Contact Data
          </Typography>

          <Button onClick={() => setOpenContactModal(true)}>Update</Button>
        </Box>
        <Box className={classes.profileDataRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Email Address
          </Typography>
          <Typography variant="body1">
            { contactData.email }
          </Typography>
        </Box>
        <Box className={classes.profileDataRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Phone Number
          </Typography>
          <Typography variant="body1">
            { contactData.phone }
          </Typography>
        </Box>        
      </Box>
      <Hidden smDown>
        <Divider className={classes.profileDivider} orientation="vertical" flexItem />
      </Hidden>
      <Hidden mdUp>
        <Divider className={classes.profileDivider} />
      </Hidden>
      <Box className={classes.profileDataCol}>
        <Box className={classes.profileDataFieldRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Security
          </Typography>
          <Button onClick={() => setOpenPassowrdModal(true)}>Update</Button>
        </Box>
        <Box className={classes.profileDataRow} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            Password
          </Typography>
          <Typography variant="body1">
            *********
          </Typography>
        </Box>             
      </Box>
      <EditPersonalData 
        open={openPersonalModal} 
        closeModal={() => setOpenPersonalModal(false)}
        personalData={personalData}
        handleUpdate={(data) => {
          setPersonalData(data)
          setOpenPersonalModal(false)
        }}
      />
      <EditContactData 
        open={openContactModal}
        closeModal={() => setOpenContactModal(false)}
        contactData={contactData}
        handleUpdate={(data) => {
          setContactData(data)
          setOpenContactModal(false)
        }}
      />
      <EditPassword 
       open={openPassowrdModal}
       closeModal={() => setOpenPassowrdModal(false)}
      />
    </Box>
  )
}

export default ProfileDataPanel
